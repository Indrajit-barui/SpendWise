import { CalendarDays, Moon, Sun ,ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Perference = () => {
  return (
     <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] mt-5 px-3 py-5">
      
        {/* table header */}
        <div>
            <p className="text-xl font-bold">Preference</p>
            <p className="text-sm text-gray-500">Customize your experience</p>
        </div>
        {/* Default month */}
        <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-2 xl:gap-5">
            <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center shrink-0">
                <CalendarDays size={28}/>
            </div>
            <div>
            <p className="font-bold">Default Month</p>
            <p className="text-sm text-gray-400">Set the month to show when you open the app</p>
            </div>

            </div>

  <div>


<DropdownMenu>
<DropdownMenuTrigger asChild>
  <button
    type="button"
    className="flex h-10 w-40 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm"
  >
    Current Month
    <ChevronDown size={16} />
  </button>
</DropdownMenuTrigger>

  <DropdownMenuContent>
    <DropdownMenuItem>Current Month</DropdownMenuItem>
    <DropdownMenuItem>Previous Month</DropdownMenuItem>
    <DropdownMenuItem>Select Month</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
        </div>

        {/* Theme */}
        <div className="mt-5 flex justify-between items-center">
            <div className="flex gap-2 xl:gap-5">
            <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <Moon size={24}/>
            </div>
            <div>
            <p className="font-bold">Theme</p>
            <p className="text-sm text-gray-400">Choose your preferred app theme</p>
            </div>

            </div>

  <div>


<DropdownMenu>
<DropdownMenuTrigger asChild>
  <button
    type="button"
    className="flex justify-between h-10 w-40 items-center gap-2 rounded-lg border border-gray-300 bg-white px-4  "
  >
    <div className="flex gap-1"><Sun/>  Light</div>
  
    <ChevronDown size={16} />
  </button>
</DropdownMenuTrigger>

  <DropdownMenuContent>
    

    <DropdownMenuItem><Moon/>Dark</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
        </div>
    </div>
  )
}

export default Perference