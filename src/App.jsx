import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";
import Category from "./pages/Category";
import Report from "./pages/Report";
import Settings from "./pages/Settings";
const App = () => {
  const [isSidebarOpen, setSidebar] = useState(false);

  return (
    <BrowserRouter>
      <div>
        
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebar={setSidebar}
        />

        {/* Main Content */}
        <div className="px-1 pt-3 md:px-10 md:ml-64">
          
          <Header setSidebar={setSidebar} />

          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Analytics" element={<Analytics/>}></Route>
            <Route path="/Income" element={<Income/>}></Route>
            <Route path="/Expenses" element={<Expenses/>}></Route> 
            <Route path="/Category" element={<Category/>}></Route> 
            <Route path="/Report" element={<Report/>}></Route> 
            <Route path="/Settings" element={<Settings/>}></Route>
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;