import herober1 from "../../../assets/images/herober1.jpeg"
import herober2 from "../../../assets/images/herober2.jpeg"
import { Plus ,Quote} from "lucide-react"
import { useContext } from "react";
import {Budget_goalsContext} from './BudgetEmptyState'
const Hero = () => {
const {setOpen,setDisplay}=useContext(Budget_goalsContext);
  return (
    <section className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] ">
        <div className=" flex flex-col px-3 xl:flex-row  justify-between items-center xl:h-[350px] xl:px-6">
        <div className=" w-full h-[200px] xl:w-[25%] xl:h-full">
          <img src={herober1} alt="" srcset=""  className="w-full h-full object-cover"/>
        </div>
        <div className="w-full flex flex-col items-center text-center xl:w-[50%]">
            <div>
            <p className="text-2xl xl:text-3xl font-bold text-gray-900">Start Planning Your Future</p>
            </div>
            <div className="mt-3">
            <p className="text-gray-600 leading-7">You haven't created a budget or any financial goals yet. <br className="hidden xl:block"/> Set a budget to control your spending and create goals to track <br className="hidden xl:block"/> what you're saving for.</p>
            </div>
      <div className="flex flex-col  xl:flex-row gap-3 mt-6">
  <button 
  type="button"
  onClick={()=>setOpen(true)}
  className="flex flex-row  gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
    <Plus/> Create Your First Budget
  </button>

  <button 
  onClick={()=>setDisplay(true)}
  type="button"
  className="border border-purple-300 text-purple-600 px-6 py-3 rounded-lg font-medium">
    🎯 Create a Goal
  </button>
</div>
<div className="flex items-center gap-2 mt-6 px-6 py-3 rounded-xl xl:rounded-full bg-purple-50 text-purple-600 text-sm italic">
  <Quote size={18} className="shrink-0 mt-0.5" />
  <span>A small plan today leads to big dreams tomorrow.</span>
</div>
        </div>
        <div className="hidden xl:block w-[25%] h-full ">
          <img src={herober2} alt="" srcset="" className="w-full h-full object-cover"/>
        </div>
        </div>

    </section>
  )
}

export default Hero