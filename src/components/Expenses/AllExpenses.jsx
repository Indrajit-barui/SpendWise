import {Search,
  Plus,
  GraduationCap,
  Ticket,
  ShoppingCart,
  Bus,
  Utensils,
  Trash2,
  Pencil,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChartNoAxesColumnIncreasing
} from 'lucide-react'

const AllExpenses = () => {
const expenseData = [
  {
    id: 1,
    title: "Lunch",
    category: "Food",
    amount: "₹ 120",
    date: "May 30, 2024",
    notes: "College canteen",
    icon: "food",
  },
  {
    id: 2,
    title: "Bus Ticket",
    category: "Transport",
    amount: "₹ 100",
    date: "May 29, 2024",
    notes: "To college",
    icon: "transport",
  },
  {
    id: 3,
    title: "React Course",
    category: "Education",
    amount: "₹ 499",
    date: "May 28, 2024",
    notes: "Online course",
    icon: "education",
  },
  {
    id: 4,
    title: "Groceries",
    category: "Shopping",
    amount: "₹ 850",
    date: "May 28, 2024",
    notes: "Monthly groceries",
    icon: "shopping",
  },
  {
    id: 5,
    title: "Movie Ticket",
    category: "Entertainment",
    amount: "₹ 200",
    date: "May 27, 2024",
    notes: "With friends",
    icon: "entertainment",
  },
];

// icon
const expenseIcons = {
  food: Utensils,
  transport: Bus,
  education: GraduationCap,
  shopping: ShoppingCart,
  entertainment: Ticket,
};
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2 ">
        {/* header */}
        <div className="flex justify-between">
           <div className="flex flex-col xl:flex">
            <p className="text-xl font-bold">All Expenses</p>
            <p className="text-gray-600">View and manage your expense entries</p>
           </div>
           <div className="flex gap-2">
             {/* search  */}
             <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Search size={18} className="text-gray-600"/>
                <input type="text" placeholder="Search income..." 
                className="outline-none"/>
             </div>

             {/* All sources button */}
             <div>

             </div>
             {/* Add category button */}
             <button className="flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white ">
              <Plus size={18} /> Add Category
             </button>
           </div>
        </div>
{/* table header */}

<div className='grid grid-cols-7 py-3 bg-gray-400 border mt-3 rounded-sm px-3'>
  <div>#</div>
  <div>Source</div>
  <div className='text-center'>Category</div>
  <div>Amount</div>
  <div>Date</div>
  <div>Notes</div>
  <div className='text-center'>Actions</div>
</div>

        <div>
          {expenseData.slice(0,5).map((item)=>{
            const Icon=expenseIcons[item.icon];
           return( <div key={item.id}>
                {/* desktop */}
                
                <div className='grid grid-cols-7 py-3 border rounded-sm px-3'>
                  <div className='text-gray-500 font-medium'>
                    {item.id}
                  </div>
                  <div className='flex items-center gap-3'>
                      <div className='flex h-9 w-9 items-center justify-center rounded-full bg-red-100'>
                       <Icon size={18} />
                      </div>
                    {item.source}
                  </div>

                  <div className='text-center'>
                    {item.category}
                  </div>

                  <div className='text-red-600 font-medium'>
                    -{item.amount}
                  </div>

                  <div className='text-sm text-gray-500'>
                    {item.date}
                  </div>

                  <div className='text-sm text-gray-500'>
                    {item.notes}
                  </div>
<div className="flex items-center gap-2 justify-center">
  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition hover:bg-gray-100 hover:text-indigo-600 cursor-pointer"><Pencil size={17}/></button>
  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-red-500 transition hover:bg-red-50 hover:bg-red-500 hover:text-white"><Trash2 size={17}/></button>
</div>                  
                </div>
            </div>
)})}
        </div>

<div className='bg-red-100 h-10 w-full flex items-center mt-2 rounded-sm'>
   <div className='flex gap-3 text-red-800 font-medium'>
    {/* icon */}
    <ChartNoAxesColumnIncreasing size={20}/>
    <p>Total Expenses:₹ 2,500</p>
    <div className='h-5 w-px bg-gray-700'>

    </div>
    <p>12 Transactions</p>
   </div>
</div>
<div className="flex flex-col gap-4 border-t px-2 py-4 sm:flex-row sm:items-center sm:justify-between">

  {/* Showing entries */}
  <p className="text-sm text-gray-500">
    Showing <span className="font-medium text-gray-700">1–5</span> of{" "}
    <span className="font-medium text-gray-700">23</span> entries
  </p>

  {/* Pagination */}
  <div className="flex items-center gap-2">

    {/* Previous */}
    <button
      className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500"
    >
      <ChevronLeft size={16} />
      <span className="hidden sm:block">Previous</span>
    </button>

    {/* Pages */}
    <button className="h-9 w-9 rounded-lg bg-blue-600 text-sm text-white">
      1
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      2
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      3
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      4
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      5
    </button>

    {/* Next */}
    <button
      className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm"
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRight size={16} />
    </button>

  </div>

  {/* Per page */}
  <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm">
    5 per page
    <ChevronDown size={16} />
  </button>

</div>
    </div>
  )
}

export default AllExpenses