import React from 'react'
import gate from "../../../public/assets/home/page1/gate.png"
import Image from 'next/image'
function Page1() {
  return (
    <div>

    <div className=' w-full relative flex items-center overflow-hidden'>
    <Image className='w-full' src = {gate}/>
    </div>
    </div>
  )
}
export default Page1

