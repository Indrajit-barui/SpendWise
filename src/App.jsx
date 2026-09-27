import { useState, useEffect } from "react";
import FullState from "./components/Dashboard/FullState";
import EmptyDashboard from "./components/Dashboard/EmptyDashboard";
import { Context } from "./Context/Context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  // const [income, setIncome] = useState([]);
  // const [expenses, setExpenses] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/expenses")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setExpenses(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/income")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIncome(data);
  //     });
  // }, []);

  // const hasFinancialData =
  //   income.length > 0 || expenses.length > 0;

return (
  // <Context.Provider
  //   value={{ income, setIncome, expenses, setExpenses }}
  // >
  //   {hasFinancialData ? <FullState /> : <EmptyDashboard />}
  // </Context.Provider>

  <BrowserRouter>
    <Routes>
      <Route path="/" element={  <Landing />  } />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>


 
);
};

export default App;