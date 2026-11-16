import { Target,Plus,ChartNoAxesCombined,ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom";



const QuickActions = ({savingsPercentage}) => {
const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] px-2 py-2 ">
        {/* header */}
        <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">Quick Actions</p>
            <p className="text-sm text-gray-600">Everything you need in one place</p>
        </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
<button
  type="button"
  onClick={() => navigate("/dashboard/Income")}
  className="group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/30 transition-transform duration-200 group-hover:rotate-90">
    <Plus size={20} />
  </div>

  <div className="min-w-0 flex-1">
    <p className="font-semibold text-emerald-900">Add Income</p>
    <p className="text-sm text-emerald-600">Record your earnings</p>
  </div>

  <ArrowRight
    size={18}
    className="shrink-0 text-emerald-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-emerald-600"
  />
</button>

<button
  type="button"
  onClick={() => navigate("/dashboard/Budget_goals")}
  className="group flex w-full cursor-pointer items-center gap-4 rounded-xl border border-purple-100 bg-gradient-to-r from-purple-50 to-fuchsia-50 px-4 py-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-md hover:shadow-purple-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
>
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-md shadow-purple-500/30 transition-transform duration-200 group-hover:scale-110">
    <Target size={22} />
  </div>

  <div className="min-w-0 flex-1">
    <p className="font-semibold text-purple-900">Budget &amp; Goals</p>
    <p className="text-sm text-purple-600">Plan and track your finances</p>
  </div>

  <ArrowRight
    size={18}
    className="shrink-0 text-purple-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-purple-600"
  />
</button>          

<button
  type="button"
  onClick={() => navigate("/dashboard/Expenses")}
  className="group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-rose-100 bg-gradient-to-r from-rose-50 to-red-50 px-4 py-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-md hover:shadow-rose-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-md shadow-rose-500/30 transition-transform duration-200 group-hover:rotate-90">
    <Plus size={20} />
  </div>

  <div className="min-w-0 flex-1">
    <p className="font-semibold text-rose-900">Add Expense</p>
    <p className="text-sm text-rose-600">Record your spending</p>
  </div>

  <ArrowRight
    size={18}
    className="shrink-0 text-rose-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-rose-600"
  />
</button>
<button
  type="button"
  onClick={() => navigate("/dashboard/Analytics")}
  className="group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-sky-50 px-4 py-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-md shadow-blue-500/30 transition-transform duration-200 group-hover:scale-110">
    <ChartNoAxesCombined size={20} />
  </div>

  <div className="min-w-0 flex-1">
    <p className="font-semibold text-blue-900">View Analytics</p>
    <p className="text-sm text-blue-600">Understand your spending</p>
  </div>

  <ArrowRight
    size={18}
    className="shrink-0 text-blue-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-blue-600"
  />
</button>
          </div>

          <div className="mt-4 rounded-xl bg-purple-50 p-4 flex items-center gap-4">

  <div className="h-10 w-10 shrink-0 rounded-full bg-yellow-100 flex items-center justify-center">
    💡
  </div>

  <div className="flex-1">
    <p className="font-semibold text-gray-900">
      You're doing great!
    </p>

    <p className="text-sm text-gray-600">
      You have saved {savingsPercentage}% of your income this month.
    </p>

    <p className="text-sm text-gray-600">
      Keep tracking to achieve your goals!
    </p>
  </div>

  <span 
    onClick={() => navigate("/dashboard/Income")}
  className="text-xl text-purple-600 cursor-pointer">
    →
  </span>

</div>
    </div>
  )
}

export default QuickActions