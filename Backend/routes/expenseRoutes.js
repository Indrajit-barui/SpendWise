const express=require('express');
const Expense=require('../models/Expense')
const authMiddleware=require("../middleware/authMiddleware")
const router=express.Router();
router.post("/",authMiddleware,async(req,res)=>{
    try {
        const expense=await Expense.create({
            ...req.body,
            user:req.userId
        });
        res.status(201).json(expense)
    } catch (error) {
        res.status(500).json({message:error.message})
    }                                    
})

router.get("/", authMiddleware,async (req, res) => {
  try {
    const expenses = await Expense.find({
          user:req.userId
    });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 router.put("/:id",authMiddleware,async(req,res)=>{
    try {
const expense = await Expense.findOneAndUpdate(
    {
        _id: req.params.id,
        user: req.userId
    },
    req.body,
    { new: true, runValidators: true }
);
      
      if(!expense){
          return res.status(404).json({message:"expense not found"});
      }
      res.json(expense);
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
 })
router.delete("/:id",authMiddleware,async(req,res)=>{
  try {
const expense = await Expense.findOneAndDelete({
  _id: req.params.id,
  user: req.userId   
  
  })
  if(!expense){
      return res.status(404).json({message:"Expense not found"});
    }
    res.json({message:"Expense deleted successfully"});
  }
   catch (error) {
     res.status(500).json({message:error.message})
  }
})

module.exports=router;