import { useState } from "react"
import { Header } from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {

  const [isSidebarOpen, setSidebar] = useState(false)

  return (
    <>
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebar={setSidebar}
      />

      {/* Main content */}
      <div className="px-1 pt-3 md:px-10 md:ml-64">
        <Header setSidebar={setSidebar} />
      </div>
    </>
  )
}

export default App