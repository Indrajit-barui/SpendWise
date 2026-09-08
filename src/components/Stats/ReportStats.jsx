import {
Wallet,
CreditCard,
PieChart,
GraduationCap,
TrendingUp,
TrendingDown,
Equal
} from "lucide-react";
import StatCard from "./StatCard"
const ReportStats = () => {
  return (
    <div>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
        lefticon={<TrendingUp size={28} />}
        title="Total Income"
        amount="₹ 6,500"
        text="18% from last month" 
        icon={<Wallet size={28} />}

        iconColor="text-green-500"
        bgColor="bg-green-100"
      />

      <StatCard
        lefticon={<TrendingDown size={28} />}
        title="Total Expenses"
        amount="₹ 2,500"
        text="8% from last month"
        icon={<CreditCard size={28} />}
        iconColor="text-red-700"
        bgColor="bg-red-100"
      />

      <StatCard
      lefticon={<Equal size={28} />}
        title="Remaining Balance"
        amount="₹ 4,000"
        text="25% from last month"
        icon={<PieChart size={28} />}

        iconColor="text-blue-700"
        bgColor="bg-blue-100"
      />
    
     
         <StatCard
         
        title="Highest expense category"
        amount="Education"
        text="19.9 % of total expenses"
        icon={<GraduationCap size={28} />}

        iconColor="text-purple-500"
        bgColor="bg-purple-100"
      />
        </section>
    </div>
  )
}

export default ReportStats