const express=require('express');
const Income=require('../models/Income');

const router=express.Router();
router.post("/",async(req,res)=>{
    try {
        const income=await Income.create(req.body);
        res.status(201).json(income)
    } catch (error) {
        res.status(500).json({message:error.message})
    }                                    
})


router.get("/",async(req,res)=>{
    try {
        const income=await Income.find();
        res.status(201).json(income);
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.delete("/:id",async(req,res)=>{
    try {
    const income=await Income.findByIdAndDelete(req.params.id);
    if(!income){
      return res.status(404).json({message:"Expense not found"});
    }
    res.json({message:"Expense delete successfully"});
    } 
    
    catch (error) {
         res.status(500).json({message:error.message})
    }
})

 // edit

 router.put("/:id",async(req,res)=>{
    try {
      const income=await Income.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true,runValidators:true}
        
      ) ;
      
      if(!income){
          return res.status(404).json({message:"Income not found"});
      }
      res.json(income);
    } 
    catch (error) {
        error.status(500).json({message:error.message})
    }
 })

module.exports=router;