import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "@/redux/reducers/userReducer";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "@/constants";
import { useDispatch } from "react-redux";
import qr from "../../../public/assets/events/qr.jpg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import {
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  selectErrors,
} from "@/redux/reducers/uiReducer";
import { selectLoading } from "@/redux/reducers/uiReducer";
function PayNow({ teamId }) {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(2);
  const loading = useSelector(selectLoading);
  const [image, setImage] = useState();

  const handleSubmit = () => {
    dispatch(LOADING_UI());
    const formData = new FormData();
    formData.append("image", image, image?.name);

    axios
      .post(`${url}/events/proof/${teamId}`, formData)
      .then((d) => {
        setStatus(3);
        dispatch(CLEAR_ERRORS());
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const successJoin = (
    <div className="flex flex-col  justify-around space-y-4  items-center">
      <div>
        <Image width={150} src={qr} />
      </div>
      <div>Please Pay on above qr code to get your team verified.</div>
      <div>
        <div className="text-md mb-[10px]">Submit Payment Confirmation</div>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          accept="image/*"
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        className="btn rounded-xl px-16 bg-[#E9B704] text-[#463000] border-none"
      >
        {" "}
        {loading ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          "Submit"
        )}{" "}
      </button>
    </div>
  );

  const teamVerified = (
    <div className="flex flex-col  justify-around h-96 items-center">
      <div className="flex gap-5">
        <FaCheck size={20} />
        Your Team status will be verified within 24 hrs
      </div>
    </div>
  );
  return (
    <div>
      <button
        className="w-fit bg-[#5f2b00] px-[36px] py-[8px] text-white "
        onClick={() => {
          document.getElementById("my_pay_modal").showModal();
        }}
      >
        Pay Now
      </button>
      <dialog id="my_pay_modal" className="modal ">
        <div className="modal-box rounded-2xl bg-[#463000] text-[white]">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{"Pay For Team Confirmation"}</h3>
            <form method="dialog">
              <button
                onClick={() => dispatch(CLEAR_ERRORS())}
                className="btn btn-circle bg-[#463000] border-none font-black-ops-one"
              >
                <span>X</span>
              </button>
            </form>
          </div>

          {/* <div className="modal-action"> */}
          {/* <form method="dialog"> */}
          {status === 2 && successJoin}
          {status === 3 && teamVerified}
          {/* </form> */}
        </div>
        {/* </div> */}
      </dialog>
    </div>
  );
}

export default PayNow;
