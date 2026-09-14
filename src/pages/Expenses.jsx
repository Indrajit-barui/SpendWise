import { useState,useEffect } from "react"
import ExpensesStats from "@/components/Stats/ExpensesStats"
import ExpensesTrend from "@/components/Expenses/ExpensesTrend"
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory"
import AllExpenses from "@/components/Expenses/AllExpenses"




const Expenses = () => {
  const [expenses,setExpenses]=useState([]);
  useEffect(()=>{
  fetch("http://localhost:5000/expenses").then((response)=> response.json())
  .then((data)=>{
    setExpenses(data);
  
  })
},[])
  return (
    <div>
       <ExpensesStats/>
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
    </div>
  )
}

export default Expenses