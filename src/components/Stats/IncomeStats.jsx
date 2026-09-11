import StatCard from "./StatCard"
import {
  ArrowUp,
  CircleDollarSign,
  FileText,
  TrendingUp
} from "lucide-react";
const IncomeStats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
        title="Total Income"
        amount="₹ 6,500"
        text="18% from last month"
        icon={<ArrowUp size={28} />}

        iconColor="text-green-500"
        bgColor="bg-green-100"
      />

      <StatCard
        title="Average Income"
        amount="₹ 1,625"
        text="+ +8% from last month"
        icon={<CircleDollarSign size={28} />}
        iconColor="text-indigo-700"
        bgColor="bg-indigo-100"
      />

      <StatCard
        title="Total Sources"
        amount="4"
        text="Active income sources"
        icon={<FileText size={28} />}

        iconColor="text-blue-700"
        bgColor="bg-blue-100"
      />
    
     
         <StatCard
        title="Highest Income"
        amount="₹ 2,000"
        text="From Freelancing"
        icon={<TrendingUp size={28} />}

        iconColor="text-green-500"
        bgColor="bg-green-100"
      />
    </div>
  )
}

export default IncomeStats