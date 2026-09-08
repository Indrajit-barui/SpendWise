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
const IncomeVsExpenses = () => {
    const data = [
  {
    month: "Jan",
    income: 4200,
    expenses: 2100,
  },
  {
    month: "Feb",
    income: 5100,
    expenses: 2800,
  },
  {
    month: "Mar",
    income: 4800,
    expenses: 2300,
  },
  {
    month: "Apr",
    income: 6200,
    expenses: 3100,
  },
  {
    month: "May",
    income: 6500,
    expenses: 2500,
  },
  {
    month: "Jun",
    income: 5900,
    expenses: 2600,
  },
];
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
   <BarChart  data={data}>
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