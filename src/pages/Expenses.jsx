
import ExpensesStats from "@/components/Stats/ExpensesStats"
import ExpensesTrend from "@/components/Expenses/ExpensesTrend"
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory"
import AllExpenses from "@/components/Expenses/AllExpenses"
import EmptyState from "@/components/Expenses/EmptyState"
import { useContext } from "react"
import { Context } from "@/Context/Context"




const Expenses = () => {
// const {expenses,setExpenses}=useContext(Context)
// const Totalexpense=expenses.reduce((acc,curr)=>{
//   return acc+Number(curr.amount);
// },0)

// const Highestexpense=expenses.reduce((highest,curr)=>{
//   return curr.amount> highest.amount?curr:highest
// },{amount:0})


// const TotalTransactions=expenses.length;
// const AverageExpense=(Totalexpense/expenses.length).toFixed(2);
  return (
    // <div>

    //    <ExpensesStats
    //    Totalexpense={Totalexpense}
    //    TotalTransactions={TotalTransactions}
    //    Highestexpense={Highestexpense}
    //    AverageExpense={AverageExpense}
    //    />
    //    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            
    //           <ExpensesTrend
    //           expenses={expenses}
            
    //           />
           
    //           <ExpensesByCategory expenses={expenses}
            
    //           />
    //           <div className="lg:col-span-2">
    //             <AllExpenses expenses={expenses}
    //            setExpenses={setExpenses}/>
    //           </div>
             
    //    </div>
    // </div>

    <div>
        <EmptyState/>
    </div>
  )
}

export default Expenses