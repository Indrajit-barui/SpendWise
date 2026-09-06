import {
  Pencil,
  Trash2,
  Utensils,
  Bus,
  GraduationCap,
  ShoppingCart,
  Ticket
} from "lucide-react";

const RecentExpenses = () => {

const expenses = [
  {
    id: 1,
    title: "Lunch",
    category: "Food",
    amount: 120,
    date: "May 30, 2024",
    icon: Utensils,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    categoryColor: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    title: "Bus Ticket",
    category: "Transport",
    amount: 100,
    date: "May 29, 2024",
    icon: Bus,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    categoryColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    title: "React Course",
    category: "Education",
    amount: 499,
    date: "May 28, 2024",
    icon: GraduationCap,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    categoryColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    title: "Groceries",
    category: "Shopping",
    amount: 850,
    date: "May 28, 2024",
    icon: ShoppingCart,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
    categoryColor: "bg-orange-100 text-orange-700",
  },
  {
    id: 5,
    title: "Movie Ticket",
    category: "Entertainment",
    amount: 200,
    date: "May 27, 2024",
    icon: Ticket,
    iconColor: "text-red-500",
    bgColor: "bg-red-100",
    categoryColor: "bg-red-100 text-red-700",
  },
];
  return (
     <section className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] px-2">
        {/* header */}
        <div className="flex justify-between px-2 py-4">
        <p className="font-medium text-xl">Recent Expenses</p>
        <button className="border border-gray-500 bg-blue-600 text-white text-sm px-2 py-1 rounded-sm"><i class="fa-solid fa-plus"></i> Add Income </button>

        </div>

        {/* Table header */}
       <div className="hidden xl:grid grid-cols-5 items-center font-medium  h-10 border bg-gray-400 text-sm px-4 py-3 ">
                   <p>Title</p>
                   <p>Category</p>
                   <p>Amount</p>
                   <p>Date</p>
                   <p className="text-center">Action</p>
                   
               </div>

        <div>
          {
            expenses.slice(0,4).map((item)=>(
              <div key={item.id} >
                {/* Desktop */}
              <div className="hidden xl:grid grid-cols-5 px-4 py-2 items-center border-b text-sm">
               
                 {/* title */}
                 <div>
                  {item.title}
                 </div>
                 {/* Category */}

                 <div>
                  {item.category}
                 </div>

                 {/* Amount */}

                 <div className="flex gap-2 items-center">
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  {item.amount}
                 </div>

                 {/* date */}
                 <div className="text-gray-400">
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
             
               {/* Mobile */}
               <div className="xl:hidden flex justify-between border-b px-2 py-4">
                <div className="flex gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${item.bgColor}`} >
      {(() => {
        const Icon = item.icon;
        return <Icon size={24} className={item.iconColor} />;
      })()}
    </div>
    <div>
                {/* title */}
                 <div className="font-semibold">
                  {item.title}
                 </div>
                 {/* category */}
                 <div className={`${item.categoryColor} text-sm px-2 py-1 rounded-md mt-1 inline-block`}>
                   {item.category}
                 </div>

                 {/* data */}
                 <div className="text-gray-400 text-sm">
                  {item.date}
                 </div>
</div>
</div>
                 {/* Ammount & Actions */}
                 <div className="flex flex-col gap-2 ">
                  {/* Ammount */}
                  <div className="text-center">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    {item.amount}
                  </div>

                  {/* actions */}
                  <div className="flex gap-2">
                    <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-600 hover:bg-gray-100">
                           <Pencil size={16} />
                    </button>

                     <button className="flex h-8 w-8 items-center justify-center rounded-md border border-red-100 text-red-500 hover:bg-red-50">
                        <Trash2 size={16} />
                     </button>
                  </div>
                 </div>
               </div>
              </div>
            ))
          }
        </div>
                {/* Total Expenses */}
        <div className="flex justify-between h-13 items-center mt-2 border px-5 bg-red-100 text-red-900 font-bold rounded-xl ">
            <p>Total Expenses</p>
            <p className="flex items-center">  <i class="fa-solid fa-indian-rupee-sign"></i> 6500</p>
        </div>
    </section>

  )
}

export default RecentExpenses