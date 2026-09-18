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
const location=useLocation();
const pageName=location.pathname==="/"?"Dashboard":location.pathname.slice(1);
const displayName=pageName==="Budget_goals"?"Budget & Goals":pageName;
const PageIcon=pageIcons[pageName] || LayoutDashboard;
  return (
    <header className="flex items-center justify-between p-4">
      
    
        {/* left section */}
        <div className="flex items-center gap-4">
           <i className="fa-solid fa-bars text-xl  cursor-pointer" onClick={()=>setSidebar(true)}></i>
           
           <PageIcon className="text-purple-600" size={25}/>

           <p className="text-xl md:text-2xl">{displayName}</p>
        </div>

        {/* right section */}

        <div className="flex items-center gap-2 ">
        
         <Datepicker/>
         <Bell/>
      
        </div>
        
        </header>
  )
}


export default Header;