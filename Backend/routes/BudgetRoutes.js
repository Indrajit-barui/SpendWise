const express=require('express');
const Budget=require("../models/Budget")

const router=express.Router();
router.get("/", async (req, res) => {
  try {
    const budgets = await Budget.find();

    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/",async(req,res)=>{
    try {
        const budget=await Budget.create(req.body);
        res.status(201).json(budget);
    }
     catch (error) {
        res.status(500).json({message:error.message})
    }
})
router.put("/:id", async (req, res) => {
  try {
    const budget = await Budget.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports=router;