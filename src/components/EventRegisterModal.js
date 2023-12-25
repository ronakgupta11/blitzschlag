import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'

function EventRegisterModal({event}) {
  const [teamSize,setTeamSize] = useState(0)
  return (
    <div><button className="bg-[#FF002F] text-white font-black-ops-one text-lg  rounded-md px-16 py-2 " onClick={()=>document.getElementById('my_modal_1').showModal()}>Register</button>
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <div className='flex items-center justify-between'>

        <h3 className="font-bold text-lg">{`Register your team for ${event}`}</h3>
        <FaHome onClick={()=>{}} size={20}/>
        </div>
        {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
        <div className="modal-action">
          <form method="dialog">
<div className='flex space-x-2'>
<label className="form-control w-full max-w-xs">

<div className="label">
    <span className="label-text">Team Name</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </label>
  <label className="form-control w-full max-w-xs">

<div className="label">
    <span className="label-text">Team Size</span>
  </div>
  <input type="number" onChange={(e)=>setTeamSize(e.target.value)} placeholder="Type here" className="input input-md input-bordered w-full max-w-xs" />
  </label>

</div>
<div className='flex flex-col items-start justify-between space-y-2 my-2'>
<label className="form-control w-full max-w-xs">

<div className="label">
    <span className="label-text">What is your name?</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </label>
  <label className="form-control w-full max-w-xs">

  <div className="label">
    <span className="label-text">What is your name?</span>
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </label>
</div>


            <button className="bg-[#FF002F] text-white font-black-ops-one text-lg  rounded-md px-16 py-2 ">Register Team</button>
          </form>
        </div>
      </div>
    </dialog></div>
  )
}

export default EventRegisterModal