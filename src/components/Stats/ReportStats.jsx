import {
Wallet,
CreditCard,
PieChart,
GraduationCap,
TrendingUp,
TrendingDown,
Equal
} from "lucide-react";

import StatCard from "./StatCard";

const ReportStats = ({
totalIncome = 0,
totalExpenses = 0,
balance = 0,
highestCategory = { category: "N/A", percentage: 0 }
}) => {

const formatCurrency = (amount) => {
return `₹ ${Number(amount || 0).toLocaleString("en-IN")}`;
};

return (
<div>
<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

    <StatCard
      lefticon={<TrendingUp size={28} />}
      title="Total Income"
      amount={formatCurrency(totalIncome)}
      text="Current month"
      icon={<Wallet size={28} />}
      iconColor="text-green-500"
      bgColor="bg-green-100"
    />

    <StatCard
      lefticon={<TrendingDown size={28} />}
      title="Total Expenses"
      amount={formatCurrency(totalExpenses)}
      text="Current month"
      icon={<CreditCard size={28} />}
      iconColor="text-red-700"
      bgColor="bg-red-100"
    />

    <StatCard
      lefticon={<Equal size={28} />}
      title="Remaining Balance"
      amount={formatCurrency(balance)}
      text="All-time balance"
      icon={<PieChart size={28} />}
      iconColor="text-blue-700"
      bgColor="bg-blue-100"
    />

    <StatCard
      title="Highest Expense Category"
      amount={highestCategory.category}
      text={`${highestCategory.percentage}% of monthly expenses`}
      icon={<GraduationCap size={28} />}
      iconColor="text-purple-500"
      bgColor="bg-purple-100"
    />

  </section>
</div>

);
};

export default ReportStats;