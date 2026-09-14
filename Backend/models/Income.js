
const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
  const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;