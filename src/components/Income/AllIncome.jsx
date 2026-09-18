import {
  Search,
  Plus,
  BriefcaseBusiness,
  Laptop,
  GraduationCap,
  Building2,
  BookOpen,
  Video,
  Award,
  Users,
  TrendingUp,
  Percent,
  HandCoins,
  BadgeDollarSign,
  House,
  WalletCards,
  RotateCcw,
  Pencil,
  Gift,
Trash2,
CircleEllipsis,
ChevronDown,
ChevronLeft,
ChevronRight
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { useState } from 'react';

const AllIncome = ({income,setIncome}) => {
const incomeIcons = {
  "salary": BriefcaseBusiness,
  "part-time job": Laptop,
  "freelance": Laptop,
  "internship": GraduationCap,
  "business": Building2,
  "tutoring": BookOpen,
  "content creation": Video,
  "scholarship": Award,
  "parents support": Users,
  "investment": TrendingUp,
  "interest": Percent,
  "affiliate income": HandCoins,
  "gifts": Gift,
  "commission": BadgeDollarSign,
  "rental income": House,
  "cashback": WalletCards,
  "refund": RotateCcw,
  "other": CircleEllipsis,
};
const [open,setOpen]=useState(false);
const [editopen,SetEditopen]=useState(false);
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

// delete item
const handleDelete=async(id)=>{
  const response=await fetch(`http://localhost:5000/income/${id}`,{
    method:"DELETE"
  });
  const data=await response.json();
  console.log(data);
  setIncome((prevIncome) =>
  prevIncome.filter((income) => income._id !== id)
);
}

//edit item
const handleEdit = async (e) => {
  e.preventDefault();

  const response = await fetch(
    `http://localhost:5000/income/${formData._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: formData.source,
        category: formData.category,
        amount: formData.amount,
        date: formData.date,
        notes: formData.notes,
      }),
    }
  );

  const data = await response.json();

  setIncome((prevIncome) =>
    prevIncome.map((income) =>
      income._id === data._id ? data : income
    )
  );

  SetEditopen(false);
};

// icon

  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2 ">
        {/* header */}
        <div className="flex justify-between">
           <div className="flex flex-col xl:flex">
            <p className="text-xl font-bold">All Income</p>
            <p className="text-gray-600">View and manage your income entries</p>
           </div>
           <div className="flex gap-2">
             {/* search  */}
             <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Search size={18} className="text-gray-600"/>
                <input type="text" placeholder="Search income..." 
                className="outline-none"/>
             </div>

             {/* All sources button */}
             <div>

             </div>
             {/* Add category button */}
             <button
             onClick={()=>{
              setOpen(true)
              setFormData({
             source: "",
             category: "Salary",
             amount: "",
             date: "",
             notes: "",
              })
            }}

             className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white ">
              <Plus size={18} /> Add Income
             </button>
           </div>
        </div>
{/* table header */}

<div className='grid grid-cols-7 py-3 bg-gray-400 border mt-3 rounded-sm px-3'>
  <div>#</div>
  <div>Source</div>
  <div className='text-center'>Category</div>
  <div>Amount</div>
  <div>Date</div>
  <div>Notes</div>
  <div className='text-center'>Actions</div>
</div>

        <div>
          {income.slice(0,5).map((item,index)=>{
          const Icon=incomeIcons[item.category.toLowerCase()];
           return( <div key={item._id}>
                {/* desktop */}
                
                <div className='grid grid-cols-7 py-3 border rounded-sm px-3'>
                  <div className='text-gray-500 font-medium'>
                    {index+1}
                  </div>
                  <div className='flex items-center gap-3'>
                      <div className='flex h-9 w-9 items-center justify-center rounded-full bg-green-100'>
                       <Icon size={18} />
                      </div>
                    {item.source}
                  </div>

                  <div className='text-center'>
                    {item.category}
                  </div>

                  <div className='text-green-600 font-medium'>
                    {item.amount}
                  </div>

                  <div className='text-sm text-gray-500'>
                    {new Date(item.date).toLocaleDateString("en-IN", {
                       day: "2-digit",
                       month: "short",
                        year: "numeric",
                    })}
                  </div>

                  <div className='text-sm text-gray-500'>
                    {item.notes || "No notes"}
                  </div>
<div className="flex items-center gap-2 justify-center">
  <button
   onClick={()=>{
    SetEditopen(true)
    setFormData({
      ...item,
      date:item.date.slice(0,10)
    })

  
   }}
  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition hover:bg-gray-100 hover:text-indigo-600 cursor-pointer"><Pencil size={17}/></button>

  <button 
   onClick={()=>handleDelete(item._id)}
  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-red-500 transition hover:bg-red-50 hover:bg-red-500 hover:text-white"><Trash2 size={17}/></button>
</div>                  
                </div>
            </div>
)})}
        </div>

<div className="flex flex-col gap-4 border-t px-2 py-4 sm:flex-row sm:items-center sm:justify-between">

  {/* Showing entries */}
  <p className="text-sm text-gray-500">
    Showing <span className="font-medium text-gray-700">1–5</span> of{" "}
    <span className="font-medium text-gray-700">23</span> entries
  </p>

  {/* Pagination */}
  <div className="flex items-center gap-2">

    {/* Previous */}
    <button
      className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500"
    >
      <ChevronLeft size={16} />
      <span className="hidden sm:block">Previous</span>
    </button>

    {/* Pages */}
    <button className="h-9 w-9 rounded-lg bg-blue-600 text-sm text-white">
      1
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      2
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      3
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      4
    </button>

    <button className="h-9 w-9 rounded-lg border border-gray-200 text-sm">
      5
    </button>

    {/* Next */}
    <button
      className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm"
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRight size={16} />
    </button>

  </div>

  {/* Per page */}
  <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm">
    5 per page
    <ChevronDown size={16} />
  </button>

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
<Dialog open={editopen} onOpenChange={SetEditopen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Income</DialogTitle>
      <DialogDescription>
        Update our income Details
      </DialogDescription>
    </DialogHeader>

<form onSubmit={handleEdit}>
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
    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>

<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
<div className="space-y-2">
  <label className="text-sm font-medium">
    Category <span className="text-red-500">*</span>
  </label>

  <select className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
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
      className="w-full rounded-r-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
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
    className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
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
    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
  />
  
  <p className="text-right text-xs text-gray-400">
    {formData.notes.length}/200
  </p>
</div>
<div className="flex justify-end gap-3 border-t pt-5">

  <button
    type="button"
    onClick={() => SetEditopen(false)}
    className="rounded-lg border border-gray-200 px-6 py-3 font-medium hover:bg-gray-100"
  >
    Cancel
  </button>

  <button
    type="submit"
    className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
  >
    <Pencil size={18} />
    Update Income
  </button>

</div>
</form>


  </DialogContent>
</Dialog>
    </div>
  )
}

export default AllIncome