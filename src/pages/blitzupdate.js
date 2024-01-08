import React, { useEffect } from 'react'
import { Tabs } from 'flowbite-react';
import AdminEvents from '@/components/adminComponents/AdminEvents';
import AdminEventTeams from '@/components/adminComponents/AdminEventTeams';
import AdminUsers from '@/components/adminComponents/AdminUsers';
import AdminCa from '@/components/adminComponents/AdminCa';
import { useSelector } from 'react-redux';
import { selectCredentials } from '@/redux/reducers/userReducer';
function blitzupdate() {
const credentials = useSelector(selectCredentials)
  return (
    <div className=' bg-white h-full mt-10 py-12'>
  { credentials?.role ==="admin" ? <Tabs aria-label="Default tabs" style="default">
      <Tabs.Item active title="Events" >
        <AdminEvents/>
      </Tabs.Item>
      <Tabs.Item title=" Event Teams" >
<AdminEventTeams/>
      </Tabs.Item>
      <Tabs.Item title="Users" >
<AdminUsers/>
      </Tabs.Item>
      <Tabs.Item title="Campus Ambassadors" >
<AdminCa/>
      </Tabs.Item>
      
    </Tabs>:<p className='text-5xl text-black m-auto text-center h-60'>Only admin access</p>}
    </div>
    
  )
}

export default blitzupdate