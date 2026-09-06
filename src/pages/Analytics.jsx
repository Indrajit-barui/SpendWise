import Stats from "../components/Stats/Stats"
import IncomeVsExpenses from "@/components/Analytics/IncomeVsExpenses"
const Analytics = () => {
  return (
    <section>
       <Stats/>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
         <IncomeVsExpenses/>
       </div>
       
    </section>
  )
}

export default Analytics