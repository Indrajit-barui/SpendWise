import ExpensesStats from "@/components/Stats/ExpensesStats"
import ExpensesTrend from "@/components/Expenses/ExpensesTrend"
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory"
const Expenses = () => {
  return (
    <div>
       <ExpensesStats/>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            
              <ExpensesTrend/>
           
              <ExpensesByCategory/>
             
       </div>
    </div>
  )
}

export default Expenses