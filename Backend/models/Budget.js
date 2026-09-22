const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    monthlyBudget: {
      type: Number,
      required: true,
    },

    categoryLimits: [
      {
        name: {
          type: String,
          required: true,
        },

        amount: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;