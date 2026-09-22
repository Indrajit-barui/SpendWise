import { Check, Target,Plus,IndianRupee,Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { useState,useContext } from "react";

import {Budget_goalsContext} from './BudgetEmptyState'
const GoalCard = () => {
const {display,setDisplay} =useContext(Budget_goalsContext)
  const [goalData, setGoalData] = useState({
  title: "",
  targetAmount: "",
  targetDate: "",
  monthlyContribution: "",
  category: "Electronics",
  description: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...goalData,
      targetAmount: Number(goalData.targetAmount),
      monthlyContribution: Number(goalData.monthlyContribution) || 0,
    }),
  });

  // const data = await response.json();

  if(response.ok){
  setDisplay(false)
  }

};
  return (
    <div className="flex-1 rounded-lg border border-purple-100 bg-purple-50/50 p-3 xl:p-6">

      {/* Icon and heading */}
      <div className="flex items-center gap-4">
  

        <div>
          <h2 className="text-lg xl:text-xl font-bold text-gray-900">
            Set a Financial Goal
          </h2>

          <p className="mt-1 text-gray-600">
            Save for the things that matter to you, like a laptop,
            <br className="hidden xl:block"/>
            travel, or an emergency fund.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-purple-600 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Add personalized savings goals
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-purple-600 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Track your progress over time
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-purple-600 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Stay motivated to achieve your dreams
          </p>
        </div>

      </div>

      {/* Button */}
      <div 
      
      className="mt-6 flex justify-center">
        <button 
        onClick={()=>setDisplay(true)}
        className="flex w-full xl:w-auto items-center justify-center gap-2 rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white hover:bg-purple-700">
          <span className="text-xl"><Plus/></span>
          Create Goal
        </button>
      </div>
   <Dialog open={display} onOpenChange={setDisplay}>
  <DialogContent className="flex flex-col max-h-[90vh] sm:max-w-xl">
<DialogHeader>
  <div className="flex items-center gap-3">
    
    {/* Icon */}
    <div className="h-12 w-12 shrink-0 rounded-full bg-indigo-100 text-blue-700 flex items-center justify-center">
      <Target size={24} />
    </div>

    {/* Title + subtitle */}
    <div>
      <DialogTitle className="text-xl font-bold text-gray-900">
        Create a Financial Goal
      </DialogTitle>

      <DialogDescription className="mt-1">
        Set a goal, stay motivated and trun your dreams into reality
        </DialogDescription>
    </div>
   
<div>

</div>
  </div>
</DialogHeader>
<form  onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
{/* Goal title */}
<div className="flex-1 min-h-0 overflow-y-auto pr-2">
  <p className="text-xl font-bold">Goal Title <span className="text-red-500">*</span></p>


<div className="mt-3 flex h-14 w-full overflow-hidden rounded-lg border border-gray-300 focus-within:border-purple-500">
    
    <input
      type="text"
      value={goalData.title}
      required
      onChange={(e)=>setGoalData({
        ...goalData,title:e.target.value
      })}
      placeholder="e.g. Buy a Laptop"
      className="w-full px-4 text-lg outline-none"
    />

  </div>

{/* Target Amount */}
<div>
   <p className="font-bold">Target Amount<span className="text-red-500"> *</span></p>

<div className="mt-3 flex h-14 w-full overflow-hidden rounded-lg border border-gray-300 focus-within:border-purple-500">
 <div className="w-15  bg-gray-300 text-black flex items-center justify-center">
    <IndianRupee  size={20}/>
 </div>

    <input
      type="number"
      required
      value={goalData.targetAmount}
      onChange={(e)=>setGoalData({
        ...goalData,targetAmount:e.target.value
      })}
      placeholder="e.g. 50000"
      className="w-full px-4 text-lg outline-none"
    />
</div>
</div>

{/* target Date Monthly \contribution */}

<div className="w-full flex flex-col xl:flex xl:flex-row justify-between px-2 ">
  <div className="w-full xl:w-[45%]">
       <p className="font-bold">Target Date <span className="text-red-500"> *</span></p>
<div className="mt-3 flex h-14  overflow-hidden rounded-lg border border-gray-300 focus-within:border-purple-500">
 <div className="w-15  bg-gray-300 text-black flex items-center justify-center">
    <Calendar  size={20}/>
 </div>

    <input
      type="date"
      required
      value={goalData.targetDate}
      onChange={(e)=>setGoalData({
        ...goalData,targetDate:e.target.value
      })}
      className="w-full px-4 text-lg outline-none"
    />
</div>

  </div>

{/* Monthly Contribution */}
  <div className="w-full xl:w-[45%]">
       <p className="font-bold">Monthly Contribution <span className="text-sm text-gray-400">(Optional)</span></p>
<div className="mt-3 flex h-14  overflow-hidden rounded-lg border border-gray-300 focus-within:border-purple-500">
 <div className="w-15  bg-gray-300 text-black flex items-center justify-center">
    < IndianRupee size={20}/>
 </div>

    <input
      type="number"
      value={goalData.monthlyContribution}
      onChange={(e)=> setGoalData({
        ...goalData,monthlyContribution:e.target.value
      })}
      placeholder="e.g. 2000"
      className="w-full px-4 text-lg outline-none"
    />
</div>
<p className="text-sm text-gray-400">We'll calculate how much you need to save each month if you leave this empty.</p>
  </div>

</div>

{/* Goal Category */}
<div className="mt-5">
  <p className="font-bold">Goal Category <span className="text-red-500"> *</span></p>

  <div className="mt-3 h-14 rounded-lg border border-gray-300 focus-within:border-purple-500">
    <select
    required
      value={goalData.category}
      onChange={(e) =>
        setGoalData({
          ...goalData,
          category: e.target.value,
        })
      }
      className="h-full w-full rounded-lg bg-white px-4 text-lg outline-none"
    >
      <option value="Electronics">Electronics</option>
      <option value="Travel">Travel</option>
      <option value="Education">Education</option>
      <option value="Emergency Fund">Emergency Fund</option>
      <option value="Other">Other</option>
    </select>
  </div>
</div>

<div className="mt-5">
  <p className="font-bold">
    Description <span className="text-sm font-normal text-gray-400">(Optional)</span>
  </p>

  <textarea
    value={goalData.description}
    onChange={(e) =>
      setGoalData({
        ...goalData,
        description: e.target.value,
      })
    }
    placeholder="Why is this goal important to you?"
    maxLength={200}
    className="mt-3 min-h-28 w-full resize-none rounded-lg border border-gray-300 p-4 outline-none focus:border-purple-500"
  />

  <p className="text-right text-sm text-gray-400">
    {goalData.description.length}/200
  </p>
</div>
</div>

<div className="flex justify-between px-5">
  <button type="button"
  onClick={()=>setDisplay(false)} className="px-4 py-2 border border-blue-100 rounded-xl">Cancel</button>
 <button
    type="submit"
    className="rounded-xl bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
  >
    Create Goal
  </button>
</div>


</form>
  </DialogContent>
</Dialog>
    </div>
  );
};

export default GoalCard;