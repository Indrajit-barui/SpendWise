import {Plus,BarChart3,PieChart,Target,TrendingUp} from "lucide-react"
import FeatureCard from "./FeatureCard"
import { useState,useContext } from "react";
import { Context } from "@/Context/Context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
const EmptyState = () => {
const {setExpenses}=useContext(Context)
  
const [open,setOpen]=useState(false);
const [formData, setFormData] = useState({
  title: "",
  category: "Food",
  amount: "",
  date: "",
  notes: "",
});
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:5000/expenses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  setExpenses((prevExpense)=>[data,...prevExpense]);

  setFormData({
    title: "",
    category: "Food",
    amount: "",
    date: "",
    notes: "",
  });

  setOpen(false);
};
  return (
    <div className="space-y-6">
        <div className="min-h-[450px] rounded-xl border bg-white flex flex-col items-center justify-center text-center">
        {/* Illustration */}
        
            <div className="mb-6">
              <div className="relative w-28 h-28 rounded-full bg-red-50 flex items-center justify-center">

                <div className="w-16 h-20 bg-blue-100 rounded-md rotate-12 flex flex-col justify-center gap-2 px-4">
                  <div className="h-2 bg-blue-300 rounded" />
                  <div className="h-2 bg-blue-300 rounded" />
                  <div className="h-2 bg-blue-300 rounded" />
                </div>

                <div className="absolute -right-2 bottom-1 w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center">
                  <Plus size={28} />
                </div>

              </div>
            </div>
            {/* heading */}
            <div className="flex flex-col justify-center items-center ">
                <p className="text-3xl font-semibold">No Expenses yet</p>
                <p className="mt-2 text-gray-500">You haven't added any expenses yet. Start tracking your <br />spending to see your expenses, trends and category <br />breakdown here.</p>

                <button 
                type="button"
                onClick={()=>setOpen(true)}
                className="mt-5 flex gap-2 items-center rounded-xl  bg-red-500 px-7 py-3 text-white font-semibold hover:bg-red-600 transition"><Plus/> Add Your First Expense</button>
            </div>


        </div>

            {/* small Card */}
            <div className="rounded-xl border bg-white p-3">
                <p className="font-semibold text-xl">Why track your expenses?</p>
                <p className="text-sm text-gray-500">Stay in control of your money and build better habits</p>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                <FeatureCard 
               icon={<BarChart3 size={26} className="text-red-600"/>}
                title="See Your Spending"
                description="Visualize where your money goes"
                className="bg-red-50"
                 bg_color="bg-red-100"
                />
              <FeatureCard 
               icon={<PieChart size={26} className="text-blue-600"/>}
                title="Understand Patterns"
                description="Find out your top expense categories"
                className="bg-blue-50"
                bg_color="bg-blue-100"
                />
                <FeatureCard 
               icon={<Target size={26} className="text-green-600"/>}
                title="See Better Goals"
                description="Plan and save for what matters"
                className="bg-green-50"
                 bg_color="bg-green-100"
                />
              <FeatureCard 
               icon={<TrendingUp size={26} className="text-indigo-600"/>}
                title="Build Good Habits"
                description="Track daily and make smarter choice"
                className="bg-indigo-50"
                bg_color="bg-indigo-100"
                />
                </div>

            </div>

    
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Expense</DialogTitle>
      <DialogDescription>
        Add a new expense to your account
      </DialogDescription>
    </DialogHeader>

<form onSubmit={handleSubmit}>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Title <span className="text-red-500">*</span>
  </label>

  <input
    value={formData.title}
    required
    onChange={(e)=>setFormData({...formData,title:e.target.value})}
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
   value={formData.category}
  onChange={(e)=>setFormData({...formData,category:e.target.value})}
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
      value={formData.amount}
      onChange={(e)=>setFormData({...formData,amount:e.target.value})}
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
  value={formData.date}
  onChange={(e)=>setFormData({...formData,date:e.target.value})}
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
    value={formData.notes}
    onChange={(e)=>setFormData({...formData,notes:e.target.value})}
    placeholder="Add a note (optional)..."
    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-red-500"
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
  )
}

export default EmptyState