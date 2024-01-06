import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAuthenticated } from '@/redux/reducers/userReducer'
import {toast} from "react-toastify"
import axios from 'axios'
import { url } from '@/constants'
import { useDispatch } from 'react-redux'
import { LOADING_UI ,SET_ERRORS,CLEAR_ERRORS, selectErrors} from '@/redux/reducers/uiReducer'
import { selectLoading } from '@/redux/reducers/uiReducer'
import { FaCheck } from 'react-icons/fa'
import Link from 'next/link'
function EventRegisterModal({event,id}) {
  function generateUniqueTeamId(teamName) {
    // Remove spaces from the team name
    const trimmedTeamName = teamName.replace(/\s/g, '');
  
    // Generate a random 5-character string
    const randomString = Math.random().toString(36).substring(2, 7);
  
    // Combine the trimmed team name and the random string with a hyphen
    const teamId = `${trimmedTeamName}-${randomString}`;
  
    return teamId;
  }

  const loading = useSelector(selectLoading)
  const errors = useSelector(selectErrors)

  const auth = useSelector(selectAuthenticated)
  const dispatch = useDispatch()
  const [status,setStatus] = useState(0)
  const [teamName,setTeamName] = useState("")
  const [teamCode,setTeamCode] = useState("")


  const handleRegister = ()=>{
dispatch(LOADING_UI())
if(teamName){
  const teamId = generateUniqueTeamId(teamName)

  axios.post(`${url}/events/register/${id}/${teamId}`,{
    teamName:teamName
  }).then(
d=>
    {setStatus(1)
    toast("Created Team",{
      type:"success"
    })
    dispatch(CLEAR_ERRORS())
  }
  ).catch(
    err=>console.log(err)
  )
}else{
  axios.post(`${url}/events/join/${id}/${teamCode}`).then(
    d=>
    {setStatus(1)
    toast("Joined Team",{
      type:"success"
    })
    dispatch(CLEAR_ERRORS())
  }
  ).catch(
      err=>{
          dispatch(
              SET_ERRORS(err.response.data),

          )
      }
  )
  
}
    
    // setStatus(1)

  }
  const form = <div className='flex flex-col items-start justify-between space-y-4 my-4'>
<label className="form-control w-full ">

<div className="label">
    <span className="label-text">Create Team</span>
  </div>
  <input type="text" onChange={(e)=>setTeamName(e.target.value)} placeholder="Team Name" className="input input-bordered w-full " />
  </label>

  <div className='w-full flex items-center justify-center'>
  <hr className='w-full'/>
  <p className='mx-2'>OR</p>
  <hr className='w-full'/>

</div>

  <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Join Team</span>
  </div>
  <input type="text" onChange={(e)=>setTeamCode(e.target.value)} placeholder="Team Code" className="input input-bordered w-full " />
  </label>
  {errors.general &&<p className='text-red-600 text-sm'>{errors.general}</p>}

  <button onClick={handleRegister} className=" btn text-white font-amita text-lg bg-blue-500  rounded-md px-16 py-2 my-4">{loading?<span className="loading loading-dots loading-sm"></span>:"Register"}</button>

</div>


const success = <div>
  <div>
    <FaCheck size={30}/>
  </div>
  <div> Successfully Registered </div>
  <div>
  <Link href="/profile">
  Complete Registeration on Profile Page
  </Link>
  </div>

</div>

  return (
    <div><button className="w-fit bg-[#FB5E3F] px-[36px] py-[8px] text-white " onClick={()=>{
      if(!auth){
        toast("Please Login to Register for Events",{
          type:"info"
        })
      }
      else{

        document.getElementById('my_modal_1').showModal()
      }
      }}>Register</button>
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <div className='flex items-center justify-between'>

        <h3 className="font-bold text-lg">{`Register your team for ${event}`}</h3>
        <form method="dialog">
        
        <button className="btn btn-circle font-black-ops-one"><span>X</span></button>
        </form>
        </div>

        {/* <div className="modal-action"> */}
          {/* <form method="dialog"> */}
{status === 0 && form}
{status === 1 && success}
          {/* </form> */}
        </div>
      {/* </div> */}
    </dialog></div>
  )
}

export default EventRegisterModal