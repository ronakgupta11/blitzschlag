import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "@/redux/reducers/userReducer";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "@/constants";
import { useDispatch } from "react-redux";
import qr from "../../../public/assets/events/qr.jpg";
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

function EventRegisterModal({ event, id }) {
  function generateUniqueTeamId(teamName) {
    // Remove spaces from the team name
    const trimmedTeamName = teamName.replace(/\s/g, "");

    // Generate a random 5-character string
    const randomString = Math.random().toString(36).substring(2, 7);

    // Combine the trimmed team name and the random string with a hyphen
    const teamId = `${trimmedTeamName}-${randomString}`;

    return teamId;
  }

  const loading = useSelector(selectLoading);
  const errors = useSelector(selectErrors);

  const auth = useSelector(selectAuthenticated);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const [teamId, setTeamId] = useState("");

  const handleRegister = () => {
    dispatch(LOADING_UI());
    if (!teamName && !teamCode) {
      let err = { teamName: "Please Fill atleast one field" };
      dispatch(SET_ERRORS(err));
    } else if (teamName && teamCode) {
      let err = { general: "Please Fill only one field" };
      dispatch(SET_ERRORS(err));
    } else if (teamName) {
      const teamIdGen = generateUniqueTeamId(teamName);
      setTeamId(teamIdGen);

      axios
        .post(`${url}/events/register/${id}/${teamIdGen}`, {
          teamName: teamName,
        })
        .then((d) => {
          setStatus(1);
          toast("Created Team", {
            type: "success",
          });
          const BLITZID = localStorage.getItem("BLITZID");
          axios.defaults.headers.common["Authorization"] = BLITZID;
          getUserData().then((res) => {
            // console.log("res",res)
            localStorage.setItem("BLITZUSER", JSON.stringify(res));

            dispatch(SET_USER(res));
          });
          dispatch(CLEAR_ERRORS());
        })
        .catch((err) => dispatch(SET_ERRORS(err.response.data)));
    } else {
      axios
        .post(`${url}/events/join/${id}/${teamCode}`)
        .then((d) => {
          setStatus(2);
          toast("Joined Team", {
            type: "success",
          });
          const BLITZID = localStorage.getItem("BLITZID");
          axios.defaults.headers.common["Authorization"] = BLITZID;
          getUserData().then((res) => {
            // console.log("res",res)
            localStorage.setItem("BLITZUSER", JSON.stringify(res));

            dispatch(SET_USER(res));
          });
          dispatch(CLEAR_ERRORS());
        })
        .catch((err) => {
          console.log(err);
          dispatch(SET_ERRORS(err.response.data));
        });
    }

    // setStatus(1)
  };
  const handleSubmit = ()=>{
     try {
        setStatus(3)
     } catch (error) {
      
     }
  }
  const form = (
    <div className="flex flex-col items-start justify-between space-y-4 my-4">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Create Team</span>
        </div>
        <input
          type="text"
          onChange={(e) => {
            dispatch(CLEAR_ERRORS());
            setTeamName(e.target.value);
          }}
          placeholder="Team Name"
          className="input input-bordered bg-inherit w-full "
        />
      </label>
      {errors.teamName && (
        <p className="text-red-600 text-sm">{errors.teamName}</p>
      )}
      <div className="w-full flex items-center justify-center">
        <hr className="w-full" />
        <p className="mx-2">OR</p>
        <hr className="w-full" />
      </div>

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Join Team</span>
        </div>
        <input
          type="text"
          onChange={(e) => {
            dispatch(CLEAR_ERRORS());
            setTeamCode(e.target.value);
          }}
          placeholder="Team Code"
          className="input input-bordered bg-inherit w-full "
        />
      </label>
      {errors.teamCode && (
        <p className="text-red-600 text-sm">{errors.teamCode}</p>
      )}
      {errors.general && (
        <p className="text-red-600 text-sm">{errors.general}</p>
      )}

      <button
        onClick={handleRegister}
        className="btn font-amita text-lg bg-[#E9B704] text-[#463000] rounded-md px-16 py-2 my-4"
      >
        {loading ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          "Register"
        )}
      </button>
    </div>
  );

  const successCreate = (
    <div className="flex flex-col  justify-around h-96 items-center">
      <div className="flex space-x-2">
        <FaCheck size={20} />
        <p>
          {" "}
          Successfully Created{" "}
          <span className="font-bold text-xl text-yellow-500">{teamName} </span>
        </p>
      </div>
      <div>
        Team Code :{" "}
        <span className="font-bold text-xl text-yellow-500">{teamId} </span>
      </div>
      <div>
        <Image width={150} src={qr} />
      </div>
      <div>Please Pay 500 on above qr code to get your team verified.</div>
      <div>
    <input  type="file" accept="image/*"></input>
      </div>
      <button onClick={handleSubmit} className="btn rounded-xl px-16 bg-[#E9B704] text-[#463000] border-none"> {loading?<span className="loading loading-dots loading-sm"></span>:"Submit"} </button>
      <div>
        <Link href={"/profile"}>
          You can view your team status in profile section
        </Link>
      </div>
    </div>
  );

  const successJoin = (
    <div className="flex flex-col  justify-around h-96 items-center">
      <div className="flex space-x-2">
        <FaCheck size={20} />
        <p>
          {" "}
          Successfully joined{" "}
          <span className="font-bold text-xl text-yellow-500">
            {setTeamCode}{" "}
          </span>
        </p>
      </div>
      <div>
        <Image width={150} src={qr} />
      </div>
      <div>Please Pay 500 on above qr code to get your team verified.</div>
      <div>
    <input type="file" accept="image/*"></input>
      </div>
      <button onClick={handleSubmit} className="btn rounded-xl px-16 bg-[#E9B704] text-[#463000] border-none"> {loading?<span className="loading loading-dots loading-sm"></span>:"Submit"} </button>
      
    </div>
  );

  const teamVerified = (
    <div className="flex flex-col  justify-around h-96 items-center">
     Your Team status will be verified within 24 hrs
    <div>
      <Link href={"/profile"}>
        You can view your team status in profile section
      </Link>
    </div>
  </div>
  )

  return (
    <div>
      <button
        className="w-fit bg-[#00517E] px-[36px] py-[8px] text-white "
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
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box rounded-2xl bg-[#463000] text-[white]">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lg">{`Register your team for ${event}`}</h3>
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
          {status === 1 && form}
          {status === 1 && successCreate}
          {status === 2 && successJoin}
          {status ===0 && teamVerified}
          {/* </form> */}
        </div>
        {/* </div> */}
      </dialog>
    </div>
  );
}

export default EventRegisterModal;
