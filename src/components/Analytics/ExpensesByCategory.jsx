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
<div className="w-full min-w-0 min-h-[300px] rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 flex flex-col overflow-hidden">

  {/* Header */}
  <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 p-2">

    <div className="min-w-0">
      <p className="font-bold">
        Expenses by category
      </p>

      <p className="text-sm text-gray-500">
        Breakdown of your expenses
      </p>
    </div>

    <div className="shrink-0">
      <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm">
        This month
        <ChevronDown size={16} />
      </button>
    </div>

  </div>

  {/* Chart + categories */}
  <div className="flex min-w-0 flex-col items-center gap-6 px-2 pb-5 2xl:flex-row 2xl:gap-8">

    {/* Pie Chart */}
    <div className="relative min-w-0 w-full h-[200px] 2xl:flex-1">

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
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
            outerRadius="90%"
          >
            {categoryData.map((data, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

    </div>

    {/* Categories */}
    <div className="w-full min-w-0 space-y-3 2xl:flex-1">

      {categoryData.slice(0, 5).map((item, index) => (
        <div
          key={item.category}
          className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto_auto] gap-2"
        >

          <div className="flex min-w-0 items-center gap-2">

            <span
              className="h-3 w-3 shrink-0 rounded-sm"
              style={{
                backgroundColor: COLORS[index % COLORS.length]
              }}
            />

            <span className="min-w-0 truncate">
              {item.category}
            </span>

          </div>

          <span className="whitespace-nowrap text-right">
            ₹{item.amount}
          </span>

          <span className="whitespace-nowrap text-right text-gray-400">
            {((item.amount / totalExpenses) * 100).toFixed(1)}%
          </span>

        </div>
      ))}

    </div>

  </div>

</div>
 
  )
}

export default ExpensesByCategory