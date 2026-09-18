import {ChevronDown} from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid ,
  Legend
} from "recharts";
import { useContext } from "react";
import { Context } from "@/App";
const IncomeVsExpenses = () => {

  const {expenses,income}=useContext(Context);


const today = new Date();

const months = [];

for (let i = 5; i >= 0; i--) {
  const date = new Date(
    today.getFullYear(),
    today.getMonth() - i,
    1
  );

  const month = date.toLocaleString("en-US", {
    month: "short"
  });

  months.push(month);
}



const chartData = months.map((month) => {

  // 1. Get income for this month
  const monthlyIncome = income.filter((item) => {
    const currentMonth = new Date(item.date).toLocaleString("en-US", {
      month: "short"
    });

    return currentMonth === month;
  });

  // 2. Add income amounts
  const monthlyIncomeTotal = monthlyIncome.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);


  // 3. Get expenses for this month
  const monthlyExpenses = expenses.filter((item) => {
    const currentMonth = new Date(item.date).toLocaleString("en-US", {
      month: "short"
    });

    return currentMonth === month;
  });

  // 4. Add expense amounts
  const monthlyExpensesTotal = monthlyExpenses.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);


  // 5. Create the object for this month
  return {
    month: month,
    income: monthlyIncomeTotal,
    expenses: monthlyExpensesTotal
  };
});


  return (
    <div className="w-full min-h-[300px] rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 flex flex-col">
        {/* Header */}
        <div className="flex justify-between px-2 items-center p-2">
            <div>
             <p className="font-bold">Income vs Expenses</p>
             <p className="text-sm text-gray-500">Monthly comparison of income and expenses</p>
            </div>
            <div>
<button className="border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  Last 6 Months
  <ChevronDown size={16} />
</button>
            </div>

        </div>

        {/* Chart */}
        <div className="flex-1 min-h-[250px]">
<ResponsiveContainer width="100%" height="100%">
   <BarChart  data={chartData}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <CartesianGrid vertical={false}/>
        <Bar dataKey="income" fill="#39ab31" />
      <Bar dataKey="expenses" fill="#b7490e"/>
       <Legend/>
    </BarChart>
</ResponsiveContainer>
        </div>
        
    </div>
  )
}

export default IncomeVsExpenses