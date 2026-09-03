

const ReacentTransaction = () => {
    const transactions = [
  {
    title: "Freelancing",
    category: "Income",
    date: "May 30, 2024",
    amount: 2000,
    type: "income",
  },
  {
    title: "Lunch",
    category: "Food",
    date: "May 30, 2024",
    amount: 120,
    type: "expense",
  },
  {
    title: "Bus Ticket",
    category: "Transport",
    date: "May 29, 2024",
    amount: 100,
    type: "expense",
  },
  {
    title: "Parents",
    category: "Income",
    date: "May 28, 2024",
    amount: 2000,
    type: "income",
  },
  {
    title: "React Course",
    category: "Education",
    date: "May 28, 2024",
    amount: 499,
    type: "expense",
  },
];
  return (
    <section className="w-full border border-gray-600 mt-5">
        {/* header */}
        <div className="flex justify-between px-5 py-4">
        <p className="font-medium text-xl">Recent Transaction</p>
        <button className="border border-gray-500 text-blue-600 text-sm px-2 py-1 rounded-sm">view All</button>

        </div>
        {/* content */}

        <div className="flex flex-col ">
          {
            transactions.slice(0,3).map((item) => (
  <div className="flex items-center justify-between p-1 border-b">

    {/* LEFT */}
    <div className="flex items-center gap-3">
      
      {/* Icon */}
      <span className="h-8 w-8 rounded-full bg-red-200"></span>

      {/* Title + Category */}
      <div>
        <p>{item.title}</p>
        <p className="text-sm text-gray-400">
          {item.category}
        </p>
      </div>

    </div>

    {/* DATE */}
    <p>{item.date}</p>

    {/* AMOUNT */}
    <p>{item.amount}</p>

  </div>
))
            }

            
        </div>
    </section>
  )
}
export default ReacentTransaction;