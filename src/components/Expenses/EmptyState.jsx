import {Plus,BarChart3,PieChart,Target,TrendingUp} from "lucide-react"
import FeatureCard from "./FeatureCard"
const EmptyState = () => {
  return (
    <div className="space-y-6">
        <div className="min-h-[450px] rounded-xl border bg-white flex flex-col items-center justify-center text-center">
        {/* Illustration */}
        
            <div className="mb-6">
              <div className="relative w-28 h-28 rounded-full bg-red-50 flex items-center justify-center">

                <div className="w-16 h-20 bg-blue-100 rounded-md rotate-12 flex flex-col justify-center gap-2 px-4">
                  <div className="h-2 bg-blue-300 rounded" />
                  <div className="h-2 bg-blue-300 rounded" />
                  <div className="h-2 bg-blue-300 rounded" />
                </div>

                <div className="absolute -right-2 bottom-1 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
                  <Plus size={28} />
                </div>

              </div>
            </div>
            {/* heading */}
            <div className="flex flex-col justify-center items-center ">
                <p className="text-3xl font-semibold">No Expenses yet</p>
                <p className="mt-2 text-gray-500">You haven't added any expenses yet. Start tracking your <br />spending to see your expenses, trends and category <br />breakdown here.</p>

                <button className="mt-5 flex gap-2 items-center rounded-xl  bg-red-500 px-7 py-3 text-white font-semibold hover:bg-red-600 transition"><Plus/> Add Your First Expense</button>
            </div>


        </div>

            {/* small Card */}
            <div className="rounded-xl border bg-white p-3">
                <p className="font-semibold text-xl">Why track your expenses?</p>
                <p className="text-sm text-gray-500">Stay in control of your money and build better habits</p>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                <FeatureCard 
               icon={<BarChart3 size={26} className="text-red-600"/>}
                title="See Your Spending"
                description="Visualize where your money goes"
                className="bg-red-50"
                 bg_color="bg-red-100"
                />
              <FeatureCard 
               icon={<PieChart size={26} className="text-blue-600"/>}
                title="Understand Patterns"
                description="Find out your top expense categories"
                className="bg-blue-50"
                bg_color="bg-blue-100"
                />
                <FeatureCard 
               icon={<Target size={26} className="text-green-600"/>}
                title="See Better Goals"
                description="Plan and save for what matters"
                className="bg-green-50"
                 bg_color="bg-green-100"
                />
              <FeatureCard 
               icon={<TrendingUp size={26} className="text-indigo-600"/>}
                title="Build Good Habits"
                description="Track daily and make smarter choice"
                className="bg-indigo-50"
                bg_color="bg-indigo-100"
                />
                </div>

            </div>

    </div>
  )
}

export default EmptyState