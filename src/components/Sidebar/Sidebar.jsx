import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  ChartNoAxesCombined,
  
  FileText,
  Settings,
  X,
  CalendarPlus,
  LogOut
} from "lucide-react"
import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import { useState } from "react";
import { useContext } from "react";
import { SettingContext } from "@/Context/Context";
function Sidebar({ isSidebarOpen, setSidebar }) {
  const[activeItem,setActiveItem]=useState("Dashboard")
 
  const{user}=useContext(SettingContext)
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};
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
          onClick={()=>{setActiveItem("Dashboard");
            navigate("/dashboard")
          }}
          
        />

        <NavItem
          icon={<Wallet size={20} className="text-green-500"/>}
          text="Income"
          active={activeItem==="Income"}
          onClick={()=>{setActiveItem("Income")

            navigate("/dashboard/Income");
          }}
        />

        <NavItem
          icon={<CreditCard size={20} className="text-red-500"/>}
          text="Expenses"
          active={activeItem==="Expenses"}
          onClick={()=>{setActiveItem("Expenses")
            navigate("/dashboard/Expenses")
          }}
        />

        <NavItem
          icon={<ChartNoAxesCombined size={20} className="text-blue-500"/>}
          text="Analytics"

           active={activeItem==="Analytics"}
          onClick={()=>{setActiveItem("Analytics")
              navigate("/dashboard/Analytics")
          }}
        />
        <NavItem
          icon={<CalendarPlus size={20} className="text-purple-500"/>}
          text="Budget & Goals"
          active={activeItem==="Budget_goals"}
          onClick={()=>{setActiveItem("Budget_goals")
            navigate("/dashboard/Budget_goals")
          }}
        />


        <NavItem
          icon={<FileText size={20} className="text-blue-800"/>}
          text="Reports"

           active={activeItem==="Reports"}
          onClick={()=>{setActiveItem("Reports")
            navigate("/dashboard/Report")
          }}
        />

        <NavItem
          icon={<Settings size={20} className="text-gray-500"/>}
          text="Settings"
          active={activeItem==="Settings"}
          onClick={()=>{setActiveItem("Settings")
            navigate("/dashboard/Settings")
          }
        }
        />

      </nav>

      {/* User Section */}
      <div className="absolute bottom-0 w-full border-t p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-medium text-sm">
              {user?.name}
            </p>

            <p className="text-xs text-gray-500">
              {user?.email}
            </p>
          </div>

        </div>
<div>
<button
onClick={handleLogout}
  className="flex items-center gap-3 w-full mt-4 px-3 py-2.5 rounded-lg
             text-gray-600 hover:text-red-600 hover:bg-red-50
             transition-colors duration-200"
>
  <LogOut size={19} />
  <span className="text-sm font-medium">Logout</span>
</button>
</div>
      </div>

    </aside>
  )
}

export default Sidebar;