import IncomeStats from "@/components/Stats/IncomeStats"
import AllIncome from "@/components/Income/AllIncome"
import IncomeTrend from "@/components/Income/IncomeTrend"
import TopincomeSources from "@/components/Income/TopincomeSources"
import { Context } from "@/Context/Context"
import { useContext } from "react"
const Income = () => {
const {income,setIncome}=useContext(Context)
const TotalIncome=income.reduce((acc,curr)=>{
  return acc+Number(curr.amount);
},0)

const HighestIncome=income.reduce((highest,curr)=>{
  return Number(curr.amount)>Number(highest.amount)?curr:highest
},{amount:0})

const TotalSources=new Set(
  income.map((item)=>{
    return item.source;
  })
).size

const AverageIncome=income.length>0?(TotalIncome/income.length).toFixed(2):0;
  return (
    <div className="">
      <IncomeStats TotalIncome={TotalIncome}
      HighestIncome={HighestIncome}
      TotalSources={TotalSources}
      AverageIncome={AverageIncome}
      />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="lg:col-span-2">
                  <AllIncome 
                  income={income}
                  setIncome={setIncome}
                  /> 
            </div>
            <div>
                 <IncomeTrend income={income}/>
            </div>
            <div>
              <TopincomeSources income={income}/>
            </div>
               
        </div>
    </div>
  )
}

export default Income