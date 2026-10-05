import { CalendarDays, Moon, Sun ,ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState,useEffect } from "react";

const Perference = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
}, [theme]);
  return (
<div className="mt-5 w-full rounded-lg border border-gray-200 bg-white px-3 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">

  {/* Header */}
  <div>
    <p className="text-xl font-bold">
      Preference
    </p>

    <p className="text-sm text-gray-500">
      Customize your experience
    </p>
  </div>


  {/* Default Month */}
  <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    {/* Left */}
    <div className="flex min-w-0 items-center gap-3 xl:gap-5">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200">
        <CalendarDays size={28} />
      </div>

      <div className="min-w-0">
        <p className="font-bold">
          Default Month
        </p>

        <p className="text-sm text-gray-400">
          Set the month to show when you open the app
        </p>
      </div>

    </div>


    {/* Dropdown */}
    <div className="w-full md:w-auto">

      <DropdownMenu>

        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm md:w-40"
          >
            <span>Current Month</span>
            <ChevronDown size={16} />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>
            Current Month
          </DropdownMenuItem>

          <DropdownMenuItem>
            Previous Month
          </DropdownMenuItem>

          <DropdownMenuItem>
            Select Month
          </DropdownMenuItem>
        </DropdownMenuContent>

      </DropdownMenu>

    </div>

  </div>


  {/* Theme */}
  <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    {/* Left */}
    <div className="flex min-w-0 items-center gap-3 xl:gap-5">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-200">
        <Moon size={24} />
      </div>

      <div className="min-w-0">
        <p className="font-bold">
          Theme
        </p>

        <p className="text-sm text-gray-400">
          Choose your preferred app theme
        </p>
      </div>

    </div>


    {/* Dropdown */}
    <div className="w-full md:w-auto">

      <DropdownMenu>

        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex h-10 w-full items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 md:w-40"
          >

            <div className="flex items-center gap-1">
              {theme === "light" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}

              <span>
                {theme === "light" ? "Light" : "Dark"}
              </span>
            </div>

            <ChevronDown size={16} />

          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>

          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Sun size={18} />
            Light
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Moon size={18} />
            Dark
          </DropdownMenuItem>

        </DropdownMenuContent>

      </DropdownMenu>

    </div>

  </div>

</div>
  )
}

export default Perference