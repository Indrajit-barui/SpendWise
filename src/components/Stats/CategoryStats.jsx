import StatCard from "./StatCard"
import { Tag, BarChart3, TrendingUp, PieChart } from "lucide-react";
const CategoryStats = () => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Categories"
        amount="6"
        text="Expenses categories"
        icon={<Tag size={28} />}

        iconColor="text-green-500"
        bgColor="bg-green-100"
      />

      <StatCard
        title="Most Used"
        amount="Food"
        text="34% of total expenses"
        icon={<BarChart3 size={28} />}
        iconColor="text-red-700"
        bgColor="bg-red-100"
      />

      <StatCard
        title="Total Spent"
        amount="₹ 2,500"
        text="Across all Categories"
        icon={<TrendingUp size={28} />}

        iconColor="text-blue-700"
        bgColor="bg-blue-100"
      />
    
     
         <StatCard
        title="Avg. per Category"
        amount="₹ 417"
        text="Monthly average"
        icon={<PieChart size={28} />}

        iconColor="text-orange-500"
        bgColor="bg-orange-100"
      />
      

    </section>
  )
}

export default CategoryStats