import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import { selectAuthenticated } from "@/redux/reducers/userReducer";
import PayNow from "./payNow";
import axios from "axios";
import { url } from "@/constants";
import { getUserData } from "@/redux/actions/userAction";

function TeamDetailModal({team}) {
  const auth = useSelector(selectAuthenticated);
  const dispatch = useDispatch()
  const handleRefresh =()=>{
    const BLITZID = localStorage.getItem("BLITZID");
    axios.defaults.headers.common["Authorization"] = BLITZID;
    getUserData().then((res) => {
      // console.log("res",res)
      localStorage.setItem("BLITZUSER", JSON.stringify(res));
      if(res.credentials.email.slice(-10) === "mnit.ac.in"
      ){
        dispatch(SET_MNIT())
      }
      dispatch(SET_USER(res));
    });

  }
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
              <div className="">Team Code: </div> {team?.teamId}
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="">Team Status: </div><span className={`${team?.teamStatus === "unVerified"? "text-red-600":"text-green-500"}`}> {team?.teamStatus}</span>
              {team?.teamStatus === "unVerified" && <PayNow  teamId= {team?.teamId}/>}
            </div>
            <div className="flex items-center gap-[30px]">
              <button onClick={handleRefresh} className="btn bg-[#5f2b00] border-none  rounded-xl">Refresh</button>
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
