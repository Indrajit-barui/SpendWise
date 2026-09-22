import Stats from "../components/Stats/Stats";
import img1 from "../assets/images/deshimg1.jpeg"
import img2 from "../assets/images/deshimg2.jpeg"
import IncomeVsExpenses from "@/components/Analytics/IncomeVsExpenses";
import ExpensesByCategory from "@/components/Analytics/ExpensesByCategory";
import QuickActions from "@/components/Dashboard/QuickActions";
import RecenttransactionReport from "@/components/Report/RecenttransactionReport";
import {useContext} from "react"
import {Context} from "../App"
const Dashboard = () => {
  const{expenses,income}=useContext(Context);


  const totalIncome = income.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  const totalExpenses = expenses.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  const savings = totalIncome - totalExpenses;

  const savingsPercentage =
    totalIncome > 0
      ? ((savings / totalIncome) * 100).toFixed(1)
      : 0;
  return (
    <div className="space-y-4">

      {/* Hero */}
<section className="w-full h-56 flex items-center rounded-xl bg-indigo-50 overflow-hidden">

  {/* Left Image */}
  <div className="w-[25%] h-full">
    <img
      src={img1}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* Middle Text */}
{/* Middle Text */}
<div className="w-[50%] h-full flex flex-col items-center justify-center px-6 text-center">

  <p className="text-sm text-gray-600">
    Good to see you again,{" "}
    <span className="font-semibold text-purple-700">
      Student!
    </span>{" "}
    👋
  </p>

  <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
    Small Steps Today,
    <br />
    <span className="text-purple-700">
      A Brighter Tomorrow!
    </span>
  </h1>

  <p className="mt-3 text-sm text-gray-600">
    Track your income, expenses, and progress —
    <br />
    and take control of your financial journey.
  </p>

  <div className="mt-4 w-fit rounded-xl bg-purple-50 px-5 py-2">
    <p className="text-sm italic text-purple-700 text-center">
      “Plan smarter. Spend better. Achieve more.”
    </p>
  </div>

</div>

  {/* Right Image */}
  <div className="w-[25%] h-full">
    <img
      src={img2}
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

</section>

      {/* Stats */}
      <Stats />

      {/* Charts */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

  <IncomeVsExpenses />

  <ExpensesByCategory expenses={expenses} />

</div>

      {/* Bottom section */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

  <div className="h-[400px]">
    <RecenttransactionReport
      income={income}
      expenses={expenses}
    />
  </div>

  <div className="h-[400px]">
    <QuickActions
      savingsPercentage={savingsPercentage}
    />
  </div>

</div>

    </div>
  );
};

export default Dashboard;