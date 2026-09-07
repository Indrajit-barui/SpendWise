import {ChevronDown} from "lucide-react"
import {
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
Legend
} from "recharts"
const CategoryWise_spending = () => {
    const categoryWiseData = [
  {
    month: "Jan",
    Food: 800,
    Transport: 500,
    Education: 400,
    Shopping: 700,
    Entertainment: 300,
    Others: 200,
  },
  {
    month: "Feb",
    Food: 1000,
    Transport: 600,
    Education: 500,
    Shopping: 900,
    Entertainment: 400,
    Others: 300,
  },
  {
    month: "Mar",
    Food: 900,
    Transport: 700,
    Education: 450,
    Shopping: 800,
    Entertainment: 350,
    Others: 250,
  },
  {
    month: "Apr",
    Food: 1100,
    Transport: 800,
    Education: 600,
    Shopping: 1000,
    Entertainment: 500,
    Others: 400,
  },
  {
    month: "May",
    Food: 1200,
    Transport: 900,
    Education: 700,
    Shopping: 1200,
    Entertainment: 600,
    Others: 350,
  },
  {
    month: "Jun",
    Food: 1300,
    Transport: 800,
    Education: 650,
    Shopping: 1100,
    Entertainment: 500,
    Others: 450,
  },
];
const categories = [
  { name: "Food", color: "#22C55E" },
  { name: "Transport", color: "#3B82F6" },
  { name: "Education", color: "#8B5CF6" },
  { name: "Shopping", color: "#F59E0B" },
  { name: "Entertainment", color: "#EF4444" },
  { name: "Others", color: "#9CA3AF" },
];
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
                {/* Header */}
        <div className="flex justify-between px-2 items-center p-2">
            <div>
             <p className="font-bold">Category-wise monthly spending</p>
             <p className="text-sm text-gray-500">How your spending is distributed each month</p>
            </div>
            <div>
<button className="border border-gray-200 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
  Last 6 Months
  <ChevronDown size={16} />
</button>
            </div>

        </div>

        {/* chart */}
        <div className="h-[250px]">
         <ResponsiveContainer height="100%" width="100%">
           <BarChart data={categoryWiseData}>
            {
              categories.map((category)=>(
                <Bar
                
                key={category.name}
                dataKey={category.name}
                stackId="a"
                fill={category.color}
                />


                
              ))
            }

            <XAxis dataKey="month"/>
            <YAxis/>
            <Legend/>
            <Tooltip/>
           </BarChart>

         </ResponsiveContainer>
        </div>

    </div>
  )
}

export default CategoryWise_spending