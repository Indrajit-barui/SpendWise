import {ChevronDown} from "lucide-react"
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
Legend
} from "recharts"
import { useContext } from "react";
import { Context } from "@/Context/Context";
const CategoryWise_spending = () => {
  const {expenses}=useContext(Context)

const categoryWiseData = Array.from({ length: 6 }, (_, index) => {
  const date = new Date();

  date.setMonth(date.getMonth() - (5 - index));

  const month = date.toLocaleString("en-US", {
    month: "short",
  });

  const year = date.getFullYear();
  const monthIndex = date.getMonth();

  const monthData = {
    month,
  };

  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.date);

    if (
      expenseDate.getFullYear() === year &&
      expenseDate.getMonth() === monthIndex
    ) {
      monthData[expense.category] =
        (monthData[expense.category] || 0) +
        Number(expense.amount);
    }
  });

  return monthData;
});
const categories = [
  { name: "Food", color: "#22C55E" },
  { name: "Groceries", color: "#F59E0B" },
  { name: "Transport", color: "#3B82F6" },
  { name: "Education", color: "#8B5CF6" },
  { name: "Shopping", color: "#EC4899" },
  { name: "Entertainment", color: "#EF4444" },
  { name: "Bills & Utilities", color: "#14B8A6" },
  { name: "Subscriptions", color: "#6366F1" },
  { name: "Health", color: "#F43F5E" },
  { name: "Personal Care", color: "#A855F7" },
  { name: "Housing", color: "#64748B" },
  { name: "Travel", color: "#0EA5E9" },
  { name: "Gifts", color: "#E11D48" },
  { name: "Debt & Payments", color: "#78716C" },
  { name: "Other", color: "#9CA3AF" },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                {/* Header */}
        <div className="flex justify-between px-2 items-center p-2">
            <div>
             <p className="font-bold">Category-wise monthly spending</p>
             <p className="text-sm text-gray-500">How your spending is distributed each month</p>
            </div>
            <div>
<button className="border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  Last 6 Months
  <ChevronDown size={16} />
</button>
            </div>

        </div>

        {/* chart */}
        <div className="h-[250px] category-chart">
         <ResponsiveContainer height="100%" width="100%">
           <BarChart data={categoryWiseData}>
            {
              categories.map((category)=>(
                <Bar
                
                key={category.name}
                dataKey={category.name}
                stackId="a"
                fill={category.color}
                />


                
              ))
            }

            <XAxis dataKey="month"/>
            <YAxis/>
            <Legend className="desktop-only-legend"/>
            <Tooltip/>
           </BarChart>

         </ResponsiveContainer>
        </div>

    </div>
  )
}

export default CategoryWise_spending