import IncomeStats from "@/components/Stats/IncomeStats"
import AllIncome from "@/components/Income/AllIncome"
import IncomeTrend from "@/components/Income/IncomeTrend"
import TopincomeSources from "@/components/Income/TopincomeSources"
const Income = () => {
  return (
    <div className="">
      <IncomeStats/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="lg:col-span-2">
                  <AllIncome/> 
            </div>
            <div>
                 <IncomeTrend/>
            </div>
            <div>
              <TopincomeSources/>
            </div>
               
        </div>
    </div>
  )
}

export default Income