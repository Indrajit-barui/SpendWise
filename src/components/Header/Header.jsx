import { Datepicker } from "../Datepicker"
import { Bell } from "lucide-react"


export const Header = ({setSidebar}) => {
 
  return (
    <header className="flex items-center justify-between p-4">
      
    
        {/* left section */}
        <div className="flex items-center gap-4">
           <i className="fa-solid fa-bars text-xl  cursor-pointer" onClick={()=>setSidebar(true)}></i>
           <p className="text-xl md:text-2xl">Dashboard</p>
        </div>

        {/* right section */}

        <div className="flex items-center gap-2 ">
        
         <Datepicker/>
         <Bell/>
      
        </div>
        
        </header>
  )
}
