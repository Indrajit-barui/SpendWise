import {ChevronDown} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid
} from "recharts";
const MonthleySpendingTrend = ({income,expenses}) => {



const today = new Date();

const months = [];

for (let i = 5; i >= 0; i--) {
  const date = new Date(
    today.getFullYear(),
    today.getMonth() - i,
    1
  );

  const month = date.toLocaleString("en-US", {
    month: "short"
  });

  months.push(month);
}

const chartData = months.map((month) => {

  // 1. Get income for this month
  const monthlyIncome = income.filter((item) => {
    const currentMonth = new Date(item.date).toLocaleString("en-US", {
      month: "short"
    });

    return currentMonth === month;
  });

  // 2. Add income amounts
  const monthlyIncomeTotal = monthlyIncome.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);


  // 3. Get expenses for this month
  const monthlyExpenses = expenses.filter((item) => {
    const currentMonth = new Date(item.date).toLocaleString("en-US", {
      month: "short"
    });

    return currentMonth === month;
  });

  // 4. Add expense amounts
  const monthlyExpensesTotal = monthlyExpenses.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);

  const monthlyBalance=monthlyIncomeTotal-monthlyExpensesTotal;


  // 5. Create the object for this month
  return {
    month: month,
    income: monthlyIncomeTotal,
    expenses: monthlyExpensesTotal,
    balance:monthlyBalance
  };
});
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        {/* Header */}
        <div className="flex justify-between px-2 items-center p-2">
            <div>
             <p className="font-bold">Monthly Spending Trend</p>
             <p className="text-sm text-gray-500">Your income ,expenses and balance over time</p>
            </div>
            <div>
<button className="border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  Last 6 Months
  <ChevronDown size={16} />
</button>
            </div>

        </div>

        {/* chart */}

        <div className="h-[250px]">
            <ResponsiveContainer height="100%" width="100%">
                <LineChart data={chartData}>
                <XAxis dataKey="month"/>
                <YAxis/>
               <CartesianGrid vertical={false}/>
         <Line
          type="monotone"
          dataKey="income"
          stroke="#22C55E"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="#EF4444"
          strokeWidth={2}
        />
        <Line
          type="monotone"
          dataKey="balance"
          stroke="#3B82f6"
          strokeWidth={2}
        />
        <Tooltip/>
        <Legend/>
      </LineChart>
    </ResponsiveContainer>
        </div>


    </div>
  )
}

export default MonthleySpendingTrend