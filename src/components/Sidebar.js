import React, { useState } from 'react'
import SidebarItem from './SidebarItem'
import {FaHome} from "react-icons/fa"

function Sidebar() {
    const [expanded,setExpanded] = useState( true)
  return (
    // <aside className={`h-screen ${ expanded ? "w-64" : "w-20"} `}>
    <nav className={`flex flex-col  sm:rounded-lg shadow-sm  ${ expanded ? "w-64 border " : "w-16 border-r border-white "} lg:m-8 h-screen md:h-[400px] relative backdrop-blur text-white  font-black-ops-one text-sm `}>
      {/* <div className="flex justify-center  items-center">
        <img
          src="https://img.logoipsum.com/243.svg"
          className={`overflow-hidden transition-all ${
            expanded ? "" : "w-0"
          }`}
          alt=""
        />
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expanded ? <FaHome /> : <FaHome />}
        </button>
      </div> */}

      {/* <SidebarContext.Provider value={{ expanded }}> */}
  <div className='fixed h-full w-full bg-gradient-to-b from-[#070707] opacity-70 to-transparent rounded-lg z-10'></div>
<div className='relative z-10'>

        <ul className="flex-1 px-3">
<div className='my-8' onClick = {() => setExpanded((curr) => !curr)}>

            <SidebarItem  icon={<FaHome size={20}/>} text={"Blitzschlag"} expanded={expanded}/>
</div>
            {/* <hr/> */}
            {/* <div className='my-8'></div> */}
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>
            <div className='my-8'></div>
            <SidebarItem  icon={<FaHome size={16}/>} text={"Home"} expanded={expanded}/>



        </ul>
      {/* </SidebarContext.Provider> */}
      </div>

    </nav>
//   </aside>
  )
}

export default Sidebar