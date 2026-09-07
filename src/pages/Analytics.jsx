import Stats from "../components/Stats/Stats"
import IncomeVsExpenses from "@/components/Analytics/IncomeVsExpenses"
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory"
import MonthleySpendingTrend from "@/components/Analytics/MonthleySpendingTrend"
import CategoryWise_spending from "@/components/Analytics/CategoryWise_spending"
const Analytics = () => {
  return (
    <section>
       <Stats/>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
         <IncomeVsExpenses/>
         <ExpensesByCategory/>
         <MonthleySpendingTrend/>
         <CategoryWise_spending/>
       </div>
       
    </section>
  )
}

export default Analytics