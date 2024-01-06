import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { url } from '@/constants';
import { useDispatch,useSelector } from 'react-redux';
import { selectErrors, selectLoading } from '@/redux/reducers/uiReducer';
import { LOADING_UI,SET_ERRORS,CLEAR_ERRORS } from '@/redux/reducers/uiReducer';

function CampusAmbassdorDialog() {

const dispatch = useDispatch()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [college,setCollege] = useState("")
    const loading  = useSelector(selectLoading)
    const errors = useSelector(selectErrors)





    const handleClick = ()=>{
        
        const data = {
            name,
            email,
            phone,
            college
        }
  dispatch(LOADING_UI())


        const res = axios.post(`${url}/ca`,data).then(
            d=>{
                toast("Successfully Signed Up for CA Programme",{
                    type:"success"
                })
            dispatch(CLEAR_ERRORS())

            document.getElementById('btn-modal-close').click()


            }
        )
        .catch(err=>{
            console.log(err.response.data)
            dispatch(
                SET_ERRORS(err.response.data),
  
            )

        })
    }
  return (
<div className='z-[1000]'>
    {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn rounded-xl bg-[#E9B704] text-[#463000]" onClick={()=>document.getElementById('my_campus_modal').showModal()}>Register Now</button>
<dialog id="my_campus_modal" className="modal">
  <div className="modal-box rounded-2xl bg-[#463000] text-[white]">
    <form method="dialog ">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg mb-4">Campus Ambassdor SignUp</h3>
    <div className='flex flex-col space-y-2 items-venter justify-center'>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-white">Your Name</span>
  </div>
  <input type="text " placeholder="Type Here.." onChange={(e)=>{
     dispatch(CLEAR_ERRORS())
            setName(e.target.value)}} className={`input input-bordered bg-white text-gray-700 w-full max-w-xs `} />
  <div className="label">
    {errors.name && <span className="label-text-alt text-red-500">{errors.name}</span>}
  </div>
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-white">Your Email</span>
  </div>
  <input type="email" placeholder="Type Here.." onChange={(e)=>{
            dispatch(CLEAR_ERRORS())
            setEmail(e.target.value)}} className={`input input-bordered bg-white text-gray-700 w-full max-w-xs `} />
  <div className="label">
    {errors.email && <span className="label-text-alt text-red-500">{errors.email}</span>}
  </div>
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-white">Your Phone( Whatsapp)</span>
  </div>
  <input type="text" placeholder="Type Here.." onChange={(e)=>{
            dispatch(CLEAR_ERRORS())
            setPhone(e.target.value)}} className={`input input-bordered bg-white text-gray-700 w-full max-w-xs `} />
  <div className="label">
    {errors.phone && <span className="label-text-alt text-red-500">{errors.phone}</span>}
  </div>
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text text-white">College/Institute Name</span>
  </div>
  <input type="text" placeholder="Type Here.." onChange={(e)=>{
            dispatch(CLEAR_ERRORS())
            setCollege(e.target.value)}} className={`input input-bordered bg-white text-gray-700 w-full `} />
  <div className="label">
    {errors.college && <span className="label-text-alt text-red-500">{errors.college}</span>}
  </div>
</label>
{/* <form method='dialog'> */}
{errors.general &&  <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp! </span>{errors.general} </p>}


<button className='btn max-w-xs bg-[#E9B704] text-[#463000]' onClick={handleClick}>{loading?<span className="loading loading-dots loading-sm"></span>:"Submit"}</button>
{/* </form> */}
    </div>
  </div>
</dialog>
</div>
  )
}

export default CampusAmbassdorDialog