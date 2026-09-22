const express = require("express");
const Goal = require("../models/Goal");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const goal = await Goal.create(req.body);

    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const goals = await Goal.find();

    res.json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;