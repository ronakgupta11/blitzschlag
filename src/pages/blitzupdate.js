import React from 'react'
import { Tabs } from 'flowbite-react';
import AdminEvents from '@/components/adminComponents/AdminEvents';
import AdminEventTeams from '@/components/adminComponents/AdminEventTeams';
import AdminUsers from '@/components/adminComponents/AdminUsers';
import AdminCa from '@/components/adminComponents/AdminCa';
function blitzupdate() {
  return (
    <div className=' bg-white h-full mt-10 py-12'>
    <Tabs aria-label="Default tabs" style="default">
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
      
    </Tabs>
    </div>
    
  )
}

export default blitzupdate