import StatCard from "./StatCard";
import { Wallet, CreditCard, ChartPie, Calendar } from "lucide-react";

function Stats({ totalIncome = 0, totalExpenses = 0, balance = 0, todayExpenses = 0 }) {
const formatCurrency = (amount) => {
return `₹ ${Number(amount).toLocaleString("en-IN")}`;
};

return (
<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

  <StatCard
    title="Total Income"
    amount={formatCurrency(totalIncome)}
    text="Current month"
    icon={<Wallet size={28} />}
    iconColor="text-green-500"
    bgColor="bg-green-100"
  />

  <StatCard
    title="Total Expenses"
    amount={formatCurrency(totalExpenses)}
    text="Current month"
    icon={<CreditCard size={28} />}
    iconColor="text-red-700"
    bgColor="bg-red-100"
  />

  <StatCard
    title="Balance"
    amount={formatCurrency(balance)}
    text="All-time balance"
    icon={<ChartPie size={28} />}
    iconColor="text-blue-700"
    bgColor="bg-blue-100"
  />

  <StatCard
    title="Today's Expenses"
    amount={formatCurrency(todayExpenses)}
    text="Today's spending"
    icon={<Calendar size={28} />}
    iconColor="text-orange-500"
    bgColor="bg-orange-100"
  />

</section>

);
}

export default Stats;