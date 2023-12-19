
'use client';

import { Button,  Label, TextInput ,Spinner} from 'flowbite-react';
import { url } from '@/constants';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import {toast} from "react-toastify"
import { useRouter } from 'next/router';



import { useDispatch,useSelector } from 'react-redux';
import { selectErrors, selectLoading } from '@/redux/reducers/uiReducer';
import { LOADING_UI,SET_ERRORS,CLEAR_ERRORS } from '@/redux/reducers/uiReducer';
import { SET_USER } from '@/redux/reducers/userReducer';

import { getUserData } from '@/redux/actions/userAction';



export default function LoginForm() {
const router = useRouter()
const [email,setEmail] = useState("")
const [pass,setPass] = useState("")

const loading  = useSelector(selectLoading)
const errors = useSelector(selectErrors)

const successLogin = () => toast("Logged in",{type:"success"});
const successReset = () => toast("Sent Password Reset Mail",{type:"success"});
const dispatch = useDispatch()


// const getUserData = ()=>{

//   axios.get(`${url}/user`).then(
//       res=>{
//           dispatch(
//              SET_USER(res.data)
//           )
//       }
//   ).catch(
//       err => console.log(err)
//   )

// }
const handleClick = ()=>{
    

const userData =  {
    email:email,
    password:pass
 }     
  dispatch(LOADING_UI())

  axios.post(`${url}/login`,userData).then(
      res =>{
          const BLITZID  = `Bearer ${res.data.token}`;
          localStorage.setItem("BLITZID",BLITZID);
          axios.defaults.headers.common["Authorization"] = BLITZID;
          getUserData().then(res=>{
            localStorage.setItem("BLITZUSER",res);

            dispatch(SET_USER(res))
          });
          dispatch(CLEAR_ERRORS())
          successLogin()
          router.push("/")

      }
  ).catch(
      err=>{
          dispatch(
              SET_ERRORS(err.response.data),

          )
      }
  )
}



const handleForgot = ()=>{
    if(!email){
        dispatch(SET_ERRORS({
          email:"Must not be empty"
      }))

    }
    else{
      dispatch(LOADING_UI())
    axios.post(`${url}/resetPassword`,
    {
            email:email,

         }).then(
        d =>
        {
          dispatch(CLEAR_ERRORS())
          successReset()

        }
    ).catch(e=>{
        
        dispatch(SET_ERRORS(e.response.data))
        // setLoading(false)
    })}


}



  return (
    <div className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput helperText={errors.email} color={errors.email?"failure":"gray"}  onChange={(e)=>{
            dispatch(CLEAR_ERRORS())
            setEmail(e.target.value)}} id="email1" type="email" placeholder="name@blitzschlag.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput helperText={errors.password} color={errors.password?"failure":"gray"}  onChange={(e)=>{
            dispatch(CLEAR_ERRORS())
            
            setPass(e.target.value)}} id="password1" type="password" required />
      </div>
{errors.general &&<p className='text-red-600 text-sm'>{errors.general}</p>}
<div className='flex items-center justify-between px-4'>
    <Link className=' text-gray-700 text-sm' href={"/register"}>Create an account</Link>
    {/* <p >Create an account?</p> */}
    <p onClick={handleForgot} className='cursor-pointer text-gray-700 text-sm'>
        Forgot password?
    </p>
</div>
      <Button onClick={handleClick} type="submit">{loading?<Spinner/>:"Login"}</Button>
    </div>
  );
}
