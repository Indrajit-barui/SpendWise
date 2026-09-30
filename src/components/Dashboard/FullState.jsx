import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../pages/Dashboard";
import Analytics from "../../pages/Analytics";
import Income from "../../pages/Income";
import Expenses from "../../pages/Expenses";
import Report from "../../pages/Report";
import Settings from "../../pages/Settings";
import Budget_goals from "../../pages/Budget_goals";
import { SettingContext } from "@/Context/Context";

const FullState = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
  const token = localStorage.getItem("token");

  fetch("http://localhost:5000/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
    });
}, []);
  return (
    <SettingContext.Provider value={{user,setUser}}>
    <div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebar={setSidebar}
      />

      <div className="px-1 pt-3 md:px-10 md:ml-64">
        <Header setSidebar={setSidebar} />

<Routes>
  <Route index element={<Dashboard />} />
  <Route path="Dashboard" element={<Dashboard />} />
  <Route path="Analytics" element={<Analytics />} />
  <Route path="Income" element={<Income />} />
  <Route path="Expenses" element={<Expenses />} />
  <Route path="Budget_goals" element={<Budget_goals />} />
  <Route path="Report" element={<Report />} />
  <Route path="Settings" element={<Settings />} />
</Routes>
      </div>
    </div>
    </SettingContext.Provider>
  );
};

export default FullState;