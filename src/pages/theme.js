import React from 'react'
import bg from "../../public/assets/theme/bg.svg"
import Image from 'next/image'
import blue from "../../public/assets/theme/blue.png"
import yelo from "../../public/assets/theme/yelo.png"
import red from "../../public/assets/theme/red.png"
import orange from "../../public/assets/theme/orange.png"
function theme2() {
  return (
    <div>
<div className='w-full relative bg-[#FCF2D9]'>
<Image  src={bg}/>

</div>
<div className='flex absolute font-sankaran text-center bg-clip-text top-[7%] md:top-[10%] bg-[#360805]  flex-col items-center justify-center space-y-2 w-full'>

        <p className='text-md md:text-2xl text-transparent' >
            theme
        </p>
        <p className='text-2xl md:text-5xl text-transparent'>
            Padharo Mhare Fest
        </p>
</div>

<div className='bg-[#4a0e0a] w-full px-10 py-20 flex flex-wrap items-center justify-center m-auto'>

<div className='w-[220px] text-justify h-[220px] text-black flex flex-col space-y-4 items-center justify-around p-4 bg-[#FCF2D9] rounded-xl shadow-md m-4'>
    <div className='flex space-x-4 items-center justify-center font-semibold'>
        <Image src={yelo} >

        </Image>
        <p className='font-amita text-xl'>Strength</p>
    </div>
    <p className='text-md w-[70%]'>
    As oasis in the midst of sand and encompassed with eolian sounds shining as bright as gold
        
         </p>
    
</div>
<div className='w-[220px] text-justify h-[220px] text-black flex flex-col space-y-4 items-center justify-around p-4 bg-[#FCF2D9] rounded-xl shadow-md m-4'>
    <div className='flex space-x-4 items-center justify-center font-semibold'>
        <Image src={orange} >

        </Image>
        <p className='font-amita text-xl'>Love</p>
    </div>
    <p className='text-md w-[70%]'>
    Perfect blend of red's passion and white's purity, pink symbolizing love, nurture and compassion
        
         </p>
    
</div>
<div className='w-[220px] text-justify h-[220px] text-black flex flex-col space-y-4 items-center justify-around p-4 bg-[#FCF2D9] rounded-xl shadow-md m-4'>
    <div className='flex space-x-4 items-center justify-center font-semibold'>
        <Image src={blue} >

        </Image>
        <p className='font-amita text-xl'>Freedom</p>
    </div>
    <p className='text-md w-[70%]'>
    As unbounded as the sky, it has eternal beauty spread across every horizon of the city
    </p>
    
</div>
<div className='w-[220px] text-justify h-[220px] text-black flex flex-col space-y-4 items-center justify-around p-4 bg-[#FCF2D9] rounded-xl shadow-md m-4'>
    <div className='flex space-x-4 items-center justify-center font-semibold'>
        <Image src={red} >

        </Image>
        <p className='font-amita text-xl'>Divinity</p>
    </div>
    <p className='text-md w-[70%]'>
    Painted with divine color of white representing certainty and illumination
        
         </p>
    
</div>
</div>


</div>
  )
}

export default theme2