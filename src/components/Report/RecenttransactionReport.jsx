
import { ArrowUp,ArrowDown } from "lucide-react";


const RecenttransactionReport = () => {
    const recentTransactions = [
  {
    id:1,
    type: "income",
    title: "Freelancing",
    category: "Income",
    amount: 2000,
    date: "May 30, 2024",
  },
  {
    id:2,
    type: "expense",
    title: "Lunch",
    category: "Food",
    amount: 120,
    date: "May 30, 2024",
  },
  {
    id:3,
    type: "expense",
    title: "Bus Ticket",
    category: "Transport",
    amount: 100,
    date: "May 29, 2024",
  },
  {
    id:4,
    type: "income",
    title: "Parents",
    category: "Income",
    amount: 2000,
    date: "May 28, 2024",
  },
  {
    id:5,
    type: "expense",
    title: "React Course",
    category: "Education",
    amount: 499,
    date: "May 28, 2024",
  },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2">
        {/* header */}

        <div className="flex justify-between items-center">
            <div>
                <p className="text-xl font-bold">Recent transaction (sep 2026)</p>
                <p className="text-gray-600 text-sm">A list of your income and Expenses for this month</p>
            </div>
            <div>
              <button className=" text-white bg-blue-600 cursor-pointer border w-20 h-10 px-2 py-1 rounded-lg flex items-center justify-center shrink-0">View All</button>
            </div>
        </div>
        {/* Recent Transaction */}
         {/* Table Header */}
        <div className="hidden xl:grid grid-cols-5 border mt-2 px-2 py-2 bg-gray-400">
           <div>Type</div>
           <div>Title</div>
           <div>Category</div>
           <div>Amount</div>
           <div className="text-center">Data</div>
        </div>

        {/* Recent Transaction data*/} 
        <div>
            {
                recentTransactions.map((item)=>(
                    <div key={item.id}>
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
                            <div className="font-medium">
                                {item.title}
                            </div>
                            <div className={`${item.type==="income"?"text-green-800":"text-red-800"} font-medium`}>
                                {item.category}
                            </div>
                            <div className={`${item.type==="income"?"text-green-700":"text-red-700"}`}>

                                {
                                    item.type==="income"?"+ ":"- "
                                }₹{item.amount}
                            </div>

                            <div className="text-gray-500">
                                {item.date}
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
    <p className="font-medium">{item.title}</p>

    <div className="flex items-center gap-3 mt-1">
      <p>{item.category}</p>

      <p className="text-sm text-gray-500">
        {item.date}
      </p>
    </div>
  </div>

                            <div className={`${item.type==="income"?"text-green-700":"text-red-700"} text-right`}>

                                {
                                    item.type==="income"?"+ ":"- "
                                }₹{item.amount}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default RecenttransactionReport