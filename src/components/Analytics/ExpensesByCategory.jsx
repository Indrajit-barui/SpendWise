import {ChevronDown} from "lucide-react"
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell
  
} from "recharts";
const ExpensesByCategory = ({expenses=[]}) => {

const categories=[...new Set(
  expenses.map((expense)=> expense.category)
)];
const categoryData = categories.map((category) => {

  const total = expenses
    .filter((expense) => {
      return expense.category === category;
    })
    .reduce((total, expense) => {
      return total + Number(expense.amount);
    }, 0);

  return {
    category: category,
    amount: total,
  };
}).sort((a,b)=> b.amount-a.amount);

const totalExpenses=expenses.reduce((acc,curr)=>{
    return acc+Number(curr.amount)
},0)
const COLORS = [
  "#ef4444", // red
  "#f97316", // orange
  "#eab308", // yellow
  "#22c55e", // green
  "#14b8a6", // teal
  "#06b6d4", // cyan
  "#3b82f6", // blue
  "#6366f1", // indigo
  "#8b5cf6", // violet
  "#a855f7", // purple
  "#ec4899", // pink
  "#f43f5e", // rose
  "#84cc16", // lime
  "#64748b", // slate
  "#78716c", // stone
];

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
        <div className="relative flex-1 w-full h-[200px] 2xl:w-1/2 ">
<div className="absolute inset-0  flex flex-col items-center justify-center pointer-events-none">
  <p className="text-xl font-bold">
    ₹ {totalExpenses.toLocaleString("en-IN")}
  </p>

  <p className="text-xs text-gray-500">
    Total Expenses
  </p>
</div>

          <ResponsiveContainer width="100%" height="100%">
        <PieChart>


            <Pie
            data={categoryData}
            dataKey="amount"
            nameKey="category"
            innerRadius="60%"
            outerRadius="90%"            >
            {
              categoryData.map((data,index)=>(
       <Cell
      key={`cell-${index}`}
      fill={COLORS[index % COLORS.length]}
      />
              ))
            }

           </Pie>
          <Tooltip />

          
        </PieChart>
      </ResponsiveContainer> 
      </div> 
     
            {/* Expenses categories */}
      <div className="space-y-3 w-full 2xl:w-1/2">
        {
          categoryData.slice(0,5).map((item,index)=>(
            <div key={item.category} className="grid grid-cols-3 ">
              {/* name */}
              <div className="flex items-center gap-2">

                  <span
                     className="h-3 w-3 rounded-sm shrink-0 "
                     style={{backgroundColor:COLORS[index%COLORS.length]}}
                   ></span>

                   <span>{item.category}</span>
               </div>
               {/* Amount */}
              <span className="text-right"><i className="fa-solid fa-indian-rupee-sign"></i>{item.amount}</span>
              {/* percentage  */}
               <span className="text-gray-400 text-right">{((item.amount/totalExpenses)*100).toFixed(1)} <i className="fa-solid fa-percent"></i></span>
            </div> 
          ))
        }
      </div>
       </div>
        </div>
 
  )
}

export default ExpensesByCategory