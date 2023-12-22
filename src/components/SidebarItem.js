import React, { useState } from 'react'

function SidebarItem({expanded,icon,text}) {
    const [active,setActive] = useState(false)
  return (
    <li
     onClick={()=>setActive((cur)=>!cur)}
    className={`
      relative flex items-center py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group 
      ${
        active
          ? "bg-white text-black"
          : "hover:bg-white hover:text-black"
      }
  `}
  >
    {icon}
    <span
      className={`overflow-hidden transition-all ${
        expanded ? " ml-8" : "w-0"
      }`}
    >
      {text}
    </span>
{/* 
    {!expanded && (
      <div
        className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
    `}
      >
        {text}
      </div>
    )} */}
  </li>
  )
}

export default SidebarItem