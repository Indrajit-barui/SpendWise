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
        <div className="flex justify-between items-center px-3">
           <div className="">
            <p className="text-xl font-bold">All Categories</p>
            <p className="text-gray-600">View and manage your expense categories</p>
           </div>
           <div className="flex gap-3">
             {/* search  */}
             <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                <Search size={18} className="text-gray-600"/>
                <input type="text" placeholder="Search categories..." 
                className="outline-none"/>
             </div>
             {/* Add category button */}
             <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white">
              <Plus size={18} /> Add Category
             </button>
           </div>
        </div>

        {/* All Category section */}
        <div>
            
        </div>
    </div>
 )
};

export default CategoriesTable;