import { Pencil, Trash2 } from "lucide-react";


const ReacentIncome = () => {
    const incomes = [
  {
    id:1,
    source: "Part-time Job",
    amount: 1000,
    date: "May 30, 2024",
    notes: "Weekend work",
  },
  {
    id:2,
    source: "Freelancing",
    amount: 2000,
    date: "May 28, 2024",
    notes: "Website project",
  },
  {
    id:3,
    source: "Parents",
    amount: 2000,
    date: "May 25, 2024",
    notes: "Monthly support",
  },
  {
    id:4,
    source: "Scholarship",
    amount: 1500,
    date: "May 10, 2024",
    notes: "Merit scholarship",
  },
];
  return (
     <section className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        {/* header */}
 <div className="flex justify-between px-5 py-4">
        <p className="font-medium text-xl">Income Overview</p>
        <button className="border border-gray-500 bg-blue-600 text-white text-sm px-2 py-1 rounded-sm"><i class="fa-solid fa-plus"></i> Add Income </button>

        </div>

        {/* Table header */}
        <div className="grid grid-cols-5 items-center  h-10 border bg-gray-400 text-sm px-4 py-3 ">
            <p>Source</p>
            <p>Amount</p>
            <p>Date</p>
            <p>Notes</p>
            <p className="text-center">Action</p>
            
        </div>
        {/* Income Rows */}

        <div className="">
            {
                incomes.map((item)=>(
                    <div key={item.id} className="grid grid-cols-5 px-4 py-2 items-center border-b text-sm">
                      {/* Source */}
                      <div >
                        {item.source}
                      </div>
                      {/* Amount */}
                      <div className=" flex items-center gap-1">
                        <i class="fa-solid fa-indian-rupee-sign"></i>
                        {item.amount}
                      </div>
                      {/* Date */}
                      <div>
                        {item.date}
                      </div>

                      {/* Notes */}
                      <div>
                        {item.notes}
                      </div>

                      {/* Actions */}


                   <div className="flex items-center justify-center gap-2">

                     <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100">
                           <Pencil size={16} />
                    </button>

                     <button className="flex h-8 w-8 items-center justify-center rounded-md border border-red-100 text-red-500 hover:bg-red-50">
                        <Trash2 size={16} />
                     </button>

                   </div>

                    </div>
                ))
            }
        </div>

        {/* Total Income */}
    </section>
  )
}

export default ReacentIncome