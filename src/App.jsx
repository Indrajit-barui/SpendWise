import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Income from "./pages/Income";
import Expenses from "./pages/Expenses";

import Report from "./pages/Report";
import Settings from "./pages/Settings";
import Budget_goals from "./pages/Budget_goals";
export const Context=createContext();
const App = () => {
  const [isSidebarOpen, setSidebar] = useState(false);
    const [expenses,setExpenses]=useState([]);
    useEffect(()=>{
    fetch("http://localhost:5000/expenses").then((response)=> response.json())
    .then((data)=>{
      setExpenses(data);
    
    })
  },[])
    const [income,setIncome]=useState([]);
  useEffect(()=>{
  fetch("http://localhost:5000/income").then((response)=> response.json())
  .then((data)=>{
    setIncome(data);
  
  })
},[])
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
<Context.Provider value={{expenses,setExpenses,income,setIncome}}>
          <Routes>
            <Route path="/" element={<Dashboard  />} />
            <Route path="/Dashboard" element={<Dashboard  />} />
            <Route path="/Analytics" element={<Analytics />}></Route>
            <Route path="/Income" element={<Income income={income} setIncome={setIncome}/>}></Route>
            <Route path="/Expenses" element={<Expenses expenses={expenses} setExpenses={setExpenses}/>}></Route> 
            <Route path="/Budget_goals" element={<Budget_goals/>}></Route> 

            <Route path="/Report" element={<Report/>}></Route> 
            <Route path="/Settings" element={<Settings/>}></Route>
          </Routes>
</Context.Provider >

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;