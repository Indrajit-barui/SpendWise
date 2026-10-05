import {
  Search,
  Plus,
  GraduationCap,
  Ticket,
  ShoppingCart,
  Bus,
  Utensils,
  FileText,
  Calendar,
  Trash2,
  Pencil,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChartNoAxesColumnIncreasing,
  Receipt,
  CreditCard,
  HeartPulse,
  IndianRupee,
  User,
  House,
  Plane,
  Gift,
  Wallet,
  CircleEllipsis
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { useState,useEffect, useContext } from 'react';
import { Context } from "@/Context/Context";

const AllExpenses = () => {
const {expenses,setExpenses}=useContext(Context)
const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const [editeopen,SetEditopen]=useState(false);
// icon
const expenseIcons = {
  food: Utensils,
  groceries: ShoppingCart,
  transport: Bus,
  education: GraduationCap,
  shopping: ShoppingCart,
  entertainment: Ticket,
  "bills & utilities": Receipt,
  subscriptions: CreditCard,
  health: HeartPulse,
  "personal care": User,
  housing: House,
  travel: Plane,
  gifts: Gift,
  "debt & payments": Wallet,
  other: CircleEllipsis,
};

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

// delete item
const handleDelete=async(id)=>{
const response = await fetch(`http://localhost:5000/expenses/${id}`, {
  method: "DELETE",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
  const data=await response.json();
  console.log(data);
  setExpenses((prevExpenses) =>
  prevExpenses.filter((expense) => expense._id !== id)
);
}
const handleEdit = async (e) => {
  e.preventDefault();

  const response = await fetch(
    `http://localhost:5000/expenses/${formData._id}`,
    {
      method: "PUT",
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
      body: JSON.stringify({
        source: formData.title,
        category: formData.category,
        amount: formData.amount,
        date: formData.date,
        notes: formData.notes,
      }),
    }
  );

  const data = await response.json();

  setExpenses((prevExpense) =>
    prevExpense.map((expense) =>
      expense._id === data._id ? data : expense
    )
  );

  SetEditopen(false);
};
//total expenses
const total_expenses=expenses.reduce((total,expense)=>{
    return total+expense.amount
},0)

//total transaction
const total_Transaction=expenses.length;

const filteredExpenses = expenses.filter((item) => {
return (item.title || "").toLowerCase().includes(search.trim().toLowerCase());});
const itemsPerPage = 5;
const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);

const pageNumbers = [];

for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(i);
}

const startIndex = (currentPage - 1) * itemsPerPage;
const startEntry = filteredExpenses.length === 0 ? 0 : startIndex + 1;
const endEntry = Math.min(
  startIndex + itemsPerPage,
  filteredExpenses.length
);
useEffect(() => {
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(1);
  }
}, [currentPage, totalPages]);
const currentExpenses = filteredExpenses.slice(
  startIndex,
  startIndex + itemsPerPage
);
  return (
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] py-4 px-2 ">
        {/* header */}
<div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">

  {/* Title */}
  <div className="min-w-0">
    <p className="text-xl font-bold">
      All Expenses
    </p>

    <p className="text-sm text-gray-600">
      View and manage your expenses entries
    </p>
  </div>

  {/* Actions */}
  <div className="flex w-full flex-col gap-2 sm:flex-row xl:w-auto">

    {/* Search */}
    <div className="flex w-full items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 xl:w-[280px]">
      
      <Search
        size={18}
        className="shrink-0 text-gray-600"
      />

      <input
        type="text"
        placeholder="Search income..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="min-w-0 w-full outline-none"
      />

    </div>

    {/* Add Income */}
    <button
      onClick={() => {
        setOpen(true);
        setFormData({
          source: "",
          category: "Salary",
          amount: "",
          date: "",
          notes: "",
        });
      }}
      className="flex shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white"
    >
      <Plus size={18} />
      Add Expenses
    </button>

  </div>

</div>
{/* table header */}

<div className='hidden md:grid grid-cols-7 py-3 bg-gray-400 border mt-3 rounded-sm px-3'>
  <div>#</div>
  <div>Source</div>
  <div className='text-center'>Category</div>
  <div>Amount</div>
  <div>Date</div>
  <div>Notes</div>
  <div className='text-center'>Actions</div>
</div>

        <div>
          {currentExpenses.map((item,index)=>{
            const Icon = expenseIcons[item.category?.toLowerCase()] || CircleEllipsis;
           return( <div key={item._id}>
                {/* desktop */}
                
                <div className='hidden md:grid grid-cols-7 py-3 border rounded-sm px-3 items-center'>
                  <div className='text-gray-500 font-medium'>
                    {index+1}
                  </div>
                  <div className='flex items-center gap-3'>
                      <div className='flex h-9 w-9 items-center justify-center rounded-full bg-red-100'>
                       <Icon size={18} />
                      </div>
                    {item.title}
                  </div>

                  <div className='text-center'>
                    {item.category}
                  </div>

                  <div className='text-red-600 font-medium'>
                   
                    -{item.amount}
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
<div 
onClick={()=>{
  SetEditopen(true)
      setFormData({
      ...item,
      date:item.date.slice(0,10)
    })
}}
className="flex items-center gap-2 justify-center">
  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition hover:bg-gray-100 hover:text-indigo-600 cursor-pointer"><Pencil size={17}/></button>
  <button 
   onClick={()=>handleDelete(item._id)}
  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-red-500 transition hover:bg-red-50 hover:bg-red-500 hover:text-white"><Trash2 size={17}/></button>
</div>                  
                </div>
                {/* mobile */}

<div className="md:hidden mt-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

  {/* Top section */}
  <div className="flex items-center justify-between gap-3">

    <div className="flex min-w-0 items-center gap-3">

      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
        <Icon size={24} />
      </div>

      {/* Source + Category */}
      <div className="min-w-0">

        <div className="truncate font-semibold text-gray-900">
          {item.title}
        </div>

        <span className="mt-1 inline-block rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700">
          {item.category}
        </span>

      </div>

    </div>

    {/* More button */}
    <button className="shrink-0 rounded-lg p-2 text-gray-400 hover:bg-gray-100">
      ⋮
    </button>

  </div>


  {/* Amount */}
  <div className="mt-4 flex items-center gap-1 text-xl font-bold text-red-600">
    <IndianRupee size={19} />
    <span>
      {Number(item.amount).toLocaleString("en-IN")}
    </span>
  </div>


  {/* Date + Notes */}
  <div className="mt-3 space-y-2">

    {/* Date */}
    <div className="flex items-center gap-2 text-sm text-gray-500">

      <Calendar
        size={17}
        className="shrink-0"
      />

      <span>
        {new Date(item.date).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </span>

    </div>


    {/* Notes */}
    <div className="flex min-w-0 items-center gap-2 text-sm text-gray-500">

      <FileText
        size={17}
        className="shrink-0"
      />

      <span className="truncate">
        {item.notes || "No notes"}
      </span>

    </div>

  </div>


  {/* Divider */}
  <div className="my-4 border-t border-gray-100" />


  {/* Actions */}
  <div className="flex gap-2">

    <button
      onClick={() => {
        SetEditopen(true);

        setFormData({
          ...item,
          date: item.date.slice(0, 10),
        });
      }}
      className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-indigo-600"
    >
      <Pencil size={16} />
      Edit
    </button>


    <button
      onClick={() => handleDelete(item._id)}
      className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
    >
      <Trash2 size={16} />
      Delete
    </button>

  </div>

</div>
            </div>
)})}
        </div>

<div className="mt-2 flex w-full items-center rounded-lg bg-red-100 px-4 py-3 md:h-10 md:py-0">

  <div className="flex w-full flex-col gap-2 text-sm font-medium text-red-800 md:flex-row md:items-center md:justify-center md:gap-4">

    {/* Total Expenses */}
    <div className="flex items-center gap-2">
      <ChartNoAxesColumnIncreasing size={20} className="shrink-0" />

      <p>
        Total Expenses: ₹ {total_expenses}
      </p>
    </div>

    {/* Separator */}
    <div className="hidden h-5 w-px bg-red-300 md:block"></div>

    {/* Transactions */}
    <p className="pl-7 md:pl-0">
      {total_Transaction} Transactions
    </p>

  </div>

</div>
<div className="flex flex-col gap-4 border-t px-2 py-4 sm:flex-row sm:items-center sm:justify-between">

  {/* Showing entries */}
  {/* Showing entries */}
<p className="text-sm text-gray-500 text-center">
  Showing{" "}
  <span className="font-medium text-gray-700">
    {startEntry}–{endEntry}
  </span>{" "}
  of{" "}
  <span className="font-medium text-gray-700">
    {filteredExpenses.length}
  </span>{" "}
  entries
</p>

  {/* Pagination */}
  <div className="flex items-center gap-2 justify-center">

    {/* Previous */}
    <button
    onClick={()=>setCurrentPage(currentPage-1)}
    disabled={currentPage===1}
      className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-500"
    >
      <ChevronLeft size={16} />
      <span className="hidden sm:block">Previous</span>
    </button>

    {/* Pages */}

{pageNumbers.map((page) => (
  <button
    key={page}
    onClick={() => setCurrentPage(page)}
    className={
      currentPage === page
        ? "h-9 w-9 rounded-lg bg-blue-600 text-sm text-white"
        : "h-9 w-9 rounded-lg border border-gray-200 text-sm"
    }
  >
    {page}
  </button>
))}

    {/* Next */}
    <button
     onClick={()=>setCurrentPage(currentPage+1)}
     disabled={currentPage===totalPages}
      className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm"
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRight size={16} />
    </button>

  </div>

  {/* Per page */}
  <button className="flex items-center  justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm">
    5 per page
    <ChevronDown size={16} />
  </button>

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
<Dialog open={editeopen} onOpenChange={SetEditopen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Expense</DialogTitle>
      <DialogDescription>
        Update your expense details
      </DialogDescription>
    </DialogHeader>

<form onSubmit={handleEdit}>
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
    Update Expense
  </button>

</div>
</form>




  </DialogContent>
</Dialog>
    </div>
  )
}

export default AllExpenses

