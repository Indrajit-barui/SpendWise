
import {BarChart,XAxis,YAxis,Tooltip,Bar,ResponsiveContainer, Cell} from "recharts"

const IncomevsExpenses = () => {
    const incomeExpenseData = [
  {
    name: "Income",
    amount: 6500,
    
  },
  {
    name: "Expenses",
    amount: 2500,
  },
];
const COLORS = ["#22c55e", "#ef4444"];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2">
        {/* header */}
        <div>
            <p className="text-xl font-bold">Income vs Expenses</p>
            <p className="text-gray-700">Comparison of your income and expenses for sep 2026</p>
        </div>
        {/* chart */}
        
<div className="w-full h-[250px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={incomeExpenseData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        
          <Bar
            dataKey="amount"
            
            radius={[6, 6, 0, 0]}
          >
            {
                incomeExpenseData.map((item,index)=>(
                    <Cell 
                       key={item.name}
                       fill={COLORS[index]}
                    />
                ))
            }
            </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
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
        </div>
    
  )
}

export default IncomevsExpenses