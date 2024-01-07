import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { toast } from "react-toastify";
import { selectAuthenticated } from "@/redux/reducers/userReducer";

function TeamDetailModal() {
  const auth = useSelector(selectAuthenticated);
  //   const dispatch = useDispatch();
  const [status, setStatus] = useState(0);
  return (
    <div>
      <button
        className="w-fit bg-[#FB5E3F] px-[18px] md:px-[32px] py-[8px] text-white "
        onClick={() => {
          if (!auth) {
            toast("Please Login to Register for Events", {
              type: "info",
            });
          } else {
            document.getElementById("my_modal_1").showModal();
          }
        }}
      >
        Register
      </button>
      <dialog id="my_modal_1" className="modal">
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
              <div className="">Event Name: </div> Panache
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="">Event Name: </div> Panache
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="">Team Name: </div> Alpha
            </div>
            <div className="flex items-center gap-[30px]">
              <div className="">Team Leader Name: </div> Alpha
            </div>
          </div>
          <div className="mt-[34px]">
            <div className="grid grid-cols-3 bg-[#FFB070] py-[12px]">
              <div className="">S No.</div>
              <div className="">Member Name</div>
              <div className="">Blitz ID</div>
            </div>
            <div className="grid grid-cols-3 py-[12px]">
              <div className="">1</div>
              <div className="">Vaibhav Bansal</div>
              <div className="">Blitz_123</div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default TeamDetailModal;
