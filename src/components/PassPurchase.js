import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "@/redux/reducers/userReducer";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "@/constants";
import { useDispatch } from "react-redux";
import qr from "../../public/assets/events/qr.jpg";
import Image from "next/image";
import { getUserData } from "@/redux/actions/userAction";
import { SET_USER } from "@/redux/reducers/userReducer";
import {
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  selectErrors,
} from "@/redux/reducers/uiReducer";
import { selectLoading } from "@/redux/reducers/uiReducer";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

function PurchasePass({pass }) {
  const loading = useSelector(selectLoading);
  const errors = useSelector(selectErrors);
  const auth = useSelector(selectAuthenticated);
  const dispatch = useDispatch();
  
  const [status, setStatus] = useState(0);

  const handleSubmit = () => {
if (auth) {
dispatch(LOADING_UI())
      axios
        .post(`${url}/passes/purchase/${pass}`)
        .then((d) => {
          setStatus(1);
          const BLITZID = localStorage.getItem("BLITZID");
          axios.defaults.headers.common["Authorization"] = BLITZID;
          getUserData().then((res) => {
            localStorage.setItem("BLITZUSER", JSON.stringify(res));
            dispatch(SET_USER(res));
          });
          dispatch(CLEAR_ERRORS());
        })
        .catch((err) => dispatch(SET_ERRORS(err.response.data)));
    } else {
    
        toast("Please Login to purchase Pass",{
            type:"info"
        })
        }

  }

  const PurchaseConfirmation = (
    <div className="flex flex-col  justify-around h-96 items-center">
      <div className="flex space-x-2">
        <FaCheck size={20} />
        <p>
          {" "}
          Successfully Purchased{" "}
        </p>
      </div>
      <div>Your Pass Status will be verified in 24 hours.</div>
      <div style={{ textDecoration: "underline" }}>
        <Link href={"/profile"}>
          You can view your Pass Purchase in profile section.
        </Link>
      </div>
    </div>
  );
  const Purchase = (
    <div className="flex flex-col  justify-around h-96 items-center">
      <div>
        <Image width={150} src={qr} />
      </div>
      <div>Please Pay on above qr code and submit payment confirmation.</div>
      <div>
<input type="file" accept="image/*"></input>
      </div>
      <button onClick={handleSubmit} className="btn rounded-xl px-16 bg-[#E9B704] text-[#463000] border-none"> {loading?<span className="loading loading-dots loading-sm"></span>:"Submit"} </button>
    </div>
  );

  return (
    <div>
      <button
        className="w-fit bg-[#310816] rounded-lg px-[36px] py-[8px] text-white "
        onClick={() => {
          if (!auth) {
            toast("Please Login to Purchase Pass", {
              type: "info",
            });
          } else {
            document.getElementById("my_pass_modal").showModal();
          }
        }}
      >
        Buy pass
      </button>
      <dialog id="my_pass_modal" className="modal ">
        <div className="modal-box rounded-2xl bg-[#463000] text-[white]">
          <div className="flex items-center justify-between">
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
          {status === 0 && Purchase}
          {status === 1 && PurchaseConfirmation}
          {/* </form> */}
        </div>
        {/* </div> */}
      </dialog>
    </div>
  );
}

export default PurchasePass;
