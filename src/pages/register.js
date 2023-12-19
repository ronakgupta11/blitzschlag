import SignupForm from '@/components/signupForm'
import React,{useEffect} from 'react'
import { selectAuthenticated } from '@/redux/reducers/userReducer'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

function register() {
  const router = useRouter()
const auth = useSelector(selectAuthenticated)
  useEffect(()=>{


    if(auth){
      router.push("/profile")
    }

  },[auth])
  return (
    <div>register
      <SignupForm/>
    </div>
  )
}

export default register