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
    <div className='container' style={{ backgroundImage: `url(${imgArr[num].src})` }}>

        <LoginForm/>
        {/* <Login/> */}
      </div>
    
  )
}

export default login