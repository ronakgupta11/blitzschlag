import Sidebar from './Sidebar'
import React from 'react'


function Layout({children}) {
  return (
    <div className='layout '>
<div className='sidebar fixed z-[9999999]  '>

        <Sidebar/>
</div>
<div className='content flex-1 relative w-full '>


        {children}
</div>
    </div>
  )
}

export default Layout