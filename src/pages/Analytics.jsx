import Stats from "../components/Stats/Stats"
import IncomeVsExpenses from "@/components/Analytics/IncomeVsExpenses"
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory"
import MonthleySpendingTrend from "@/components/Analytics/MonthleySpendingTrend"
import CategoryWise_spending from "@/components/Analytics/CategoryWise_spending"
import { useContext } from "react"
import { Context } from "@/Context/Context"
import {
  calculateCurrentMonthIncome,
  calculateCurrentMonthExpenses,
  calculateBalance,
  calculateTodayExpenses,
} from "../utils/financeUtils";
const Analytics = () => {
  const {expenses,income}=useContext(Context)
  const monthlyIncome = calculateCurrentMonthIncome(income);

const monthlyExpenses = calculateCurrentMonthExpenses(expenses);

const balance = calculateBalance(income, expenses);

const todayExpenses = calculateTodayExpenses(expenses);
  return (
    <section>
       <Stats
  totalIncome={monthlyIncome}
  totalExpenses={monthlyExpenses}
  balance={balance}
  todayExpenses={todayExpenses}
/>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
         <IncomeVsExpenses />
         <ExpensesByCategory expenses={expenses}/>
         <MonthleySpendingTrend  income={income} expenses={expenses}/>
         <CategoryWise_spending/>
       </div>
       
    </section>
  )
}

export default Analytics