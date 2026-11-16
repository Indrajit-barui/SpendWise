
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Cell
} from "recharts";

import { ChartNoAxesColumnIncreasing } from "lucide-react";

const IncomevsExpenses = ({income,expenses}) => {

const today=new Date();
const currentMonth=today.getMonth();
const currentYear=today.getFullYear();
const currentmonthIncome=income.filter((item)=>{
  const date=new Date(item.date);


  return(
    date.getMonth()===currentMonth &&
    date.getFullYear()===currentYear
  )


}).reduce((acc,curr)=>{
  return acc+Number(curr.amount);
},0)
const currentmonthExpenses=expenses.filter((item)=>{
  const date=new Date(item.date);


  return(
    date.getMonth()===currentMonth &&
    date.getFullYear()===currentYear
  )


}).reduce((acc,curr)=>{
  return acc+Number(curr.amount);
},0)

    const chartData = [
  {
    name: "Income",
    amount: currentmonthIncome
    
  },
  {
    name: "Expenses",
    amount: currentmonthExpenses
  },
];
const hasTransactions =
  currentmonthIncome > 0 || currentmonthExpenses > 0;
const COLORS = ["#22c55e", "#ef4444"];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2">
        {/* header */}
        <div>
            <p className="text-xl font-bold">Income vs Expenses</p>
            <p className="text-gray-700">Comparison of your income and expenses for sep 2026</p>
        </div>
        {/* chart */}
        
{/* Chart */}

{hasTransactions ? (

  <>
    <div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
            {chartData.map((item, index) => (
              <Cell
                key={item.name}
                fill={COLORS[index]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Legend */}
    <div className="flex justify-center gap-6 mb-3">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
        <span>Income</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span>Expenses</span>
      </div>
    </div>
  </>

) : (

  /* Empty State */

  <div className="flex min-h-[250px] flex-col items-center justify-center text-center px-4">

    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 mb-4">
      <ChartNoAxesColumnIncreasing
        size={30}
        className="text-indigo-500"
      />
    </div>

    <h3 className="text-lg font-semibold text-gray-800">
      No financial activity yet!
    </h3>

    <p className="mt-2 max-w-xs text-sm text-gray-500">
      Start adding your income and expenses to see your monthly financial comparison.
    </p>

  </div>

)}

        </div>
    
  )
}

export default IncomevsExpenses