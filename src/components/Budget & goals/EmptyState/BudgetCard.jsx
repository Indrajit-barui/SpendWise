
import CategoryLimit from "./CategoryLimit";
import { Check, Wallet ,Plus, X,
   Utensils,
  Bus,
  GraduationCap,
  ShoppingCart,
  Gamepad2,
  MoreHorizontal,
  Tag} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"

import { useState ,useEffect} from "react";

import { useContext } from "react";
import {Budget_goalsContext} from './BudgetEmptyState'
const BudgetCard = () => {
const {open,setOpen}=useContext(Budget_goalsContext);
const [budget, setBudget] = useState(null);
const [viewAllopen,setViewAlLopen]=useState(false);
const [monthlyBudget, setMonthlyBudget] = useState("");
const [customCategory,setCustomCategory]=useState("");
const [categoryLimits, setCategoryLimits] = useState([
  { name: "Food", amount: 0 },
  { name: "Transport", amount: 0 },
  { name: "Education", amount: 0 },
  { name: "Shopping", amount: 0 },
  { name: "Entertainment", amount: 0 },
  { name: "Others", amount: 0 },
]);
const handleCategoryChange = (name, value) => {
  setCategoryLimits((prev) =>
    prev.map((category) =>
      category.name === name
        ? { ...category, amount: value }
        : category
    )
  );
};
const defaultCategoryNames = [
  "Food",
  "Transport",
  "Education",
  "Shopping",
  "Entertainment",
  "Others",
];
const customCategories = categoryLimits.filter(
  (category) => !defaultCategoryNames.includes(category.name)
);
const visibleCustomCategories = customCategories.slice(0, 3);
const remainingCustomCategories = Math.max(
  customCategories.length - 3,
  0
);
const categoryIcons = {
  Food: Utensils,
  Transport: Bus,
  Education: GraduationCap,
  Shopping: ShoppingCart,
  Entertainment: Gamepad2,
  Others: MoreHorizontal,
};

const handleBudgetSubmit = async (e) => {
  e.preventDefault();

  const hasCategoryAmount = categoryLimits.some(
    (category) => Number(category.amount) > 0
  );

  if (!hasCategoryAmount) {
    alert("Please enter an amount for at least one category.");
    return;
  }

  const budgetData = {
    monthlyBudget: Number(monthlyBudget),
    categoryLimits: categoryLimits.map((category) => ({
      name: category.name,
      amount: Number(category.amount),
    })),
  };

const response = await fetch(
  budget
    ? `http://localhost:5000/budgets/${budget._id}`
    : "http://localhost:5000/budgets",
  {
    method: budget ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetData),
  }
);
const data = await response.json();

if (response.ok) {
  setBudget(data);
  setOpen(false);
}
};
const handleAddCustomCategory = () => {
  if (!customCategory.trim()) {
    return;
  }

  setCategoryLimits((prev) => [
    ...prev,
    {
      name: customCategory.trim(),
      amount: 0,
    },
  ]);

  setCustomCategory("");
};

const handleDeleteCustomCategory = (name) => {
  setCategoryLimits((prev) =>
    prev.filter((category) => category.name !== name)
  );
};

