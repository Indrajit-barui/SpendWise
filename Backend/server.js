const express = require("express");
const connectDB = require("./db");
const cors=require('cors')
const expenseRoutes = require("./routes/expenseRoutes");
const incomeRoutes=require("./routes/incomeRoutes")
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/expenses", expenseRoutes);
app.use("/income",incomeRoutes);

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});