import {
  PackageOpen,
  Plus,
  BarChart3,
  PieChart,
  Lightbulb,
  Wallet2
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../../Context/Context";
const EmptyDashboard = () => {
const {setIncome,setExpenses}=useContext(Context)
const [open,setOpen]=useState(false);
const [formData, setFormData] = useState({
  source: "",
  category: "Salary",
  amount: "",
  date: "",
  notes: "",
});
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/income", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  setIncome((prevIncome)=>[data,...prevIncome]);

  setFormData({
    source: "",
    category: "Salary",
    amount: "",
    date: "",
    notes: "",
  });

  setOpen(false);
};

const [openexpensees,setOpenexpenses]=useState(false);
const [formDataexpenses, setFormDataexpenses] = useState({
  title: "",
  category: "Food",
  amount: "",
  date: "",
  notes: "",
});
const ExpensehandleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataexpenses),
  });

  const data = await response.json();

  setExpenses((prevExpense)=>[data,...prevExpense]);

  setFormDataexpenses({
    title: "",
    category: "Food",
    amount: "",
    date: "",
    notes: "",
  });

  setOpenexpenses(false);
};
  return (
    <div className="w-full">


      {/* Dashboard heading */}
      <div className="flex gap-3 py-3 px-10">
        <div className="w-12 h-12 rounded-xl flex justify-center items-center bg-green-200 text-green-700 mt-2">
            <Wallet2 size={28}/>
        </div>
        <div>
        <h1 className="text-3xl font-bold text-green-900">
          SpendWise
        </h1>

        <p className="mt-1 text-gray-500">
          Track your money, build a better future.
        </p>
        </div>

      </div>

      {/* Empty dashboard */}
      <div className="mt-6 flex min-h-[calc(100vh-180px)] flex-col items-center justify-center">

        {/* Illustration */}
        <div className="flex h-40 w-40 items-center justify-center rounded-full bg-green-50">
          <PackageOpen
            size={90}
            strokeWidth={1.3}
            className="text-gray-300"
          />
        </div>

        {/* Main message */}
        <div className="mt-6 text-center">

          <h2 className="text-3xl font-bold text-slate-900">
            Your dashboard is ready! 👋
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            Start tracking your money.
          </p>

        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

          <button
            type="button"
            onClick={()=>setOpen(true)}
            className="flex min-w-52 items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white transition hover:bg-green-700"
          >
            <Plus size={21} />
            Add Income
          </button>

          <button
            type="button"
            onClick={()=>setOpenexpenses(true)}
            className="flex min-w-52 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:bg-gray-50"
          >
            <Plus size={21} />
            Add Expense
          </button>

        </div>

        {/* Explanation */}
        <p className="mt-6 max-w-md text-center text-sm leading-6 text-gray-500">
          Charts and insights will appear
          <br />
          once you add some data.
        </p>

        {/* Bottom information */}
        <div className="mt-10 w-full max-w-5xl border-t border-gray-200 pt-8">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

            {/* Track Progress */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                <BarChart3 size={26} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Track Progress
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  See your income, expenses and savings.
                </p>
              </div>
            </div>

            {/* Understand Spending */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <PieChart size={26} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Understand Spending
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Get insights with charts and reports.
                </p>
              </div>
            </div>

            {/* Build Better Habits */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <Lightbulb size={26} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Build Better Habits
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Take control of your financial future.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Income</DialogTitle>
      <DialogDescription>
        Add a new income to your account
      </DialogDescription>
    </DialogHeader>

<form onSubmit={handleSubmit}>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Source <span className="text-red-500">*</span>
  </label>

  <input
    value={formData.source}
    required
    onChange={(e)=>setFormData({...formData,source:e.target.value})}
    type="text"
    placeholder="e.g. Part-time Job,Freelancing,Scholarship..."
    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
  />
</div>

<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Category <span className="text-red-500">*</span>
  </label>

  <select className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
  required
   value={formData.category}
  onChange={(e)=>setFormData({...formData,category:e.target.value})}
  >
    



    <option>Salary</option>
    <option>Part-time Job</option>
    <option>Freelance</option>
    <option>Internship</option>
    <option>Business</option>
    <option>Tutoring</option>
    <option>Content Creation</option>
    <option>Scholarship</option>
    <option>Parents Support</option>
    <option>Investment</option>
    <option>Interest</option>
    <option>Affiliate Income</option>
    <option>Gifts</option>
    <option >Commission</option>
    <option>Rental Income</option>
    <option >Cashback</option>
    <option>Refund</option>
    <option>Other</option>
  </select>
</div>
<div className="space-y-2"

>
  <label className="text-sm font-medium">
    Amount <span className="text-red-500">*</span>
  </label>

  <div className="flex">
    <span className="flex items-center rounded-l-lg border border-r-0 border-gray-200 px-4 text-gray-600">
      ₹
    </span>

    <input
      type="number"
      
      required
      value={formData.amount}
      onChange={(e)=>setFormData({...formData,amount:e.target.value})}
      placeholder="0.00"
      className="w-full rounded-r-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
    />
  </div>
</div>
</div>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Date <span className="text-red-500">*</span>
  </label>

  <input
    type="date"
  required
  value={formData.date}
  onChange={(e)=>setFormData({...formData,date:e.target.value})}
    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
  />
</div>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Notes <span className="text-gray-400">(optional)</span>
  </label>

  <textarea
    rows={4}
    maxLength={200}
    value={formData.notes}
    onChange={(e)=>setFormData({...formData,notes:e.target.value})}
    placeholder="Add a note (optional)..."
    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-green-500"
  />
  
  <p className="text-right text-xs text-gray-400">
    {formData.notes.length}/200
  </p>
</div>
<div className="flex justify-end gap-3 border-t pt-5">

  <button
    type="button"
    onClick={() => setOpen(false)}
    className="rounded-lg border border-gray-200 px-6 py-3 font-medium hover:bg-gray-100"
  >
    Cancel
  </button>

  <button
    type="submit"
    className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
  >
    <Plus size={18} />
    Add Income
  </button>

</div>
</form>


  </DialogContent>
</Dialog>
<Dialog open={openexpensees} onOpenChange={setOpenexpenses}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Expense</DialogTitle>
      <DialogDescription>
        Add a new expense to your account
      </DialogDescription>
    </DialogHeader>

<form onSubmit={ExpensehandleSubmit}>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Title <span className="text-red-500">*</span>
  </label>

  <input
    value={formDataexpenses.title}
    required
    onChange={(e)=>setFormDataexpenses({...formDataexpenses,title:e.target.value})}
    type="text"
    placeholder="e.g. Lunch, Bus Ticket, Groceries..."
    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
  />
</div>

<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Category <span className="text-red-500">*</span>
  </label>

  <select className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
  required
   value={formDataexpenses.category}
  onChange={(e)=>setFormDataexpenses({...formDataexpenses,category:e.target.value})}
  >
    <option>Food</option>
    <option>Groceries</option>
    <option>Transport</option>
    <option>Education</option>
    <option>Shopping</option>
    <option>Entertainment</option>
    <option>Bills & Utilities</option>
    <option>Subscriptions</option>
    <option>Health</option>
    <option>Personal Care</option>
    <option>Housing</option>
    <option>Travel</option>
    <option>Gifts</option>
    <option>Debt & Payments</option>
    <option>Other</option>
  </select>
</div>
<div className="space-y-2"

>
  <label className="text-sm font-medium">
    Amount <span className="text-red-500">*</span>
  </label>

  <div className="flex">
    <span className="flex items-center rounded-l-lg border border-r-0 border-gray-200 px-4 text-gray-600">
      ₹
    </span>

    <input
      type="number"
      
      required
      value={formDataexpenses.amount}
      onChange={(e)=>setFormDataexpenses({...formDataexpenses,amount:e.target.value})}
      placeholder="0.00"
      className="w-full rounded-r-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
    />
  </div>
</div>
</div>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Date <span className="text-red-500">*</span>
  </label>

  <input
    type="date"
  required
  value={formDataexpenses.date}
  onChange={(e)=>setFormDataexpenses({...formDataexpenses,date:e.target.value})}
    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
  />
</div>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Notes <span className="text-gray-400">(optional)</span>
  </label>

  <textarea
    rows={4}
    maxLength={200}
    value={formDataexpenses.notes}
    onChange={(e)=>setFormDataexpenses({...formDataexpenses,notes:e.target.value})}
    placeholder="Add a note (optional)..."
    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
  />
  
  <p className="text-right text-xs text-gray-400">
    {formDataexpenses.notes.length}/200
  </p>
</div>
<div className="flex justify-end gap-3 border-t pt-5">

  <button
    type="button"
    onClick={() => setOpenexpenses(false)}
    className="rounded-lg border border-gray-200 px-6 py-3 font-medium hover:bg-gray-100"
  >
    Cancel
  </button>

  <button
    type="submit"
    className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700"
  >
    <Plus size={18} />
    Add Expense
  </button>

</div>
</form>




  </DialogContent>
</Dialog>
    </div>
  );
};

export default EmptyDashboard;