useEffect(() => {
  fetch("http://localhost:5000/budgets")
    .then((response) => response.json())
    .then((data) => {
      if (data[0]) {
        setBudget(data[0]);
        setMonthlyBudget(data[0].monthlyBudget);
        setCategoryLimits(data[0].categoryLimits);
      }
    });
}, []);



  return (
    <div className="flex-1 rounded-lg border border-green-100 bg-green-50/50 p-3 xl:p-6">

      {/* Icon + Heading */}
      <div className="flex items-center gap-4">
        <div className="hidden flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Wallet className="text-green-600" size={30} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Create a Budget
          </h2>

          <p className="mt-1 text-gray-600">
            Set monthly spending limits for different categories
            <br className="hidden xl:block"/>
            and stay in control of your expenses.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-5 space-y-3">

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-green-500 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Set limits for categories (Food, Transport, etc.)
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-green-500 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Track your spending against your budget
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Check
            size={18}
            className="rounded-full bg-green-500 p-0.5 text-white"
          />
          <p className="text-gray-600">
            Get alerts when you're close to the limit
          </p>
        </div>

      </div>

      {/* Button */}
      <div
       onClick={()=>setOpen(true)}
      className="mt-6 flex justify-center">
        <button className="flex w-full xl:w-auto items-center justify-center gap-2 rounded-lg bg-green-500 px-8 py-3 font-semibold text-white hover:bg-green-600">
          <span className="text-xl"><Plus/></span>
          {budget ?"Edit Budget":"Create Budget"}
        </button>
      </div>

   
   <Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="flex flex-col max-h-[90vh] w-[calc(100%-2rem)] sm:max-w-xl">
<DialogHeader>
  <div className="flex items-center gap-3">
    
    {/* Icon */}
    <div className="h-12 w-12 shrink-0 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center">
      <Wallet size={24} />
    </div>

    {/* Title + subtitle */}
    <div>
      <DialogTitle className="text-xl font-bold text-gray-900">
               {budget?"Edit Your Budget":"Create Your Budget"}
      </DialogTitle>

      <DialogDescription className="mt-1">
        Set your monthly spending limits and take control of your finances.
      </DialogDescription>
    </div>
   

  </div>
</DialogHeader>
<form  onSubmit={handleBudgetSubmit} className="flex min-h-0 flex-1 flex-col">
{/* monthly budget */}
<div className="flex-1 min-h-0 overflow-y-auto pr-2">
  <p className="text-xl font-bold">Monthly Budget <span className="text-red-500"> * </span></p>
  <p className="text-sm text-gray-500">Enter your total monthly budget (the amount you plan to spend).</p>

<div className="mt-3 flex h-14 w-full overflow-hidden rounded-lg border border-gray-300 focus-within:border-purple-500">
    
    <div className="flex w-14 items-center justify-center bg-gray-50 text-lg font-medium text-gray-700">
      ₹
    </div>

    <input
      type="number"
      required
      value={monthlyBudget}
      onChange={(e)=>setMonthlyBudget(e.target.value)}
      placeholder="Enter amount"
      className="w-full px-4 text-lg outline-none"
    />

  </div>

{/* Category limit */}
<div>
  <p className="font-bold">Category Limits <span className="text-red-500"> * </span></p>

  <p className="text-sm text-gray-500">
    Set a limit for each category. You can always update this later.
  </p>
</div>

<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
  {categoryLimits
    .filter((category) => defaultCategoryNames.includes(category.name))
    .map((category) => {
      const Icon = categoryIcons[category.name] || Tag;

      return (
        <CategoryLimit
          key={category.name}
          name={category.name}
          amount={category.amount}
          icon={<Icon />}
          onChange={(e) =>
            handleCategoryChange(category.name, e.target.value)
          }
        />
      );
    })}

    {visibleCustomCategories.length > 0 && (
  <div className="mt-4">
    <p className="mb-2 font-semibold">Custom Categories</p>

    <div className="space-y-3">
      {visibleCustomCategories.map((category) => (
        <CategoryLimit
          key={category.name}
          name={category.name}
          amount={category.amount}
          icon={<Tag />}
          onChange={(e) =>
            handleCategoryChange(category.name, e.target.value)
          }
        />
      ))}
    </div>
  </div>
)}

</div>
{remainingCustomCategories > 0 && (
  <button
  onClick={()=>setViewAlLopen(true)}
    type="button"
    className="mt-3 flex w-full items-center justify-between rounded-lg border border-dashed border-purple-300 bg-purple-50/50 px-4 py-3 text-purple-600 hover:bg-purple-50"
  >
    <span>+ {remainingCustomCategories} more categories</span>
    <span>View all →</span>
  </button>
)}
{/* custom category */}
<div className="w-full mt-4 flex items-end gap-3">
  <div className="flex-1">
    <p className="font-semibold">Add Custom Category</p>
      <input type="text" 
   value={customCategory}
   onChange={(e)=>setCustomCategory(e.target.value)}  
   placeholder="Enter custom category"
   className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-purple-500 mt-2"
  />


  </div>

      <button 
  onClick={handleAddCustomCategory}
  type="button"
  className=" shrink-0 rounded-lg border border-purple-400 bg-purple-50/30 px-6 py-3 text-purple-600 hover:bg-purple-50">
    <p className="font-semibold">+ Add </p>

  </button>


</div>

</div>
<div className="flex justify-between px-5 mt-5">
  <button type="button" onClick={()=>setOpen(false)} className="px-4 py-2 border border-blue-100 rounded-xl">Cancel</button>
  <button type="submit" className="px-5 py-2 border bg-blue-700 text-white rounded-xl">{budget?"Save Changes":"Create Budget"}</button>
</div>
</form>
  </DialogContent>
</Dialog>

{/* view all */}
<Dialog open={viewAllopen} onOpenChange={setViewAlLopen}>
  <DialogContent className="max-h-[90vh] sm:max-w-lg">

    <DialogHeader>
      <DialogTitle>All Custom Categories</DialogTitle>

      <DialogDescription>
        View and edit all your custom category limits.
      </DialogDescription>
    </DialogHeader>

    <div className="max-h-[60vh] space-y-3 overflow-y-auto pr-2">
{customCategories.map((category) => (
  <div
    key={category.name}
    className="flex items-center gap-2"
  >
    <div className="flex-1">
      <CategoryLimit
        name={category.name}
        amount={category.amount}
        icon={<Tag />}
        onChange={(e) =>
          handleCategoryChange(category.name, e.target.value)
        }
      />
    </div>

    <button
      type="button"
      onClick={() => handleDeleteCustomCategory(category.name)}
      className="rounded-md p-2 text-gray-500 hover:bg-red-50 hover:text-red-500"
    >
      <X size={18} />
    </button>
  </div>
))}
    </div>

  </DialogContent>
</Dialog>
    </div>
  );
};

export default BudgetCard;