import SignupForm from '@/components/signupForm'
import React,{useEffect} from 'react'
import { selectAuthenticated } from '@/redux/reducers/userReducer'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import img from "../../public/assets/login/image.jpg"

function register() {
  const router = useRouter()
  // const imgArr = [img0, img1, img2, img3, img4];
// const num = Math.floor(Math.random() * 5) % 5

const auth = useSelector(selectAuthenticated)
  useEffect(()=>{


    if(auth){
      router.push("/profile")
    }

  },[auth])
  return (
    <div className=' relative h-screen pl-12 '>
    <div
        className='fixed top-0 left-0 w-full h-screen  bg-fixed bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${img.src})` }}
      ></div>
    
      <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-10'></div>
    <div className='relative overfolw-hidden  z-10  py-12 flex flex-col lg:flex-row items-center justify-around space-y-4 w-[80%] m-auto'>
<div className='font-sankaran text-white text-4xl md:text-7xl items-center lg:h-screen '>
BLITZSCHLAG
</div>
<div className=' bg-black opacity-80 backdrop-blur-md  lg:w-[350px] rounded-lg p-8'>
  
  <p className='text-white text-xl font-amita my-4'> SIGN UP</p>
  <SignupForm/>
</div>
    </div>
    </div>
  )
}

export default register