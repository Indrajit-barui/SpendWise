import BudgetOverview from "./BudgetOverview"
import SpendingBreakdown from "./SpendingBreakdown"
import YourFinancialGoal from "./YourFinancialGoal"
import Budget_GoalsStats from "@/components/Stats/Budget_GoalsStats"
const FullState = () => {
  return (
   
        <div>
            <div>
<Budget_GoalsStats />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <BudgetOverview/>
            <SpendingBreakdown />
            <div className="lg:col-span-2">
            <YourFinancialGoal />
            </div>
            </div>

        </div>
  
  )
}

export default FullState