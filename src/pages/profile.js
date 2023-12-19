import axios from 'axios'
import React,{useEffect} from 'react'
import { url } from '@/constants'
import Logout from '@/components/logoutBtn'
import { useSelector } from 'react-redux'
import { selectAuthenticated } from '@/redux/reducers/userReducer'
import { useRouter } from 'next/router'
function profile() {
  const router = useRouter()
  const auth  = useSelector(selectAuthenticated)

  useEffect(()=>{
    if(!auth){
      router.push("/login")
    }

      },[auth])

  return (
    <div>profile
      <Logout/>
    </div>
  )
}

export default profile