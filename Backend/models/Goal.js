const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    targetAmount: {
      type: Number,
      required: true,
    },

    targetDate: {
      type: Date,
      required: true,
    },

    monthlyContribution: {
      type: Number,
      default: 0,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;