import {ChevronDown} from 'lucide-react'
import {

  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  CartesianGrid
} from "recharts";

const ExpensesTrend = () => {
    const expenseTrendData = [
  { month: "Jan", expenses: 1300 },
  { month: "Feb", expenses: 1900 },
  { month: "Mar", expenses: 1600 },
  { month: "Apr", expenses: 2700 },
  { month: "May", expenses: 1800 },
  { month: "Jun", expenses: 2400 },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2 ">
                <div className="flex  flex-col gap-2  xl:flex-row xl:justify-between xl:items-center p-2">
            <div>
             <p className="font-bold">Expense Trend</p>
             <p className="text-sm text-gray-500">Your expense overtime</p>
            </div>
            <div>
<button className="w-fit border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  Last 6 Months
  <ChevronDown size={16} />
</button>
            </div>

        </div>
        
                <div className="h-[250px]">
                    <ResponsiveContainer height="100%" width="100%">
                        <ComposedChart data={expenseTrendData}>
                        <XAxis dataKey="month"/>
                        <YAxis/>
                       <CartesianGrid vertical={false}/>
                       <Area
                        type="monotone"
                        dataKey="expenses"
                        stroke="none"
                        fill="#ef4444"
                        fillOpacity={0.12}
                        legendType="none"
                        
                        />
                 <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#ef4444"
                  strokeWidth={2}
                />
        
                <Tooltip/>
                <Legend/>
              </ComposedChart>
            </ResponsiveContainer>
                </div>
    </div>
  )
}

export default ExpensesTrend