import StatCard from "./StatCard"
import {
  ArrowDown,
  ShoppingCart,
  ReceiptText,
  Flame
} from "lucide-react";
const ExpensesStats = () => {
  return (
       <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Expenses"
        amount="₹ 2,500"
        text="8% from last month"
        icon={<ArrowDown size={28} />}

        iconColor="text-red-500"
        bgColor="bg-red-100"
      />

      <StatCard
        title="Average Expense"
        amount="₹ 417"
        text="8% from last month"
        icon={<ShoppingCart size={28} />}
        iconColor="text-orange-700"
        bgColor="bg-orange-100"
      />

      <StatCard
        title="Total Transaction"
        amount="12"
        text="This month"
        icon={<ReceiptText size={28} />}

        iconColor="text-blue-700"
        bgColor="bg-blue-100"
      />
    
     
         <StatCard
        title="Highest Expense"
        amount="₹ 850"
        text="In Shopping"
        icon={<  Flame size={28} />}

        iconColor="text-red-700"
        bgColor="bg-red-50"
      />
      

    </section>
  )
}

export default ExpensesStats