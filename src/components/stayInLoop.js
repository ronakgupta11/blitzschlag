import axios from 'axios'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {toast} from "react-toastify"


function StayInLoop() {
    const [email,setEmail] = useState("")
    const send = ()=>{
        axios.post("",{
            email:email
        }).then(r=>
            toast("Successfully Subscribed",{type:"success"
            })
        ).catch(e=>
            toast("Something went wrong",{
                type:"error"
            })
        )
    }
  return (
    <div className='flex items-center space-x-2'>
    <input type='email' onChange={(e)=>setEmail(e.target.value)} className='input input-ghost' placeholder='blitzschlag@gmail.com'>
    </input>
    <button onClick={send}><FaArrowRight size={20}/></button>
    </div>
  )
}

export default StayInLoop