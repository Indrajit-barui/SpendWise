import { Datepicker } from "../Datepicker"
import { Bell } from "lucide-react"
import { useLocation } from "react-router-dom"


const  Header = ({setSidebar}) => {
const location=useLocation();
  return (
    <header className="flex items-center justify-between p-4">
      
    
        {/* left section */}
        <div className="flex items-center gap-4">
           <i className="fa-solid fa-bars text-xl  cursor-pointer" onClick={()=>setSidebar(true)}></i>
           <p className="text-xl md:text-2xl">{location.pathname.slice(1)}</p>
        </div>

        {/* right section */}

        <div className="flex items-center gap-2 ">
        
         <Datepicker/>
         <Bell/>
      
        </div>
        
        </header>
  )
}


export default Header;