import Sidebar from './Sidebar'
import React from 'react'


function Layout({children}) {
  return (
    <div className='layout overflow-hidden'>
<div className='sidebar fixed z-[9999999] mt-16'>

        <Sidebar/>
</div>
<div className='content flex-1 overflow-y-auto relative w-full '>


        {children}
</div>
    </div>
  )
}

export default Layout