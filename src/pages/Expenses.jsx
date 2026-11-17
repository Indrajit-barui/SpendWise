
import ExpensesStats from "@/components/Stats/ExpensesStats"
import ExpensesTrend from "@/components/Expenses/ExpensesTrend"
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory"
import AllExpenses from "@/components/Expenses/AllExpenses"
import EmptyState from "@/components/Expenses/EmptyState"
import { useContext } from "react"
import { Context } from "@/Context/Context"

import { calculateTotalExpenses } from "../utils/financeUtils";


const Expenses = () => {
const {expenses,setExpenses}=useContext(Context)
const Totalexpense = calculateTotalExpenses(expenses);

const Highestexpense=expenses.reduce((highest,curr)=>{
  return curr.amount> highest.amount?curr:highest
},{amount:0})


const TotalTransactions=expenses.length;
const AverageExpense =
  expenses.length > 0
    ? (Totalexpense / expenses.length).toFixed(2)
    : 0;const data=expenses.length>0;
  return (
      data?   ( <div>

       <ExpensesStats
       Totalexpense={Totalexpense}
       TotalTransactions={TotalTransactions}
       Highestexpense={Highestexpense}
       AverageExpense={AverageExpense}
       />
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            
              <ExpensesTrend
              expenses={expenses}
            
              />
           
              <ExpensesByCategory expenses={expenses}
            
              />
              <div className="lg:col-span-2">
                <AllExpenses expenses={expenses}
               setExpenses={setExpenses}/>
              </div>
             
       </div>
    </div>):(<EmptyState/>)

  )
}

export default Expenses