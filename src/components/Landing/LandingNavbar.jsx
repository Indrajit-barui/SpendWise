import { Wallet ,Menu,XIcon} from "lucide-react"
import { useState,useRef,useEffect } from "react"
import { Link } from "react-router-dom"
const LandingNavbar = () => {
const[click,setClick]=useState(false);
const menuRef=useRef(null);
useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setClick(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <div className="h-15 w-full px-3 md:px-10 py-2 border flex items-center justify-between   fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/30">
<div className="flex gap-10 items-center">
        <div className="flex gap-2 items-center">
               <div className="text-purple-700">
                <Wallet size={28}/>
               </div>
               <div>
                <p className="text-xl font-bold">SpendWise</p>
               </div>
        </div>
<div className="hidden md:flex items-center gap-4">
<div className="flex gap-5 text-gray-600">
  <a href="#features">Features</a>
  <a href="#how-it-works">How it Works</a>
</div>
</div>

</div>



        <div className="hidden md:flex gap-2">
            <button className="px-4 border py-1.5 rounded-xl hover:bg-gray-200 cursor-pointer">
              <Link to="/Login">
                Login
              </Link>
            </button>
            <button className="px-4 border py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 cursor-pointer">
              <Link to="/Signup">
              Get Started
              
              </Link>
              </button>
        </div>

        {/* mobile */}
        <div className="md:hidden">
          <div onClick={()=>setClick(!click)}>
              {
                click?<XIcon/>:<Menu/>
              }
          </div>

{click && (
  <div 
  ref={menuRef}
  className="
    absolute top-full left-0 w-full
    bg-white/95 backdrop-blur-lg
    border-b border-gray-200
    shadow-lg
    px-6 py-5
  ">
    
    <div className="flex flex-col gap-2">

      <a
        href="#features"
        className="px-4 py-3 rounded-lg
                   text-gray-700 font-medium
                   hover:bg-purple-50 hover:text-purple-700
                   transition"
      >
        Features
      </a>

      <a
        href="#how-it-works"
        className="px-4 py-3 rounded-lg
                   text-gray-700 font-medium
                   hover:bg-purple-50 hover:text-purple-700
                   transition"
      >
        How it Works
      </a>

      <div className="h-px bg-gray-200 my-2"></div>

      <Link
        to="/Login"
        className="px-4 py-3 rounded-lg
                   text-gray-700 font-medium
                
                   transition text-center
                   bg-purple-200 text-purple-700
                   hover:bg-purple-300
                   "
      >
        Login
      </Link>

      <Link
        to="/Signup"
        className="px-4 py-3 rounded-lg
                   bg-blue-600 text-white
                   text-center font-medium
                   hover:bg-blue-700
                   transition"
      >
        Get Started
      </Link>

    </div>
  </div>
)}

        </div>
    </div>
  )
}

export default LandingNavbar