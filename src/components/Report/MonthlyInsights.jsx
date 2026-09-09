
import {
  ArrowUp,
  ArrowDown,
  GraduationCap,
  ShoppingCart,
  Lightbulb
} from "lucide-react";

const MonthlyInsights = () => {
  const insightIcons = {
  income: ArrowUp,
  expense: ArrowDown,
  education: GraduationCap,
  transactions: ShoppingCart,
};
const insightStyles = {
  income: {
    icon: "text-green-600",
    bg: "bg-green-100",
  },

  expense: {
    icon: "text-red-600",
    bg: "bg-red-100",
  },

  education: {
    icon: "text-purple-600",
    bg: "bg-purple-100",
  },

  transactions: {
    icon: "text-orange-500",
    bg: "bg-orange-100",
  },
};
const insights = [
  {
    id:1,
    title: "Your income increased by 18%",
    description: "You earned ₹ 1,000 more than last month.",
    type: "income",
  },
  {
    id:2,
    title: "Your expenses increased by 8%",
    description: "You spent ₹ 200 more than last month.",
    type: "expense",
  },
  {
    id:3,
    title: "Education is your highest expense category",
    description: "You spent ₹ 499 (19.9%) on education.",
    type: "education",
  },
  {
    id:4,
    title: "You had 25 transactions",
    description: "10 income transactions and 15 expense transactions.",
    type: "transactions",
  },
];
  return (
    <div className="w-full min-h-[300px] rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 flex flex-col px-2 py-3">
    
    <div>
        <p className="text-xl font-bold">Monthly Insights</p>
        <p className="text-sm text-gray-500">Key insights from your spending this month</p>
    </div>
    
    <div>
{insights.map((item) => {
  const Icon = insightIcons[item.type];
  const style = insightStyles[item.type];

  return (
    <div
      key={item.id}
      className="flex items-center gap-5 border-b px-2 py-3"
    >
      {/* Icon */}
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${style.bg} ${style.icon}`}
      >
        <Icon size={22} />
      </div>

      {/* Content */}
      <div>
        <p className="font-medium">
          {item.title}
        </p>

        <p className="text-sm text-gray-500">
          {item.description}
        </p>
      </div>
    </div>
  );
})}
    </div>
    <div className="flex gap-3 items-center py-2 px-3 bg-indigo-100 rounded-xl mt-2">
      <div className="text-indigo-700">
         <Lightbulb size={28}/>
      </div>
      <div className="">
          <p className="text-indigo-700">Great Job ! you saved 61.1 % of your income this month</p>
          <p className="text-sm text-gray-500">keep tracking to build better financial habits</p>
      </div>
    </div>
    </div>
  )
}

export default MonthlyInsights