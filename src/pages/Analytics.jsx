import Stats from "../components/Stats/Stats"
import IncomeVsExpenses from "@/components/Analytics/IncomeVsExpenses"
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory"
import MonthleySpendingTrend from "@/components/Analytics/MonthleySpendingTrend"
const Analytics = () => {
  return (
    <section>
       <Stats/>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
         <IncomeVsExpenses/>
         <ExpensesByCategory/>
         <MonthleySpendingTrend/>
       </div>
       
    </section>
  )
}

export default Analytics