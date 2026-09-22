import Hero from "./Hero"

import BudgetCard from "./BudgetCard"
import GoalCard from "./GoalCard"
import Card from "./Card"
import { createContext,useState } from "react"

export const Budget_goalsContext=createContext();   
const BudgetEmptyState = () => {
  const [open,setOpen]=useState(false);
    const [display,setDisplay]=useState(false)
  return (
    <div>
      <Budget_goalsContext.Provider value={{open,setOpen,setDisplay,display}}>
      <Hero/>
    <div className="flex flex-col xl:flex-row gap-3 mt-5">
      <BudgetCard/>
      <GoalCard/>
    </div>
     <Card/> 
     </Budget_goalsContext.Provider>
    </div>
  )
}

export default BudgetEmptyState