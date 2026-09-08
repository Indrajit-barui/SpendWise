import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Utensils,
  Bus,
  GraduationCap,
  ShoppingCart,
  Ticket,
  MoreHorizontal,
  Info
} from "lucide-react";

const CategoriesTable = () => {
  const categories = [
    {
      id: 1,
      name: "Food",
      description: "Meals, snacks, etc.",
      color: "Green",
      amount: "₹ 850",
      transactions: 8,
      percentage: "34.0%",
      icon: <Utensils size={22} />,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      progressColor: "bg-green-500",
    },
    {
      id: 2,
      name: "Transport",
      description: "Bus, train, travel, etc.",
      color: "Blue",
      amount: "₹ 300",
      transactions: 5,
      percentage: "12.0%",
      icon: <Bus size={22} />,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      progressColor: "bg-blue-500",
    },
    {
      id: 3,
      name: "Education",
      description: "Courses, books, fees, etc.",
      color: "Purple",
      amount: "₹ 499",
      transactions: 4,
      percentage: "19.9%",
      icon: <GraduationCap size={22} />,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      progressColor: "bg-purple-500",
    },
    {
      id: 4,
      name: "Shopping",
      description: "Clothes, accessories, etc.",
      color: "Orange",
      amount: "₹ 850",
      transactions: 6,
      percentage: "34.0%",
      icon: <ShoppingCart size={22} />,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-100",
      progressColor: "bg-orange-500",
    },
    {
      id: 5,
      name: "Entertainment",
      description: "Movies, games, etc.",
      color: "Pink",
      amount: "₹ 200",
      transactions: 3,
      percentage: "8.0%",
      icon: <Ticket size={22} />,
      iconColor: "text-pink-500",
      bgColor: "bg-pink-100",
      progressColor: "bg-pink-500",
    },
    {
      id: 6,
      name: "Others",
      description: "Miscellaneous expenses",
      color: "Gray",
      amount: "₹ 331",
      transactions: 5,
      percentage: "13.2%",
      icon: <MoreHorizontal size={22} />,
      iconColor: "text-gray-600",
      bgColor: "bg-gray-100",
      progressColor: "bg-gray-500",
    },
  ];

 return(
    <div className="w-full mt-5 rounded-lg border border-gray-200 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        {/* section Header */}
        <div className="flex flex-col justify-between gap-3 px-1 xl:flex-row  xl:items-center ">
           <div className="flex flex-col xl:flex">
            <p className="text-xl font-bold">All Categories</p>
            <p className="text-gray-600">View and manage your expense categories</p>
           </div>
           <div className="flex flex-col gap-2 xl:flex ">
             {/* search  */}
             <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Search size={18} className="text-gray-600"/>
                <input type="text" placeholder="Search categories..." 
                className="outline-none"/>
             </div>
             {/* Add category button */}
             <button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white ">
              <Plus size={18} /> Add Category
             </button>
           </div>
        </div>

        
{/* All Category section */}
<div>

  {/* Table Header */}
  <div className="hidden xl:grid grid-cols-7 px-2 items-center ">
    <div>#</div>
    <div>Icon</div>
    <div>Category Name</div>
    <div className="text-center">Total Spent</div>
    <div className="text-center">Transactions</div>
    <div>Percentage</div>
    <div className="text-center">Actions</div>
  </div>

  {/* Category Rows */}
  {categories.map((category) => (
    // Desktop version
    <div key={category.id} className="mt-2">
    <div className="hidden xl:grid grid-cols-7 mt-2 px-2 items-center border py-1.5">

      <div>{category.id}</div>

      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${category.bgColor} ${category.iconColor}`}>
        {category.icon}

      </div>

      <div className="flex flex-col">
        <p className="font-bold text-black">{category.name}</p>

        <p className="text-sm text-gray-500">{category.description}</p>
      </div>
      
      <div className="text-center">{category.amount}</div>

      <div className="text-center">{category.transactions}</div>

<div className="flex items-center gap-3">
  <span>{category.percentage}</span>

  <div className="h-2 w-32 rounded-full bg-gray-200">
    <div
      className={`${category.progressColor} h-2 rounded-full`}
      style={{ width: category.percentage }}
    ></div>
  </div>
</div>

<div className="flex items-center gap-2 justify-center">
  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 transition hover:bg-gray-100 hover:text-indigo-600 cursor-pointer"><Pencil size={17}/></button>
  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-red-500 transition hover:bg-red-50 hover:bg-red-500 hover:text-white"><Trash2 size={17}/></button>
</div>
    </div>
{/* mobile version */}
    <div className="xl:hidden border border-gray-200 py-2 px-4 rounded-xl ">
      <div className="flex justify-between">
        {/* left part */}
        <div className="flex gap-3">
      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${category.bgColor} ${category.iconColor} text-xl`}>
        {category.icon}

      </div>
      {/* name and Description */}
      <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <p className="font-bold text-black">{category.name}</p>

        <p className="text-sm text-gray-500">{category.description}</p>
      </div>
        <div className="h-2 w-32 rounded-full bg-gray-200">
    <div
      className={`${category.progressColor} h-2 rounded-full`}
      style={{ width: category.percentage }}
    ></div>
   </div> 
 
</div>
         </div>
  
       {/* right part */}

       <div className="flex flex-col items-end gap-1">
           <div className="font-bold text-black">{category.amount}</div>
           <div className="text-gray-500">{category.transactions} transactions</div>
           <div className="text-gray-500">{category.percentage}</div>
       </div>
      </div>
    </div>

    </div>

    

    
  ))}

</div>
{/* Bottom Summary */}
<div className="flex items-center justify-between gap-2  border-t border-gray-200 bg-gray-200 px-4 py-2 xl:px-5">

  {/* Info Icon */}
  <Info size={22} className="text-blue-500 shrink-0" />

  {/* Total Expenses */}
  <div className="flex flex-col items-center xl:flex-row xl:gap-2">
    <span className="text-gray-600 text-sm text-center xl:text-base">Total Expenses:</span>
    <span className="font-semibold text-lg">₹ 2,500</span>
      
  </div>

  {/* Separator */}
  <div className="h-10 xl:h-5  w-px bg-gray-300"></div>

  {/* Categories */}
  <div className="flex  flex-col xl:flex-row items-center xl:gap-2">
    <span className="font-semibold">6</span>
    <span className="text-gray-600">Categories</span>
  </div>

  {/* Separator */}
  <div className="h-10 xl:h-5 w-px bg-gray-300"></div>

  {/* Transactions */}
  <div className="flex flex-col items-center xl:flex-row xl:gap-2">
    <span className="font-semibold">25</span>
    <span className="text-gray-600">Transactions</span>
  </div>

</div>
    </div>
    
 )
};

export default CategoriesTable;