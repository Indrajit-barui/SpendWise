import { useState } from "react"
import { Header } from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Stats from "./components/Stats/Stats"
import IncomeOverview from "./components/IncomeOverview/IncomeOverview"
import ReacentTransaction from "./components/RecentTransaction/ReacentTransaction"
import ReacentIncome from "./components/RecentIncome/ReacentIncome"
import RecentExpenses from "./components/Recent Expenses/RecentExpenses"
const App = () => {

  const [isSidebarOpen, setSidebar] = useState(false)

  return (
    <>
    
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebar={setSidebar}
      />

      {/* Main content */}
      <div className="px-1 pt-3 md:px-10 md:ml-64">
        <Header setSidebar={setSidebar} />
        <div>
        <Stats/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
<IncomeOverview/>
<ReacentTransaction/>
<ReacentIncome/>
<RecentExpenses/>
      </div>
      

      </div>

      
    </>
  )
}

export default App