import StatCard from "./StatCard";
import {
ArrowDown,
ShoppingCart,
ReceiptText,
Flame
} from "lucide-react";

const ExpensesStats = ({
Totalexpense = 0,
Highestexpense = { amount: 0, category: "N/A" },
TotalTransactions = 0,
AverageExpense = 0
}) => {

const formatCurrency = (amount) => {
return `₹ ${Number(amount || 0).toLocaleString("en-IN")}`;
};

return (
<section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

  <StatCard
    title="Total Expenses"
    amount={formatCurrency(Totalexpense)}
    text="All-time expenses"
    icon={<ArrowDown size={28} />}
    iconColor="text-red-500"
    bgColor="bg-red-100"
  />

  <StatCard
    title="Average Expense"
    amount={formatCurrency(AverageExpense)}
    text="Average per transaction"
    icon={<ShoppingCart size={28} />}
    iconColor="text-orange-700"
    bgColor="bg-orange-100"
  />

  <StatCard
    title="Total Transactions"
    amount={TotalTransactions}
    text="All-time transactions"
    icon={<ReceiptText size={28} />}
    iconColor="text-blue-700"
    bgColor="bg-blue-100"
  />

  <StatCard
    title="Highest Expense"
    amount={formatCurrency(Highestexpense.amount)}
    text={Highestexpense.category || "N/A"}
    icon={<Flame size={28} />}
    iconColor="text-red-700"
    bgColor="bg-red-50"
  />

</section>

);
};

export default ExpensesStats;