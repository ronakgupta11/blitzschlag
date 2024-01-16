import React from 'react'

function ImageCard({src}){
    return(

        <img src={""} className='w-60 h-48 rounded-xl m-4'></img>
    )
}
function Memories() {
  return (
    <div className='bg-[#310816] text-[#fcf2d9] font-amita p-4 py-8 overflow-x-hidden'>
        <div className='flex items-center w-full justify-center'>

<div className='border  w-full border-[#fcf2d9]'></div>
        <h3 className='text-4xl font-semibold text-center mx-2'>Memories</h3>
<div className='border w-full border-[#fcf2d9]'></div>
        </div>

        <div className='flex flex-wrap mt-8 items-center justify-center'>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>
            <ImageCard/>

        </div>
        
    </div>
  )
}

export default Memories