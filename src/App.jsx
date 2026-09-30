import { useState ,useEffect,useContext} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FullState from "./components/Dashboard/FullState";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import EmptyDashboard from "./components/Dashboard/EmptyDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import LoadingScreen from "./LoadingScreen";
import { Context } from "./Context/Context";
const DashboardRoute = () => {
  const { income, expenses, isLoading } = useContext(Context);

  if (isLoading) {
    return <div><LoadingScreen/></div>;
  }

  if (income.length === 0 && expenses.length === 0) {
    return <EmptyDashboard />;
  }

  return <FullState />;
};


const App = () => {        
  const [income, setIncome] = useState([]);         
  const [expenses, setExpenses] = useState([]);    
  const [isLoading, setIsLoading] = useState(true);    
useEffect(() => {
  const token = localStorage.getItem("token");

  Promise.all([
    fetch("http://localhost:5000/income", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json()),

    fetch("http://localhost:5000/expenses", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json()),
  ])
    .then(([incomeData, expenseData]) => {
      setIncome(incomeData);
      setExpenses(expenseData);
      setIsLoading(false);
    });
}, []);

  return (   
    <Context.Provider
      value={{ income, setIncome, expenses, setExpenses,isLoading }}
    >
      <BrowserRouter>
<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/dashboard/*" element={<DashboardRoute />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/reset-password/:token" element={<ResetPassword />} />

</Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;