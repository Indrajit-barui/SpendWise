import { useState, useEffect } from "react";
import FullState from "./components/Dashboard/FullState";
import EmptyDashboard from "./components/Dashboard/EmptyDashboard";
import { Context } from "./Context/Context";
const App = () => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/expenses")
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/income")
      .then((response) => response.json())
      .then((data) => {
        setIncome(data);
      });
  }, []);

  const hasFinancialData =
    income.length > 0 || expenses.length > 0;

return (
  <Context.Provider
    value={{ income, setIncome, expenses, setExpenses }}
  >
    {hasFinancialData ? <FullState /> : <EmptyDashboard />}
  </Context.Provider>
);
};

export default App;