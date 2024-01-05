import React from 'react'
import Image from 'next/image'
import gate from "../../../../public/assets/home/page1/gate.png"
function Archway() {
    return (
        <div className=' w-screen absolute flex items-center overflow-hidden'>
            <Image className='w-screen' src={gate} />
        </div>
    )
}
export default Archway

