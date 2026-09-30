const express=require("express")
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const validator=require("validator")
const router=express.Router();
const jwt=require("jsonwebtoken")
const authMiddleware=require("../middleware/authMiddleware")
const {sendResetEmail}=require("../service/emailService")
const Income=require("../models/Income")
const Expense=require("../models/Expense")

const crypto=require("crypto")
router.post("/signup",async(req,res)=>{

    try {
  const {name,email,password}=req.body;
    const existUser=await User.findOne({email});
    if(existUser){
        return res.status(400).json({message:"Email already registered"})
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({message:"please enter valid email"})
    }
    
    if (!validator.isStrongPassword(password)) {
  return res.status(400).json({
    message: "Password is not strong enough",
  });
}
    const hashedPassword=await bcrypt.hash(password,10);

    const newUser=new User({
        name,
        email,
        password:hashedPassword
    });

    await newUser.save();

    const token=jwt.sign({
        userId:newUser._id},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}

)

    res.status(201).json({
        message:"Account created successfully",
        token
    })
    } 
    catch (error) {

        res.status(500).json({
            message:"Server error",
        })
    }
  
})


router.post("/login",async(req,res)=>{
    try {
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).json({message:"Invalid email or password"})
    }
    const isPassword=await bcrypt.compare(password,user.password);
    if(!isPassword){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});

    res.status(200).json({message:"Login successful",token})
    } catch (error) {
            res.status(500).json({
            message:"Server error",
        })
    }
  
})

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.delete("/clear-data", authMiddleware, async (req, res) => {
  try {
    await Income.deleteMany({ user: req.userId });
    await Expense.deleteMany({ user: req.userId });

    res.status(200).json({
      message: "All data cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/forgot-password", async (req, res) => {
  try {
    console.log("reset password route hit");
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const resetToken = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();

    const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

    await sendResetEmail(user.email, resetLink);

    res.status(200).json({
      message: "Password reset link sent to your email",
    });

  } catch (error) {
    console.log("Forgot password error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired reset link",
      });
    }

    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        message: "Password is not strong enough",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({
      message: "Password reset successfully",
    });

  } catch (error) {
    console.log("Reset password error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
});

module.exports=router