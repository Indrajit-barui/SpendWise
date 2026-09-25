import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard";
import Analytics from "../../pages/Analytics";
import Income from "../../pages/Income";
import Expenses from "../../pages/Expenses";
import Report from "../../pages/Report";
import Settings from "../../pages/Settings";
import Budget_goals from "../../pages/Budget_goals";

const FullState = () => {
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <div>
      <BrowserRouter>

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebar={setSidebar}
        />

        <div className="px-1 pt-3 md:px-10 md:ml-64">

          <Header setSidebar={setSidebar} />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Analytics" element={<Analytics />} />
            <Route path="/Income" element={<Income />} />
            <Route path="/Expenses" element={<Expenses />} />
            <Route path="/Budget_goals" element={<Budget_goals />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>

        </div>

      </BrowserRouter>
    </div>
  );
};

export default FullState;