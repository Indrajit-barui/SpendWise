import { PieChart, Pie, Tooltip, Cell } from "recharts";

 const IncomeOverview = () => {
  const incomeData = [
  {
    name: "Part-time Job",
    amount: 1000,
    color: "#22c55e",
  },
  {
    name: "Freelancing",
    amount: 2000,
    color: "#3b82f6",
  },
  {
    name: "Parents",
    amount: 2000,
    color: "#6366f1",
  },
  {
    name: "Scholarship",
    amount: 1500,
    color: "#f59e0b",
  },
];

//calculate total income

const totalIncome=incomeData.reduce((total,item)=>total+item.amount,0)

  return (
    <section className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
      
      {/* header */}
      <div className="flex justify-between px-5 py-4">
        <p className="font-medium text-xl">Income Overview</p>
        <button className="border border-gray-500 text-blue-600 text-sm px-2 py-1 rounded-sm">view All</button>

        </div>
      
      {/* chart */}
<div className="flex flex-col 2xl:flex-row items-center gap-6 2xl:gap-8 px-5 pb-5">
      <div className="relative shrink-0">
        <PieChart width={200} height={200} >
  <Pie
    data={incomeData}
    dataKey="amount"
    innerRadius={60}
    outerRadius={100}
  >
    {incomeData.map((item) => (
      <Cell
        key={item.name}
        fill={item.color}
      />
    ))}
  </Pie>

  <Tooltip />
  
  
</PieChart>

<div className="absolute inset-0 flex flex-col items-center justify-center  text-center">
<p><i className="fa-solid fa-indian-rupee-sign"></i>{totalIncome}</p>
<p className="text-sm text-gray-500">Total Income</p>
</div>
      </div>
      {/* Income categories */}
      <div className="space-y-3 w-full">
        {
          incomeData.map((item)=>(
            <div key={item.name} className="grid grid-cols-3">
              {/* name */}
              <div className="flex items-center gap-3">
                  <span
                     className="h-3 w-3 rounded-sm shrink-0"
                    style={{ backgroundColor: item.color }}
                   ></span>

                   <span>{item.name}</span>
               </div>
               {/* Amount */}
              <span className="text-center"><i class="fa-solid fa-indian-rupee-sign"></i>{item.amount}</span>
              {/* percentage */}
              <span className="text-gray-400 text-right">{((item.amount/totalIncome)*100).toFixed(1)} <i className="fa-solid fa-percent"></i></span>
            </div>
          ))
        }
      </div>

      
      </div>
    </section>
  )
}

export default IncomeOverview;
