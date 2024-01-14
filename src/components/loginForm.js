"use client";

import { url } from "@/constants";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { selectErrors, selectLoading } from "@/redux/reducers/uiReducer";
import {
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,

} from "@/redux/reducers/uiReducer";
import { SET_USER,  SET_MNIT } from "@/redux/reducers/userReducer";
import { getUserData } from "@/redux/actions/userAction";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const loading = useSelector(selectLoading);
  const errors = useSelector(selectErrors);

  const successLogin = () => toast("Logged in", { type: "success" });
  const successReset = () =>
    toast("Sent Password Reset Mail", { type: "success" });
  const dispatch = useDispatch();

  const handleClick = () => {
    const userData = {
      email: email,
      password: pass,
    };
    dispatch(LOADING_UI());

    axios
      .post(`${url}/login`, userData)
      .then((res) => {
        const BLITZID = `Bearer ${res.data.token}`;
        localStorage.setItem("BLITZID", BLITZID);
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
        dispatch(CLEAR_ERRORS());
        successLogin();
        // router.push("/")
      })
      .catch((err) => {
        dispatch(SET_ERRORS(err.response.data));
      });
  };

  const handleForgot = () => {
    if (!email) {
      dispatch(
        SET_ERRORS({
          email: "Must not be empty",
        })
      );
    } else {
      dispatch(LOADING_UI());
      axios
        .post(`${url}/resetPassword`, {
          email: email,
        })
        .then((d) => {
          dispatch(CLEAR_ERRORS());
          successReset();
        })
        .catch((e) => {
          dispatch(SET_ERRORS(e.response.data));
          // setLoading(false)
        });
    }
  };

  return (
    <div className="flex  flex-col gap-4 ">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-[#ddd]">Your Email</span>
        </div>
        <input
          type="text"
          placeholder="blitzschlag@gmail.com"
          onChange={(e) => {
            dispatch(CLEAR_ERRORS());
            setEmail(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full max-w-xs rounded-md ${
            errors.email ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.email && (
            <span className="label-text-alt text-red-500">{errors.email}</span>
          )}
        </div>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-[#ddd]">Your Password</span>
        </div>
        <input
          type="password"
          placeholder="Type Here.."
          onChange={(e) => {
            dispatch(CLEAR_ERRORS());
            setPass(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full max-w-xs rounded-md ${
            errors.password ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.password && (
            <span className="label-text-alt text-red-500">
              {errors.password}
            </span>
          )}
        </div>
      </label>

      {errors.general && (
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          <span class="font-medium">Oh, snapp! </span>
          {errors.general}{" "}
        </p>
      )}
      <div className="flex  items-center space-x-5 justify-between text-[#ddd] md:gap-[50px]">
        <Link className="  text-sm" href={"/register"}>
          Create an account
        </Link>
        <p onClick={handleForgot} className="cursor-pointer text-sm">
          Forgot password?
        </p>
      </div>
      <button
        className="bg-yellow-400 text-white rounded-lg py-2 w-full mt-[10px]"
        onClick={handleClick}
        type="submit"
      >
        {loading ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          "Login"
        )}
      </button>
    </div>
  );
}
