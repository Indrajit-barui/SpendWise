import {ChevronDown} from "lucide-react"
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,


  Cell,
} from "recharts";
const ExpensesByCategory = () => {
    const categoryData = [
  {
    name: "Education",
    value: 499,
    color: "#8B5CF6",
  },
  {
    name: "Shopping",
    value: 850,
    color: "#F59E0B",
  },
  {
    name: "Food",
    value: 320,
    color: "#22C55E",
  },
  {
    name: "Transport",
    value: 300,
    color: "#3B82F6",
  },
  {
    name: "Entertainment",
    value: 200,
    color: "#EF4444",
  },
  {
    name: "Others",
    value: 331,
    color: "#9CA3AF",
  },
];
const totalExpenses=2500;
  return (
    <div className="w-full min-h-[300px] rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 flex flex-col">
                {/* Header */}
        <div className="flex justify-between px-2 items-center p-2">
            <div>
             <p className="font-bold">Expenses by category</p>
             <p className="text-sm text-gray-500">Breakdown of your expenses</p>
            </div>
            <div>
<button className="border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  This month
  <ChevronDown size={16} />
</button>
            </div>

        </div>
        <div className="flex flex-col 2xl:flex-row items-center gap-6 2xl:gap-8 px-2 pb-5">
        <div className="flex-1 w-full h-[200px] 2xl:w-1/2 ">
         
          <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
    data={categoryData}
     dataKey="value"
    innerRadius={60}
    outerRadius={100}
    nameKey="name"
          >
           {
            categoryData.map((item)=>(
                <Cell
        key={item.name}
        fill={item.color}
      />
            ))
           } 
          </Pie>
<text
    x="50%"
    y="48%"
    textAnchor="middle"
    dominantBaseline="middle"
    fontSize="20"
    fontWeight="bold"
  >
    ₹ 2,500
  </text>

  <text
    x="50%"
    y="58%"
    textAnchor="middle"
    dominantBaseline="middle"
    fontSize="12"
    fill="gray"
  >
    Total Expenses
  </text>
          <Tooltip />

          
        </PieChart>
      </ResponsiveContainer> 
      </div> 
     
            {/* Expenses categories */}
      <div className="space-y-3 w-full 2xl:w-1/2">
        {
          categoryData.map((item)=>(
            <div key={item.name} className="grid grid-cols-3 ">
              {/* name */}
              <div className="flex items-center gap-1">
                  <span
                     className="h-3 w-3 rounded-sm shrink-0"
                    style={{ backgroundColor: item.color }}
                   ></span>

                   <span>{item.name}</span>
               </div>
               {/* Amount */}
              <span className="text-right"><i className="fa-solid fa-indian-rupee-sign"></i>{item.value}</span>
              {/* percentage */}
              <span className="text-gray-400 text-right">{((item.value/totalExpenses)*100).toFixed(1)} <i className="fa-solid fa-percent"></i></span>
            </div>
          ))
        }
      </div>
       </div>
        </div>
 
  )
}

export default ExpensesByCategory