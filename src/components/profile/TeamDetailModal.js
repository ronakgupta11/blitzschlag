import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import { selectAuthenticated } from "@/redux/reducers/userReducer";

function TeamDetailModal({team}) {
  const auth = useSelector(selectAuthenticated);
  //   const dispatch = useDispatch();
  const [status, setStatus] = useState(0);
  return (
    <div>
      <button
        className="w-fit bg-[#FB5E3F] px-[18px] md:px-[32px] py-[8px] text-white "
        onClick={() => {
          
            document.getElementById(`my_modal_${team?.teamId}`).showModal();
       
        }}
      >
       View Team
      </button>
      <dialog id={`my_modal_${team?.teamId}`} className="modal">
        <div className="modal-box bg-[#FFC697] px-0 pt-[5px]">
          <div className="flex items-center justify-end px-[24px]">
            <form method="dialog">
              <button className="btn btn-circle font-black-ops-one">
                <span>X</span>
              </button>
            </form>
          </div>
          <div className="grid gap-[14px] px-[24px]">
            <div className="flex items-center gap-[30px]">
              <div className="">Team Name: </div> {team?.teamName}
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="">Team Leader: </div> {team?.teamLeaderId}
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="">Team Status: </div><span className={`${team?.teamStatus === "unVerified"? "text-red-600":"text-green-500"}`}> {team?.teamStatus}</span>
            </div>
          </div>
          <div className="mt-[34px]">
            <div className="grid grid-cols-3 bg-[#FFB070] py-[12px]">
              <div className="">S No.</div>
              <div className="">Blitz ID</div>
            </div>
           {team?.members.map((m,k)=> <div className="grid grid-cols-3 py-[12px]">
              <div className="">{k+1}</div>
              <div className="">{m}</div>
            </div>)}
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default TeamDetailModal;
