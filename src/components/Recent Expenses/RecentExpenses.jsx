import { Pencil, Trash2 } from "lucide-react";

const RecentExpenses = () => {

  const expenses = [
  {
    id: 1,
    title: "Lunch",
    category: "Food",
    amount: 120,
    date: "May 30, 2024",
    
  },
  {
    id: 2,
    title: "Bus Ticket",
    category: "Transport",
    amount: 100,
    date: "May 29, 2024",
  },
  {
    id: 3,
    title: "React Course",
    category: "Education",
    amount: 499,
    date: "May 28, 2024",
  },
  {
    id: 4,
    title: "Groceries",
    category: "Shopping",
    amount: 850,
    date: "May 28, 2024",
  },
  {
    id: 5,
    title: "Movie Ticket",
    category: "Entertainment",
    amount: 200,
    date: "May 27, 2024",
  },
];
  return (
     <section className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        {/* header */}
        <div className="flex justify-between px-5 py-4">
        <p className="font-medium text-xl">Recent Expenses</p>
        <button className="border border-gray-500 bg-blue-600 text-white text-sm px-2 py-1 rounded-sm"><i class="fa-solid fa-plus"></i> Add Income </button>

        </div>

        {/* Table header */}
       <div className="grid grid-cols-5 items-center font-medium  h-10 border bg-gray-400 text-sm px-4 py-3 ">
                   <p>Title</p>
                   <p>Category</p>
                   <p>Amount</p>
                   <p>Date</p>
                   <p className="text-center">Action</p>
                   
               </div>

        <div>
          {
            expenses.map((item)=>(
              <div key={item.id} className="grid grid-cols-5 px-4 py-2 items-center border-b text-sm">
                 {/* title */}
                 <div>
                  {item.title}
                 </div>
                 {/* Category */}

                 <div>
                  {item.category}
                 </div>

                 {/* Amount */}

                 <div>
                  {item.amount}
                 </div>

                 {/* date */}
                 <div>
                  {item.date}
                 </div>

                 {/*Action  */}
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
    </section>

  )
}

export default RecentExpenses