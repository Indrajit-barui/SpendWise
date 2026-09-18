import Hero from "./Hero"

import BudgetCard from "./BudgetCard"
import GoalCard from "./GoalCard"
import Card from "./Card"
const BudgetEmptyState = () => {
  return (
    <div><Hero/>
    <div className="flex flex-col xl:flex-row gap-3 mt-5">
      <BudgetCard/>
      <GoalCard/>
    </div>
     <Card/> 
    </div>
  )
}

export default BudgetEmptyState