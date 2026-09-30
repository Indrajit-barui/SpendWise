import {Plus,BarChart3,PieChart,Target,TrendingUp,WalletCards} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { useState } from "react"
import FeatureCard from "../Expenses/FeatureCard"
import { useContext } from "react"
import { Context } from "@/Context/Context"
const EmptyIncomeState = () => {
const [open,setOpen]=useState(false);
const {setIncome}=useContext(Context)
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
       Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  return (
       <div className="space-y-6">
        <div className="min-h-[450px] rounded-xl border bg-white flex flex-col items-center justify-center text-center">
        {/* Illustration */}
        
<div className="relative mx-auto mb-6 h-40 w-40">

  {/* Background blob */}
  <div className="absolute inset-4 rounded-full bg-green-100" />

  {/* Wallet */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="flex h-24 w-28 items-center justify-center rounded-2xl bg-green-400">
      <WalletCards
        size={58}
        strokeWidth={1.8}
        className="text-white"
      />
    </div>
  </div>

  {/* Plus button */}
  <div 

  className="absolute bottom-3 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
    <Plus size={28} />
  </div>

</div>
            {/* heading */}
            <div className="flex flex-col justify-center items-center ">
                <p className="text-3xl font-semibold">No Income yet</p>
                <p className="mt-2 text-gray-500">You haven't added any income yet. Start tracking your <br /> income to see earinngs,trends and  here.</p>

                <button 
                  onClick={()=>setOpen(true)}
                className="mt-5 flex gap-2 items-center rounded-xl  bg-green-500 px-7 py-3 text-white font-semibold hover:bg-green-600 transition"><Plus/> Add Your First Expense</button>
            </div>


        </div>

            {/* small Card */}
            <div className="rounded-xl border bg-white p-3">
                <p className="font-semibold text-xl">Why track your expenses?</p>
                <p className="text-sm text-gray-500">Stay in control of your money and build better habits</p>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                <FeatureCard 
               icon={<BarChart3 size={26} className="text-green-600"/>}
                title="Track Your Earnings"
                description="See all your income sources in one place"
                className="bg-green-50"
                 bg_color="bg-green-100"
                />
              <FeatureCard 
               icon={<PieChart size={26} className="text-blue-600"/>}
                title="Understand Growth"
                description="Monitor your income trends over time"
                className="bg-blue-50"
                bg_color="bg-blue-100"
                />
                <FeatureCard 
               icon={<Target size={26} className="text-orange-600"/>}
                title="Plan Your Goals"
                description="See financial goals and achieve them"
                className="bg-orange-50"
                 bg_color="bg-orange-100"
                />
              <FeatureCard 
               icon={<TrendingUp size={26} className="text-indigo-600"/>}
                title="Build a Better Future"
                description="Make smarter financial decisions"
                className="bg-indigo-50"
                bg_color="bg-indigo-100"
                />
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
   
    </div>
  )
}

export default EmptyIncomeState