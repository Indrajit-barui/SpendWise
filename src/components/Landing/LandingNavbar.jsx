import { Wallet } from "lucide-react"
import { Link } from "react-router-dom"
const LandingNavbar = () => {
  return (
    <div className="h-15 w-full px-10 py-2 border flex items-center justify-between">
<div className="flex gap-10 items-center">
        <div className="flex gap-2 items-center">
               <div className="text-purple-700">
                <Wallet size={28}/>
               </div>
               <div>
                <p className="text-xl font-bold">SpendWise</p>
               </div>
        </div>

<div className="flex gap-5 text-gray-600">
  <a href="#features">Features</a>
  <a href="#how-it-works">How it Works</a>
</div>
</div>



        <div className="flex gap-2">
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
    </div>
  )
}

export default LandingNavbar