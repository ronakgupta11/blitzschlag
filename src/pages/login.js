import React, { useEffect } from 'react'
import LoginForm from '@/components/loginForm'
import { selectAuthenticated } from '@/redux/reducers/userReducer'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
function login() {
const router = useRouter()
const auth = useSelector(selectAuthenticated)



  useEffect(()=>{


    if(auth){
      router.push("/profile")
    }

  },[auth])
  return (
    <div>login
      <div>
        <LoginForm/>
      </div>
    </div>
  )
}

export default login