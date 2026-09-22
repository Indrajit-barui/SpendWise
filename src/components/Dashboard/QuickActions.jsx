import { Target,Plus,ChartNoAxesCombined } from "lucide-react"
import { useNavigate } from "react-router-dom";


import Analytics from "@/pages/Analytics";
import Income from "@/pages/Income";
import Expenses from "@/pages/Expenses";
import Budget_goals from "@/pages/Budget_goals";
const QuickActions = ({savingsPercentage}) => {
const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] px-2 py-2">
        {/* header */}
        <div className="flex flex-col gap-1">
            <p className="text-xl font-bold">Quick Actions</p>
            <p className="text-sm text-gray-600">Everything you need in one place</p>
        </div>
          <div className="grid grid-cols-2 gap-2">
<button
  type="button"
onClick={() => navigate("/Income")}
  className="w-full flex items-center gap-3 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-left transition hover:border-green-200 hover:bg-green-100"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
    <Plus size={21} className="text-green-600" />
  </div>

  <div>
    <p className="font-semibold text-green-900">
      Add Income
    </p>
    <p className="text-sm text-green-600">
      Record your earnings
    </p>
  </div>
</button>
<button

  type="button"
  onClick={() => navigate("/Budget_goals")}
  className="w-full flex items-center gap-4 rounded-xl border border-purple-100 bg-purple-50 px-4 py-3 text-left transition hover:border-purple-200 hover:bg-purple-100"
>
  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
    <Target size={22} />
  </div>

  <div>
    <p className="font-semibold text-purple-900">
      Budget & Goals
    </p>
    <p className="text-sm text-purple-600">
      Plan and track your finances
    </p>
  </div>
</button>            

<button
  type="button"
    onClick={() => navigate("/Expenses")}
  className="w-full flex items-center gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-left transition hover:border-red-200 hover:bg-red-100"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100">
    <Plus size={21} className="text-red-600" />
  </div>

  <div>
    <p className="font-semibold text-red-900">
      Add Expense
    </p>
    <p className="text-sm text-red-600">
      Record your spending
    </p>
  </div>
</button>
<button
  type="button"
  onClick={() => navigate("/Analytics")}
  className="w-full flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-left transition hover:border-blue-200 hover:bg-blue-100"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
    <ChartNoAxesCombined size={21} className="text-blue-600" />
  </div>

  <div>
    <p className="font-semibold text-blue-900">
      View Analytics
    </p>
    <p className="text-sm text-blue-600">
      Understand your spending
    </p>
  </div>
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
    onClick={() => navigate("/Income")}
  className="text-xl text-purple-600 cursor-pointer">
    →
  </span>

</div>
    </div>
  )
}

export default QuickActions