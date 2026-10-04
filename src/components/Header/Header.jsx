import { Datepicker } from "../Datepicker"

import { useLocation } from "react-router-dom"

import {
  Bell,
  LayoutDashboard,
  Wallet,
  Receipt,
  ChartNoAxesCombined,
  CalendarPlus,
  FileText,
  Settings
} from "lucide-react";

const  Header = ({setSidebar}) => {

const pageIcons = {
    Dashboard: LayoutDashboard,
    Income: Wallet,
    Expenses: Receipt,
    Analytics: ChartNoAxesCombined,
    Budget_goals: CalendarPlus,
    Report: FileText,
    Settings: Settings,
  };

  const location = useLocation();

  const pageName = location.pathname.split("/").pop() || "Dashboard";

  const displayName =
    pageName === "Budget_goals" ? "Budget & Goals" : pageName;

  const PageIcon = pageIcons[pageName] || LayoutDashboard;
  return (
<header className="sticky top-0 z-50 flex h-16 w-full min-w-0 items-center justify-between gap-2 bg-white px-4 shadow-sm">

  {/* left section */}
  <div className="flex min-w-0 items-center gap-4">

    <i
      className="fa-solid fa-bars text-xl cursor-pointer"
      onClick={() => setSidebar(true)}
    ></i>

    <PageIcon
      className="text-purple-600"
      size={25}
    />

    <p className="min-w-0 truncate text-xl md:text-2xl">
      {displayName}
    </p>

  </div>

  {/* right section */}
  <div className="flex shrink-0 items-center gap-2">

    <Datepicker />
    <Bell />

  </div>


</header>

  )
}


export default Header;