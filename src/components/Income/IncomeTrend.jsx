import {ChevronDown} from "lucide-react"
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
const IncomeTrend = () => {
    const incomeTrendData = [
  { month: "Jan", income: 1700 },
  { month: "Feb", income: 2400 },
  { month: "Mar", income: 2700 },
  { month: "Apr", income: 3600 },
  { month: "May", income: 2600 },
  { month: "Jun", income: 3300 },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2 ">
        {/* header */}
        <div className="flex justify-between px-2 items-center p-2">
            <div>
             <p className="font-bold">Income Trend</p>
             <p className="text-sm text-gray-500">Your income overtime</p>
            </div>
            <div>
<button className="border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  Last 6 Months
  <ChevronDown size={16} />
</button>
            </div>

        </div>

        <div className="h-[250px]">
            <ResponsiveContainer height="100%" width="100%">
                <ComposedChart data={incomeTrendData}>
                <XAxis dataKey="month"/>
                <YAxis/>
               <CartesianGrid vertical={false}/>
               <Area
                type="monotone"
                dataKey="income"
                stroke="none"
                fill="#22c55e"
                fillOpacity={0.12}
                legendType="none"
                
                />
         <Line
          type="monotone"
          dataKey="income"
          stroke="#22C55E"
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

export default IncomeTrend