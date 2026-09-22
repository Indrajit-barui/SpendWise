
import {
  ArrowUp,
  ArrowDown,
  GraduationCap,
  ShoppingCart,
  Lightbulb
} from "lucide-react";

const MonthlyInsights = ({income,expenses}) => {
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


const today= new Date();
const currentMonth=today.getMonth();
const currentYear=today.getFullYear();
const currentMonthIncome=income.filter((item)=>{
  const date=new Date(item.date);

  return date.getMonth()===currentMonth &&
  date.getFullYear()===currentYear
})

const currentMonthtotaincome=currentMonthIncome.reduce((acc,curr)=>{
  return acc+Number(curr.amount);
}, 0)

// previous month:

const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
const previousMonthIncome = income.filter((item) => {
  const date = new Date(item.date);

  return (
    date.getMonth() === previousMonth &&
    date.getFullYear() === previousYear
  );
});

const previousMonthIncomeTotal = previousMonthIncome.reduce((acc, curr) => {
  return acc + Number(curr.amount);
}, 0);


// difference

const totalIncomeDiff=currentMonthtotaincome-previousMonthIncomeTotal;


const currentMonthExpenses=expenses.filter((item)=>{
  const date=new Date(item.date);

  return date.getMonth()===currentMonth &&
  date.getFullYear()===currentYear
})

const previousMonthExpense = expenses.filter((item) => {
  const date = new Date(item.date);

  return (
    date.getMonth() === previousMonth &&
    date.getFullYear() === previousYear
  );
});

const currentMonthtotaExpenses=currentMonthExpenses.reduce((acc,curr)=>{
  return acc+Number(curr.amount);
}, 0)

const previousMonthExpenseTotal = previousMonthExpense.reduce((acc, curr) => {
  return acc + Number(curr.amount);
}, 0);

const totalExpenseDiff=currentMonthtotaExpenses-previousMonthExpenseTotal;

const incomePercentage =
  previousMonthIncomeTotal > 0
    ? Math.abs(totalIncomeDiff / previousMonthIncomeTotal) * 100
    : 0;

const expensesPercentage =
  previousMonthExpense > 0
    ? Math.abs(totalExpenseDiff / previousMonthExpense) * 100
    : 0;
// highest expenses
const Highestexpense=expenses.reduce((highest,curr)=>{
  return curr.amount> highest.amount?curr:highest
},{amount:0})


const toatalIncomeTransaction=income.length;
const totalExpenseTranasction=expenses.length;

const incomeChange =
  totalIncomeDiff >= 0 ? "increased" : "decreased";
const expenseChange =
  totalExpenseDiff >= 0 ? "increased" : "decreased";
  const savedAmount =
  currentMonthtotaincome - currentMonthtotaExpenses;

const savedPercentage =
  currentMonthtotaincome > 0
    ? (savedAmount / currentMonthtotaincome) * 100
    : 0;
const insights = [
  {
    id:1,
    title: `Your income ${incomeChange} by ${incomePercentage.toFixed(1)}%`,
    description: `You earned ₹ ${totalIncomeDiff} more than last month.`,
    type: "income",
  },
  {
    id:2,
    title: `Your expenses ${expenseChange} by ${expensesPercentage.toFixed(1)}%`,
    description: `You spent ₹ ${totalExpenseDiff} more than last month.`,
    type: "expense",
  },
  {
    id:3,
    title: `${Highestexpense.category} is your highest expense category`,
    description: `You spent ₹ ${Highestexpense.amount} (19.9%) on education.`,
    type: "education",
  },
  {
    id:4,
    title: `You had ${totalExpenseTranasction+toatalIncomeTransaction} transactions`,
    description: `${toatalIncomeTransaction} income transactions and ${totalExpenseTranasction} expense transactions.`,
    type: "transactions",
  },
];
  return (
    <div className="w-full h-full rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex flex-col px-2 py-3">
    
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
          <p className="text-indigo-700">{`Great Job ! you saved ${savedAmount}  this month`}</p>
          <p className="text-indigo-700">{`Great Job ! you saved ${savedPercentage.toFixed(1)} % of your income this month`}</p>
          <p className="text-sm text-gray-500">keep tracking to build better financial habits</p>
      </div>
    </div>
    </div>
  )
}

export default MonthlyInsights