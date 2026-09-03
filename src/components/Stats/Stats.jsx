import StatCard from "./StatCard"
import { Wallet, CreditCard, ChartPie, Calendar } from "lucide-react"

function Stats() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Total Income"
        amount="₹ 6,500"
        text="18% from last month"
        icon={<Wallet size={28} />}

        iconColor="text-green-500"
        bgColor="bg-green-100"
      />

      <StatCard
        title="Total Expenses"
        amount="₹ 2,500"
        text="8% from last month"
        icon={<CreditCard size={28} />}
        iconColor="text-red-700"
        bgColor="bg-red-100"
      />

      <StatCard
        title="Balance"
        amount="₹ 4,000"
        text="25% from last month"
        icon={<ChartPie size={28} />}

        iconColor="text-blue-700"
        bgColor="bg-blue-100"
      />

      <StatCard
        title="Today's Expenses"
        amount="₹ 320"
        text="12% from yesterday"
        icon={<Calendar size={28} />}

        iconColor="text-orange-500"
        bgColor="bg-orange-100"
      />

    </section>
  )
}

export default Stats