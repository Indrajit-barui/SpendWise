import { useState, useEffect, useContext } from "react";
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
    return <LoadingScreen />;
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

  // Tracks login/logout changes
  const [authVersion, setAuthVersion] = useState(0);

  // Call this function whenever authentication changes
  const refreshAuth = () => {
    setAuthVersion((prev) => prev + 1);
  };

  useEffect(() => {
    let cancelled = false;

    const fetchUserData = async () => {
      setIsLoading(true);

      const token = localStorage.getItem("token");

      // No token means no logged-in user
      if (!token) {
        setIncome([]);
        setExpenses([]);
        setIsLoading(false);
        return;
      }

      try {
        const [incomeResponse, expenseResponse] = await Promise.all([
          fetch("http://localhost:5000/income", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),

          fetch("http://localhost:5000/expenses", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (!incomeResponse.ok || !expenseResponse.ok) {
          throw new Error("Failed to fetch user data");
        }

        const [incomeData, expenseData] = await Promise.all([
          incomeResponse.json(),
          expenseResponse.json(),
        ]);

        if (!Array.isArray(incomeData) || !Array.isArray(expenseData)) {
          throw new Error("Invalid data received from server");
        }

        if (!cancelled) {
          setIncome(incomeData);
          setExpenses(expenseData);
        }
      } catch (error) {
        console.error("Data fetching error:", error);

        if (!cancelled) {
          setIncome([]);
          setExpenses([]);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchUserData();

    return () => {
      cancelled = true;
    };
  }, [authVersion]);

  return (
    <Context.Provider
      value={{
        income,
        setIncome,
        expenses,
        setExpenses,
        isLoading,
        refreshAuth,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardRoute />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;