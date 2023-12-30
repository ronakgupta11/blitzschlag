import React from 'react'
import SponsorHeader from '@/components/sponsorComponents/SponsorHeader'
import SponsorList from '@/components/sponsorComponents/SponsorList'

function sponsors() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
<SponsorHeader/>
<SponsorList/>
    </div>
    
  )
}

export default sponsors