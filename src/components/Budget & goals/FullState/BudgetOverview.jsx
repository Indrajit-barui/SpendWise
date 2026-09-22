
import { Utensils,Bus,GraduationCap,ShoppingCart,Gamepad2,MoreHorizontal, Pencil,Plus} from "lucide-react"

const BudgetOverview = () => {
const categories = [
  {
    name: "Food",
    spent: 1600,
    limit: 2000,
    icon: Utensils,
    color: "bg-green-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    name: "Transport",
    spent: 600,
    limit: 1000,
    icon: Bus,
    color: "bg-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    name: "Education",
    spent: 400,
    limit: 1000,
    icon: GraduationCap,
    color: "bg-purple-500",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    name: "Shopping",
    spent: 300,
    limit: 500,
    icon: ShoppingCart,
    color: "bg-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    name: "Entertainment",
    spent: 200,
    limit: 500,
    icon: Gamepad2,
    color: "bg-pink-500",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    name: "Others",
    spent: 100,
    limit: 500,
    icon: MoreHorizontal,
    color: "bg-gray-500",
    iconBg: "bg-gray-100",
    iconColor: "text-gray-600",
  },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        
        {/* header */}
<div className="flex justify-between items-start">
  <div>
    <p className="text-xl font-semibold text-gray-900">
      Budget Overview
    </p>

    <p className="text-sm text-gray-500">
      Track your category-wise spending against your budget.
    </p>
  </div>

  <div className="flex gap-2">
    {/* Add Expense */}
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-600"
    >
      <Plus size={18} />
      Add Expense
    </button>

    {/* Edit Budget */}
    <button
      type="button"
      className="flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-600 transition hover:bg-purple-100"
    >
      <Pencil size={18} />
      Edit Budget
    </button>
  </div>
</div>
        <div>
            {categories.map((category)=>{
                  const Icon=category.icon;
                  const percentage = (category.spent / category.limit) * 100;
              return(
                <div key={category.name}>
                    {/* desktop */}
                    <div className="grid grid-cols-[48px_110px_1fr_120px_55px] items-center gap-3 border-b py-1.5">
                        {/* icon */}
                    <div className={`w-12 h-12 rounded-full ${category.iconBg} flex justify-center items-center`}>
                         <Icon size={20} className={`${category.iconColor}`}/>
                    </div>
                     <div>
                        {category.name}
                     </div>
                     {/* ber */}
                    <div className="flex-1 h-3 rounded-full bg-gray-200">
                     <div
                       className={`h-full rounded-full ${category.color}`}
                       style={{ width: `${percentage}%` }}></div>
                   </div>

                   <div>
                    {`${category.spent} / ${category.limit}`}
                   </div>

                   <div className={`h-5 w-10 ${category.iconBg} ${category.iconColor} flex justify-center rounded-sm items-center text-left`}>
                    {percentage}
                   </div>
                    </div>

                    {/* mobile */}
                </div>
              )

})}
        </div>
    </div>
  )
}

export default BudgetOverview