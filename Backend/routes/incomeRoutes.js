const express=require('express');
const Income=require('../models/Income');
const authMiddleware=require("../middleware/authMiddleware")
const router=express.Router();
router.post("/",authMiddleware,async(req,res)=>{
    try {
        const income=await Income.create({
            ...req.body,
            user:req.userId
        });
        res.status(201).json(income)
    } catch (error) {
        res.status(500).json({message:error.message})
    }                                    
})


router.get("/",authMiddleware,async(req,res)=>{
    try {
        const income=await Income.find({
           
            user:req.userId
        });
        res.status(200).json(income);
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.delete("/:id",authMiddleware,async(req,res)=>{
    try {
const income = await Income.findOneAndDelete({
  _id: req.params.id,
  user: req.userId
});
    if(!income){
      return res.status(404).json({message:"Income not found"});
    }
    res.json({message:"Income deleted successfully"});
    } 
    
    catch (error) {
         res.status(500).json({message:error.message})
    }
})

 // edit

 router.put("/:id",authMiddleware,async(req,res)=>{
    try {
const income = await Income.findOneAndUpdate(
    {
        _id: req.params.id,
        user: req.userId
    },
    req.body,
    { new: true, runValidators: true }
);
      
      if(!income){
          return res.status(404).json({message:"Income not found"});
      }
      res.json(income);
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
 })

module.exports=router;