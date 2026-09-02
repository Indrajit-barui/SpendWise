import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  ChartNoAxesCombined,
  Tags,
  FileText,
  Settings,
  X,
} from "lucide-react"
import NavItem from "./NavItem";
import { useState } from "react";
function Sidebar({ isSidebarOpen, setSidebar }) {
  const[activeItem,setActiveItem]=useState("Dashboard")
  return (
    <aside
      className={`
        fixed left-0 top-0
        h-screen w-64
        bg-white
        border-r
        z-50
        transition-transform duration-300

        ${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        md:translate-x-0
      `}
    >
      {/* Mobile Close Button */}
      <button
        onClick={() => setSidebar(false)}
        className="absolute right-4 top-4 md:hidden"
      >
        <X size={22} />
      </button>

      {/* Logo */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
            S
          </div>

          <div>
            <h2 className="font-bold text-xl">
              SET
            </h2>

            <p className="text-xs text-gray-500">
              Student Expense Tracker
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">

        <NavItem
          icon={<LayoutDashboard size={20} className="text-blue-700"/>}
          text="Dashboard"
          active={activeItem==="Dashboard"}
          onClick={()=>setActiveItem("Dashboard")}
        />

        <NavItem
          icon={<Wallet size={20} className="text-green-500"/>}
          text="Income"
          active={activeItem==="Income"}
          onClick={()=>setActiveItem("Income")}
        />

        <NavItem
          icon={<CreditCard size={20} className="text-red-500"/>}
          text="Expenses"
          active={activeItem==="Expenses"}
          onClick={()=>setActiveItem("Expenses")}
        />

        <NavItem
          icon={<ChartNoAxesCombined size={20} className="text-blue-500"/>}
          text="Analytics"

           active={activeItem==="Analytics"}
          onClick={()=>setActiveItem("Analytics")}
        />

        <NavItem
          icon={<Tags size={20} className="text-orange-500"/>}
          text="Categories"
          active={activeItem==="Categories"}
          onClick={()=>setActiveItem("Categories")}
        />

        <NavItem
          icon={<FileText size={20} className="text-blue-800"/>}
          text="Reports"

           active={activeItem==="Reports"}
          onClick={()=>setActiveItem("Reports")}
        />

        <NavItem
          icon={<Settings size={20} className="text-gray-500"/>}
          text="Settings"
          active={activeItem==="Settings"}
          onClick={()=>setActiveItem("Settings")}
        />

      </nav>

      {/* User Section */}
      <div className="absolute bottom-0 w-full border-t p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
            S
          </div>

          <div>
            <p className="font-medium text-sm">
              Student
            </p>

            <p className="text-xs text-gray-500">
              student@example.com
            </p>
          </div>

        </div>

      </div>

    </aside>
  )
}

export default Sidebar;