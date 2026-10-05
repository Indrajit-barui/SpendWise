import Profile from "@/components/Settings/Profile"
import Perference from "@/components/Settings/Perference"
import Datamanagement from "@/components/Settings/Datamanagement"
import {WalletCards} from "lucide-react"


const Settings = () => {



  return (
    <div>
     
      <Profile/>
      <Perference/>
      <Datamanagement/>

<div className="mt-5 w-full rounded-lg border border-gray-200 bg-white px-3 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
  {/* About heading */}
  <div>
    <p className="text-xl font-bold">About</p>
    <p className="text-sm text-gray-400">App information</p>
  </div>

  {/* App information */}
  <div className="mt-5 flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">

    {/* App details */}
    <div className="flex min-w-0 items-start gap-3">
      
      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
        <WalletCards size={25} />
      </div>

      {/* Name + tagline + version */}
      <div className="min-w-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
          <div className="min-w-0">
            <p className="truncate font-medium text-gray-900">
              SET - Student Expenses Tracker
            </p>

            <p className="text-sm text-gray-500">
              Track smarter, Spend Better
            </p>
          </div>

          {/* Version */}
          <div className="flex w-fit shrink-0 items-center justify-center rounded-xl bg-indigo-100 px-3 py-1.5 text-xs font-medium text-indigo-700">
            Version 1.0.0
          </div>
        </div>
      </div>
    </div>

    {/* Description */}
    <div className="xl:text-right">
      <p className="text-sm text-gray-600">
        A simple and free expense tracker
        <br className="hidden xl:block" />
        built for students
      </p>
    </div>

  </div>
</div>
    </div>
  )
}

export default Settings