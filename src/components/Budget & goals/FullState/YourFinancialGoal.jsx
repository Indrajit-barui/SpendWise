import { Laptop, Palmtree, Plus ,Pencil,Trash2} from "lucide-react";

const YourFinancialGoal = () => {
  const goals = [
  {
    title: "Buy a Laptop",
    targetDate: "Dec 2024",
    saved: 12000,
    target: 50000,
    percentage: 24,
    icon: Laptop,
    color: "bg-purple-500",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Save for College Trip",
    targetDate: "Mar 2025",
    saved: 8500,
    target: 20000,
    percentage: 43,
    icon: Palmtree,
    color: "bg-green-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] p-2">
              <div className="flex flex-col gap-3 xl:flex-row justify-between px-3 ">
                <div>
          <p className="text-xl font-semibold">Your Financial Goals</p>
          <p className="text-sm text-gray-500">
          Set goals and track your progress
        </p>

       </div>
 

      
        <button type="button"
        className="px-10 py-1 bg-blue-700 text-white rounded-xl flex justify-center items-center gap-2"
        ><Plus/>Add Goal</button>
      </div>

      <div className="mt-3">
        {goals.map((goal)=>{
          const Icon=goal.icon;
          const percentage = (goal.saved / goal.target) * 100;
          return(
            <div key={goal.title}>
               {/* desktop */}
               <div className="hidden  border flex flex-col gap-3 p-3 md:grid xl:grid-cols-[55px_160px_minmax(0,1fr)_55px_75px] xl:items-center">
                {/* icon */}
                <div className={`h-13 w-13 ${goal.iconBg} rounded-full flex justify-center items-center`}>
                  <Icon size={28}/>
                </div>

                <div className="flex flex-col">
                  <p className="font-semibold">{goal.title}</p>
                  <p className="text-sm text-gray-400">target:{goal.targetDate}</p>
                </div>
                <div className="flex flex-col">
                 <div className="text-right">
                  {goal.saved}/{goal.target}
                 </div>
                       {/* ber */}
                    <div className="w-full h-3 rounded-full bg-gray-200">
                     <div
                       className={`h-full rounded-full ${goal.color}`}
                       style={{ width: `${percentage.toFixed(1)}%` }}></div>
                   </div>
                </div>
                   <div className={`h-5 w-10 ${goal.iconBg} ${goal.iconColor} flex justify-center rounded-sm items-center text-left`}>
                    {percentage.toFixed(0)} %
                   </div>
<div className="flex items-center gap-2">
  <button
    type="button"
    className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-600"
  >
    <Pencil size={17} />
  </button>

  <button
    type="button"
    className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-red-600"
  >
    <Trash2 size={17} />
  </button>
</div>
               </div>

               {/* mobile version */}
<div className="xl:hidden rounded-lg border border-gray-200 p-3">

  {/* Top row */}
  <div className="flex items-start justify-between">

    {/* Icon + title */}
    <div className="flex items-center gap-3">

      <div
        className={`h-10 w-10 shrink-0 rounded-full ${goal.iconBg} ${goal.iconColor} flex items-center justify-center`}
      >
        <Icon size={20} />
      </div>

      <div>
        <p className="font-semibold text-gray-900">
          {goal.title}
        </p>

        <p className="text-xs text-gray-400">
          Target: {goal.targetDate}
        </p>
      </div>

    </div>

    {/* Percentage */}
    <div
      className={`rounded-md px-3 py-1 text-sm font-semibold ${goal.iconBg} ${goal.iconColor}`}
    >
      {percentage.toFixed(0)}%
    </div>

  </div>


  {/* Amount */}
  <div className="mt-4 flex justify-between text-sm">

    <span className="font-medium text-gray-800">
      ₹{goal.saved.toLocaleString()}
    </span>

    <span className="text-gray-400">
      / ₹{goal.target.toLocaleString()}
    </span>

  </div>


  {/* Progress bar */}
  <div className="mt-2 h-2.5 w-full rounded-full bg-gray-200">

    <div
      className={`h-full rounded-full ${goal.color}`}
      style={{ width: `${percentage}%` }}
    ></div>

  </div>


  {/* Actions */}
  <div className="mt-3 flex justify-end gap-1">

    <button
      type="button"
      className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-blue-600"
    >
      <Pencil size={16} />
    </button>

    <button
      type="button"
      className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-red-600"
    >
      <Trash2 size={16} />
    </button>

  </div>

</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default YourFinancialGoal