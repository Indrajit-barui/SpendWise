
import { Download, Trash2,CloudDownload } from "lucide-react";
const Datamanagement = () => {
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 px-3 py-5">
        <div>
            <p className="text-xl font-bold">Data Management</p>
            <p className="text-sm text-gray-500">Manage your application data</p>
        </div>

                {/* Default month */}
        <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-2 xl:gap-5">
            <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <CloudDownload size={28}/>
            </div>
            <div>
            <p className="font-bold">Export Data</p>
            <p className="text-sm text-gray-400">Download your income and expense data as CSV file</p>
            </div>

            </div>

  <div>




  <button
    type="button"
    className="flex h-10 w-35 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm"
  >
     <Download size={16} />
    Export
   
  </button>

</div>
        </div>

        {/* Theme */}
        <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-2 xl:gap-5">
            <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <Trash2 size={24}/>
            </div>
            <div>
            <p className="font-bold">Clear All Data</p>
            <p className="text-sm text-gray-400">This will permanently delete all your income,expenses,categories and Transactions</p>
            </div>

            </div>

  <div>



  <button
    type="button"
    className="flex  h-10 w-35 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4  "
  >
    <Trash2 size={16} />
     Clear Data
  
    
  </button>

</div>
        </div>
    </div>
  )
}

export default Datamanagement