import { Button } from 'flowbite-react'
import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { SET_AUTHENTICATED } from '@/redux/reducers/userReducer'
import { logOutUser } from '@/redux/actions/userAction'
function Logout() {
    const dispatch = useDispatch()

    const handle = ()=>{
        logOutUser()
        dispatch(SET_AUTHENTICATED())
    }
  return (
    <Button onClick={handle}>Logout</Button>
  )
}

export default Logout