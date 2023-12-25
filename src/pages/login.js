import React, { useEffect } from 'react'
import LoginForm from '@/components/loginForm'
import { selectAuthenticated } from '@/redux/reducers/userReducer'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
// import "./styles/login.css"
import img0 from "../../public/assets/img.png"
import img1 from "../../public/assets/img2.png";
import img2 from "../../public/assets/img3.png";
import img3 from "../../public/assets/img4.png";
import img4 from "../../public/assets/img5.png";
// import Login from '@/components/Login'
function login() {
const router = useRouter()
const auth = useSelector(selectAuthenticated)
const imgArr = [img0, img1, img2, img3, img4];
const num = Math.floor(Math.random() * 5) % 5



  useEffect(()=>{


    if(auth){
      router.push("/profile")
    }

  },[auth])
  return (
    <div className=' relative h-screen pl-12 '>
    <div
        className='fixed top-0 left-0 w-full h-screen  bg-fixed bg-center bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${imgArr[num].src})` }}
      ></div>
    
      <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-10'></div>
    <div className='relative overfolw-x-hidden z-10  py-12 flex flex-col lg:flex-row items-center justify-around space-y-4 w-[80%] m-auto'>
<div className='font-black-ops-one text-white md:text-5xl text-4xl items-center '>
BLITZSCHLAG
</div>
<div className=' bg-black opacity-80 backdrop-blur-md rounded-lg p-8'>
  
  <p className='text-white text-xl font-black-ops-one my-4'> LOGIN</p>
  <LoginForm/>
</div>
    </div>
    </div>
    
  )
}

export default login