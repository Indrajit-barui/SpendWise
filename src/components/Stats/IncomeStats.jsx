import StatCard from "./StatCard"
import {
  ArrowUp,
  CircleDollarSign,
  FileText,
  TrendingUp
} from "lucide-react";
const IncomeStats = ({TotalIncome,HighestIncome,TotalSources,AverageIncome}) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
        title="Total Income"
        amount={TotalIncome}
        text="18% from last month"
        icon={<ArrowUp size={28} />}

        iconColor="text-green-500"
        bgColor="bg-green-100"
      />

      <StatCard
        title="Average Income"
        amount={`${AverageIncome}`}
        text="+ +8% from last month"
        icon={<CircleDollarSign size={28} />}
        iconColor="text-indigo-700"
        bgColor="bg-indigo-100"
      />

      <StatCard
        title="Total Sources"
        amount={`${TotalSources}`}
        text="Active income sources"
        icon={<FileText size={28} />}

        iconColor="text-blue-700"
        bgColor="bg-blue-100"
      />
    
     
         <StatCard
        title="Highest Income"
        amount={`₹ ${HighestIncome.amount}`}
        text={`${HighestIncome.source}`}
        icon={<TrendingUp size={28} />}

        iconColor="text-green-500"
        bgColor="bg-green-100"
      />
    </div>
  )
}

export default IncomeStats