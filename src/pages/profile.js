import axios from 'axios'
import React,{useEffect} from 'react'
import { url } from '@/constants'
import Logout from '@/components/logoutBtn'
import { useSelector } from 'react-redux'
import { selectAuthenticated,selectCredentials, selectEvents } from '@/redux/reducers/userReducer'
import { useRouter } from 'next/router'
import { QRCode } from 'react-qrcode-logo';
import logo from "../../public/logo.png"
import StayInLoop from '@/components/stayInLoop'
function profile() {
  const router = useRouter()
  const auth  = useSelector(selectAuthenticated)
  const credentials = useSelector(selectCredentials)
  const registeredEvents = useSelector(selectEvents)

  useEffect(()=>{

    if(!auth){
      router.push("/login")
    }

      },[auth])
// console.log("cre",credentials?.userId)


const handleVerify = ()=>{
  const id = localStorage.getItem("BLITZID")
  axios.post(`${url}/verifyMail`,{
    headers:{
      Authorization:`Bearer ${id}`
    }
  }
  
  )
}
  return (

    <div className='ml-24'>profile
      <Logout/>
      <QRCode value={credentials.userId} bgColor='#000000' fgColor='#947c59' removeQrCodeBehindLogo={true} logoPaddingStyle='circle'  logoPadding={4} logoImage={logo.src}/>
      <p>Welcome {credentials.name} !!</p>
      <button onClick={handleVerify}>verify</button>
      <StayInLoop/>
    </div>
  )
}

export default profile