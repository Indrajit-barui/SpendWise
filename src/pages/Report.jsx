import { Download } from "lucide-react"
import ReportStats from "@/components/Stats/ReportStats"
const Report = () => {
  return (
    <div className="">
      <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2">
        {/* header */}
        <div className="flex justify-between">
          <div>
            <p>Monthly Report</p>
            <p>Here's your complete financial overview for Sep 2026</p>
          </div>
          <div>


<button
  className="
    flex items-center gap-2
    rounded-lg
    bg-indigo-600
    px-5 py-3
    text-sm font-medium text-white
    shadow-sm
    transition-all duration-200
    hover:bg-indigo-700
    hover:shadow-md
    active:scale-95
  "
>
  <Download size={18} />
  Download Report
</button>
          </div>
        </div>
       <ReportStats/>
      </div>


    </div>
  )
}

export default Report