
import { ArrowUp,ArrowDown } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"

const RecenttransactionReport = ({income,expenses}) => {

const[viewall,setViewall]=useState(false);
const today=new Date();
const currentMonth=today.getMonth();
const currentYear=today.getFullYear();

const currentmonthIncome=income.filter((item)=>{
    const date=new Date(item.date);


    return (
        date.getMonth()===currentMonth &&
        date.getFullYear()===currentYear
    )
}).map((item)=>({
    ...item,
    type:"income"
}))


const currentmonthExpenses=expenses.filter((item)=>{
    const date=new Date(item.date);

    return(
        date.getMonth()===currentMonth &&
        date.getFullYear()===currentYear
    )
}).map((item)=>({
    ...item,
    type:"expense"
}))

const recentTransactions=[...currentmonthIncome,...currentmonthExpenses].sort((a,b)=> new Date(b.date)- new Date(a.date)).slice(0,5);

const recentTransactions2=[...currentmonthIncome,...currentmonthExpenses].sort((a,b)=> new Date(b.date)- new Date(a.date));

const currentmon=today.toLocaleString("en-US",{
    month:"short"
})
  return (
    <div className="w-full h-full rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2">
        {/* header */}

        <div className="flex justify-between items-center">
            <div>
                <p className="text-xl font-bold">Recent transaction {`${currentYear} ${currentmon}`}</p>
                <p className="text-gray-600 text-sm">A list of your income and Expenses for this month</p>
            </div>
            <div>
              <button 
              onClick={()=>setViewall(true)}
              type="button" className=" text-white bg-blue-600 cursor-pointer border w-20 h-10 px-2 py-1 rounded-lg flex items-center justify-center shrink-0">View All</button>
            </div>
        </div>
        {/* Recent Transaction */}
         {/* Table Header */}
        <div className="hidden xl:grid grid-cols-5 border mt-2 px-2 py-2 bg-gray-400">
           <div>Type</div>

           <div>Category</div>
           <div className="text-center">Amount</div>
           <div className="text-center">Data</div>
        </div>

        {/* Recent Transaction data*/} 
        <div>
            {
                recentTransactions.map((item)=>(
                    <div key={item._id}>
                        {/* Desktop version */}
                        <div className="hidden xl:grid grid-cols-5 border py-2 items-center">
                            <div className={`h-10 w-10 rounded-full ${item.type==="income"?"bg-green-100":"bg-red-100"} flex items-center justify-center text-xl font-bold`}>
                                {
                                    item.type==="income"?(
                                        <ArrowUp size={20} className="text-green-700"/>
                                    ):(
                                        <ArrowDown size={20} className="text-red-700"/>
                                    )
                                }
                            </div>

                            <div className={`${item.type==="income"?"text-green-800":"text-red-800"} font-medium `}>
                                {item.category}
                            </div>
                            <div className={`${item.type==="income"?"text-green-700":"text-red-700 "} text-center`}>

                               {item.type === "income" ? `+ ${item.amount}` : `- ${item.amount}`}
                            </div>

                            <div className="text-gray-500 text-right">
                                {
                                    new Date(item.date).toLocaleString("en-US",{
                                        month:"short",
                                        day:"2-digit",
                                        year:"numeric"
                                    })
                                }
                            </div>
                        </div>
                        {/* mobile version */}
                        <div className="xl:hidden flex items-center gap-2 mt-2 border-b py-2 px-1">
                        <div className={`h-10 w-10 rounded-full ${item.type==="income"?"bg-green-100":"bg-red-100"} flex items-center justify-center text-xl font-bold`}>
                                {
                                    item.type==="income"?(
                                        <ArrowUp size={20} className="text-green-700"/>
                                    ):(
                                        <ArrowDown size={20} className="text-red-700"/>
                                    )
                                }
                            </div>

{/* Title + Category + Date */}
  <div className="flex-1 min-w-0">


    <div className="flex items-center gap-3 mt-1">
      <p>{item.category}</p>

      <p className="text-sm text-gray-500">
             {
                new Date(item.date).toLocaleString("en-US",{
                   month:"short",
                   day:"2-digit",
                   year:"numeric"
                })
             }
      </p>
    </div>
  </div>

    <div className={`${item.type==="income"?"text-green-700":"text-red-700"} text-right`}>

   {item.type === "income" ? `+ ${item.amount}` : `- ${item.amount}`}
         </div>
    </div>
    </div>
    ))
}
        </div>
<Dialog open={viewall} onOpenChange={setViewall}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-xl font-bold">All Transactions</DialogTitle>
      <DialogDescription>
        Here are all your income and expenses
      </DialogDescription>
    </DialogHeader>

<div className="max-h-[400px] overflow-y-auto pr-2"> 
{recentTransactions2.map((item)=>{
    return(
        <div className="border-b py-2 flex gap-2">
            {/* icon */}
            <div className="w-full flex justify-between">
            <div className="flex gap-2">
            <div className={`w-10 h-10 rounded-full ${item.type==="income"?"bg-green-200 text-green-700":"bg-red-200 text-red-700"} flex justify-center items-center`}>
                {item.type==="income"?<ArrowUp/>:<ArrowDown/>}
            </div>
            <div>
            <div className="flex flex-col">
                {/* category */}
                <div className="font-bold">
                    {item.category}
                </div>
                {/* date */}
                <div className="text-sm text-gray-400">
          {new Date(item.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
           })}
                </div>
            </div>
            </div>
            {/* category date */}

            </div>
            {/* Amount */}
            <div className={`${item.type==="income"?"text-green-700":"text-red-700 "} text-center flex items-center`}>

            {item.type === "income" ? `+ ${item.amount}` : `- ${item.amount}`}
            </div>
            </div>




        </div>
    )
})}
</div>


<button 
onClick={()=>setViewall(false)}
type="button"
className="w-full px-2 py-2 bg-gray-200 text-black rounded-xl">
    Close
</button>

  </DialogContent>
</Dialog>
    </div>
  )
}

export default RecenttransactionReport