
'use client';

import { Button,  Label, TextInput ,Spinner} from 'flowbite-react';
import { url } from '@/constants';
import { useState } from 'react';
import axios from 'axios';
// import Link from 'next/link';
import {toast} from "react-toastify"
import { useRouter } from 'next/router';

import { getUserData } from '@/redux/actions/userAction';



import { useDispatch,useSelector } from 'react-redux';
import { selectErrors, selectLoading } from '@/redux/reducers/uiReducer';
import { LOADING_UI,SET_ERRORS,CLEAR_ERRORS } from '@/redux/reducers/uiReducer';
import { SET_USER } from '@/redux/reducers/userReducer';


export default function SignupForm() {
    const router = useRouter()
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const [cnf,setCnf] = useState("")
    const [name,setName] = useState("")
    const [referal,setReferal] = useState("")
    const [college,setCollege] = useState("")
    const [Phone,setPhone] = useState("")


    const loading  = useSelector(selectLoading)
    const errors = useSelector(selectErrors)
const dispatch = useDispatch()

const successCreate = () => toast("Created Account",{type:"success"});
// const successReset = () => toast("Sent Password Reset Mail",{type:"success"});

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

const handleClick = (e)=>{
    e.preventDefault()
    const userData = {
        email:email,
        password:pass,
        confirmPassword:cnf,
        phone:Phone,
        college:college,
        referalid:referal,
        name:name


    }

    dispatch(LOADING_UI())

    axios.post(`${url}/signup`,userData).then(
        res =>{
            const BLITZID  = `Bearer ${res.data.token}`;
            localStorage.setItem("BLITZID",BLITZID);
            axios.defaults.headers.common["Authorization"] = BLITZID;
            getUserData().then(res=>{
            localStorage.setItem("BLITZUSER",res);

              dispatch(SET_USER(res))
            });
            dispatch(CLEAR_ERRORS())
            successCreate()
            router.push("/")
  
        }
    ).catch(
        err=>{
          console.log(err)
            dispatch(
                SET_ERRORS(err.response.data),
  
            )
        }
    )
  }
    

    




// console.log(errors)

  return (
    <form className=" flex max-w-md !text-sm flex-col gap-2">
        <div>
        <div className="mb-1 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput helperText={errors.name} color={errors.name?"failure":"gray"}   onChange={(e)=>{
            dispatch(SET_ERRORS({...errors,name:""}))
            
            setName(e.target.value)}} id="name" type="text" placeholder="John Doe" required sizing={"sm"}/>
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="email1" value="Email" />
        </div>
        <TextInput helperText={errors.email} color={errors.email?"failure":"gray"}  onChange={(e)=>{
            // setErrors()
            dispatch(SET_ERRORS({...errors,email:""}))

            setEmail(e.target.value)}} id="email1" type="email" placeholder="name@blitzschlag.com" required  sizing={"sm"}/>
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="phone" value="Phone" />
        </div>
        <TextInput helperText={errors.phone} color={errors.phone?"failure":"gray"}    onChange={(e)=>{
            dispatch(SET_ERRORS({...errors,phone:""}))

            setPhone(e.target.value)}} id="phone" type="text" placeholder="9999999999" required sizing={"sm"}/>
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="college" value="College Name" />
        </div>
        <TextInput helperText={errors.college} color={errors.college?"failure":"gray"}   onChange={(e)=>{
            dispatch(SET_ERRORS({...errors,college:""}))

            
            setCollege(e.target.value)}} id="college" type="text" placeholder="MNIT Jaipur" required sizing={"sm"} />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="referal" value="Referral Id" />
        </div>
        <TextInput helperText={errors.referal} color={errors.referal?"failure":"gray"}    onChange={(e)=>{
            dispatch(SET_ERRORS({...errors,referal:""}))
            
            setReferal(e.target.value)}} id="referal" type="text" placeholder="(optional)" required sizing={"sm"} />
      </div>

      <div>
        <div className="mb-1 block">
          <Label htmlFor="password1" value="Password" />
        </div>
        <TextInput  helperText={errors.password} color={errors.password?"failure":"gray"}  onChange={(e)=>{
            dispatch(SET_ERRORS({...errors,password:""}))


            setPass(e.target.value)}} id="password1" type="password" required sizing={"sm"} />
      </div>
      <div>
        <div className="mb-1 block">
          <Label htmlFor="password2" value="Confirm password" />
        </div>
        <TextInput helperText={errors.confirmPassword} color={errors.confirmPassword?"failure":"gray"}  onChange={(e)=>{
                       dispatch(SET_ERRORS({...errors,confirmPassword:""}))

            setCnf(e.target.value)}} id="password2" type="password" required sizing={"sm"}/>
      </div>
{errors.general &&<p className='text-red-600 text-sm'>{errors.general}</p>}

      <Button onClick={(e)=>handleClick(e)} type="submit">{loading?<Spinner/>:"Create Account"}</Button>
    </form>
  );
}
