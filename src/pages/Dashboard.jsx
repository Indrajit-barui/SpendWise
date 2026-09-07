
import Stats from "../components/Stats/Stats";

import IncomeOverview from "../components/IncomeOverview/IncomeOverview";
import ReacentTransaction from "../components/RecentTransaction/ReacentTransaction";
import ReacentIncome from "../components/RecentIncome/ReacentIncome";
import RecentExpenses from "../components/Recent Expenses/RecentExpenses";

const Dashboard = () => {


     
  return (
    <div className="">
    
  

      {/* Main content */}

   
        <div>
        <Stats/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
<IncomeOverview/>
<ReacentTransaction/>
<ReacentIncome/>
<RecentExpenses/>
      </div>
      

      </div>

      
    
  )
}

export default Dashboard