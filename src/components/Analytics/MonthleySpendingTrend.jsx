import {ChevronDown} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from "recharts";
const MonthleySpendingTrend = () => {
    const monthlySpendingData = [
  {
    month: "Jan",
    income: 4200,
    expenses: 1000,
    balance: 3000,
  },
  {
    month: "Feb",
    income: 5200,
    expenses: 1400,
    balance: 3700,
  },
  {
    month: "Mar",
    income: 4900,
    expenses: 1100,
    balance: 3300,
  },
  {
    month: "Apr",
    income: 6500,
    expenses: 1800,
    balance: 4700,
  },
  {
    month: "May",
    income: 6800,
    expenses: 2100,
    balance: 4600,
  },
  {
    month: "Jun",
    income: 6100,
    expenses: 1900,
    balance: 4100,
  },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        {/* Header */}
                <div className="flex justify-between px-2 items-center p-2">
            <div>
             <p className="font-bold">Monthly Spending Trend</p>
             <p className="text-sm text-gray-500">Your income ,expenses and balance over time</p>
            </div>
            <div>
<button className="border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  Last 6 Months
  <ChevronDown size={16} />
</button>
            </div>

        </div>

        {/* chart */}

        <div className="h-[250px]">
            <ResponsiveContainer height="100%" width="100%">
                <LineChart data={monthlySpendingData}>
                <XAxis dataKey="month"/>
                <YAxis/>
               <CartesianGrid vertical={false}/>
         <Line
          type="monotone"
          dataKey="income"
          stroke="#22C55E"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="#EF4444"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#3B82f6"
          strokeWidth={2}
        />
        <Tooltip/>
        <Legend/>
      </LineChart>
    </ResponsiveContainer>
        </div>


    </div>
  )
}

export default MonthleySpendingTrend