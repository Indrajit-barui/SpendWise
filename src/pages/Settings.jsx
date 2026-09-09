import Profile from "@/components/Settings/Profile"
import Perference from "@/components/Settings/Perference"
import Datamanagement from "@/components/Report/Datamanagement"
import {WalletCards} from "lucide-react"
const Settings = () => {
  return (
    <div>
      <Profile/>
      <Perference/>
      <Datamanagement/>
      <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 px-3 py-5">
        {/* about section */}
         <div className="">
           <p className="text-xl font-bold">About</p>
           <p className="text-sm text-gray-400">App information</p>
         </div>
<div className="flex flex-col xl:flex-row justify-between">
         <div className="flex gap-2 mt-2">
          <div className="h-12 w-12 rounded-xl bg-indigo-100  text-indigo-700 flex items-center justify-center">
             <WalletCards size={25}/>
          </div>
          <div className="flex gap-2">
            <div> 
              <p>
              SET- Student Expenses Tracker
            </p>
            <p>
              Track smarter, Spend Better
            </p></div>
            <div className="bg-indigo-200 text-indigo-700 h-8 w-30 rounded-xl flex justify-center items-center">
              Version 1.0.0
            </div>
          </div>
           
         </div>

         <div>
           <p className="text-sm text-gray-600">A simple and free expense tracker <br />built for student</p>
         </div>
 </div>
      </div>
    </div>
  )
}

export default Settings