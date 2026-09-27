const express=require("express")
const User=require("../models/userModel")
const bcrypt=require("bcrypt")
const validator=require("validator")
const router=express.Router();

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

    res.status(201).json({
        message:"Account created successfully"
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
    } catch (error) {
            res.status(500).json({
            message:"Server error",
        })
    }
  
})


module.exports=router