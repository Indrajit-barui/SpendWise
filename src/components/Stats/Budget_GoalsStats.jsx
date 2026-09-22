import StatCard from "./StatCard"
import { Wallet2, Receipt, CircleDollarSign, Target } from "lucide-react";

const Budget_GoalsStats = () => {
  return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Monthly Budget"
        amount="₹ 5000"
        text="for sep 2026"
        icon={<Wallet2 size={28} />}

        iconColor="text-blue-500"
        bgColor="bg-blue-100"
      />

      <StatCard
        title="Total Spent"
        amount="₹ 2000"
        text="34% of budget"
        icon={<Receipt size={28} />}
        iconColor="text-red-700"
        bgColor="bg-red-100"
      />


    
     
         <StatCard
        title="Remaining"
        amount="₹ 3000"
        text="64 % left"
        icon={<CircleDollarSign size={28} />}

        iconColor="text-orange-500"
        bgColor="bg-orange-100"
      />
          <StatCard
        title="Active Goals"
        amount="2"
        text="Keep going"
        icon={<Target size={28} />}

        iconColor="text-blue-700"
        bgColor="bg-blue-100"
      />  

    </section>
  )
}

export default Budget_GoalsStats