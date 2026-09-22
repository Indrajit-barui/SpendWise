import { jsPDF } from "jspdf";

const DownloadReport = (income, expenses) => {
const currentDate = new Date();

const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const monthName = currentDate.toLocaleString("en-US", {
  month: "long",
});

const reportMonth = `${monthName} ${currentYear}`;

const monthlyIncome=income.filter((item)=>{
  const date=new Date(item.date);


  return(
    date.getMonth()===currentMonth &&
    date.getFullYear()===currentYear
  )


})

const monthlyExpenses=expenses.filter((item)=>{
  const date=new Date(item.date);


  return(
    date.getMonth()===currentMonth &&
    date.getFullYear()===currentYear
  )


})

const currentmonthIncome=monthlyIncome.reduce((acc,curr)=>{
  return acc+Number(curr.amount)
},0)

const currentmonthExpenses=monthlyExpenses.reduce((acc,curr)=>{
  return acc+Number(curr.amount)
},0)

const remainingBalance=currentmonthIncome-currentmonthExpenses;

const savingsPercentage =
  currentmonthIncome > 0
    ? ((remainingBalance / currentmonthIncome) * 100).toFixed(1)
    : 0;

const categoryExpenses = {};

monthlyExpenses.forEach((item) => {
  if (!categoryExpenses[item.category]) {
    categoryExpenses[item.category] = 0;
  }

  categoryExpenses[item.category] += Number(item.amount);
});

// previous month:

const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
const previousMonthIncome = income.filter((item) => {
  const date = new Date(item.date);

  return (
    date.getMonth() === previousMonth &&
    date.getFullYear() === previousYear
  );
});
const previousMonthExpense = expenses.filter((item) => {
  const date = new Date(item.date);

  return (
    date.getMonth() === previousMonth &&
    date.getFullYear() === previousYear
  );
});
const previousMonthExpenseTotal = previousMonthExpense.reduce((acc, curr) => {
  return acc + Number(curr.amount);
}, 0);
const totalExpenseDiff=currentmonthExpenses-previousMonthExpenseTotal;
const totalIncomeDiff=currentmonthIncome-previousMonthIncome;

const Highestexpense=expenses.reduce((highest,curr)=>{
  return curr.amount> highest.amount?curr:highest
},{amount:0})

const totalIncomeTransaction = monthlyIncome.length;
const totalExpenseTransaction = monthlyExpenses.length;

const incomeChange =
  totalIncomeDiff >= 0 ? "increased" : "decreased";
const expenseChange =
  totalExpenseDiff >= 0 ? "increased" : "decreased";




const incomePercentage =
  previousMonthIncome > 0
    ? Math.abs(totalIncomeDiff / previousMonthIncome) * 100
    : 0;

const expensesPercentage =
  previousMonthExpense > 0
    ? Math.abs(totalExpenseDiff / previousMonthExpense) * 100
    : 0;
const insights = [
  {
    id:1,
    title: `Your income ${incomeChange} by ${incomePercentage.toFixed(1)}%`,
    description: `You earned Rs. ${totalIncomeDiff} more than last month.`,
    type: "income",
  },
  {
    id:2,
    title: `Your expenses ${expenseChange} by ${expensesPercentage.toFixed(1)}%`,
    description: `You spent Rs. ${totalExpenseDiff} more than last month.`,
    type: "expense",
  },
  {
    id:3,
    title: `${Highestexpense.category} is your highest expense category`,
    description:`You spent Rs. ${Highestexpense.amount} (19.9%) on education.`,
    type: "education",
  },
  {
    id:4,
    title: `You had ${totalExpenseTransaction+totalIncomeTransaction} transactions`,
    description: `${totalIncomeTransaction} income transactions and ${totalExpenseTransaction} expense transactions.`,
    type: "transactions",
  },
];

  const doc = new jsPDF();

  doc.text("SpendWise Monthly Report", 20, 20);
  doc.text(reportMonth,20,30)
  doc.text(`Total Income: Rs. ${currentmonthIncome}`, 20, 40);
  doc.text(`Total Expenses: Rs. ${currentmonthExpenses}`, 20, 50);
  doc.text(`Remaining Balance: Rs. ${remainingBalance}`, 20, 60);
  doc.text(`Savings: ${savingsPercentage}%`, 20, 70);
 

  doc.text("Income vs Expenses", 20, 90);
  doc.text(`Income: Rs. ${currentmonthIncome}`, 20, 105);
  doc.text(`Expenses: Rs. ${currentmonthExpenses}`, 20, 115);
  doc.text("Expenses by Category", 20, 135);
  let y = 145;

Object.entries(categoryExpenses).forEach(([category, amount]) => {
  doc.text(`${category}: Rs. ${amount}`, 20, y);
  y += 10;
});

let insightY = y + 30;

doc.text("Monthly Insights", 20, insightY);

insightY += 15;

insights.forEach((insight) => {
  doc.text(insight.title, 20, insightY);
  doc.text(insight.description, 20, insightY + 10);

  insightY += 25;
});
  doc.save("SpendWise_Report.pdf");
};

export default DownloadReport;