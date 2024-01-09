"use client";

import { url } from "@/constants";
import { useState } from "react";
import axios from "axios";
// import Link from 'next/link';
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { getUserData } from "@/redux/actions/userAction";

import { useDispatch, useSelector } from "react-redux";
import { selectErrors, selectLoading } from "@/redux/reducers/uiReducer";
import {
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
} from "@/redux/reducers/uiReducer";
import { SET_USER } from "@/redux/reducers/userReducer";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cnf, setCnf] = useState("");
  const [name, setName] = useState("");
  const [referal, setReferal] = useState("");
  const [college, setCollege] = useState("");
  const [Phone, setPhone] = useState("");

  const loading = useSelector(selectLoading);
  const errors = useSelector(selectErrors);
  const dispatch = useDispatch();

  const successCreate = () => toast("Created Account", { type: "success" });
  // const successReset = () => toast("Sent Password Reset Mail",{type:"success"});

  // const getUserData = ()=>{

  //   axios.get(`${url}/user`).then(
  //       res=>{
  //           dispatch(
  //              SET_USER(res.data)
  //           )
  //       }
  //   ).catch(
  //       err => console.log(err)
  //   )

  // }

  const handleClick = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: pass,
      confirmPassword: cnf,
      phone: Phone,
      college: college,
      referalid: referal,
      name: name,
    };

    dispatch(LOADING_UI());

    axios
      .post(`${url}/signup`, userData)
      .then((res) => {
        const BLITZID = `Bearer ${res.data.token}`;
        localStorage.setItem("BLITZID", BLITZID);
        axios.defaults.headers.common["Authorization"] = BLITZID;
        getUserData().then((res) => {
          localStorage.setItem("BLITZUSER", JSON.stringify(res));

          dispatch(SET_USER(res));
        });
        dispatch(CLEAR_ERRORS());
        successCreate();
        // router.push("/")
      })
      .catch((err) => {
        console.log(err);
        dispatch(SET_ERRORS(err.response.data));
      });
  };

  // console.log(errors)

  return (
    <div className=" flex flex-col gap-2 w-full ">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-[#ddd]">Your Name</span>
        </div>
        <input
          type="text"
          placeholder="John Doe"
          onChange={(e) => {
            dispatch(SET_ERRORS({ ...errors, name: "" }));
            setName(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full rounded-md ${
            errors.name ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.name && (
            <span className="label-text-alt text-red-500">{errors.name}</span>
          )}
        </div>
      </label>

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-[#ddd]">Your Email</span>
        </div>
        <input
          type="email"
          placeholder="blitzschlag@gmail.com"
          onChange={(e) => {
            dispatch(SET_ERRORS({ ...errors, email: "" }));
            setEmail(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full rounded-md ${
            errors.email ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.email && (
            <span className="label-text-alt text-red-500">{errors.email}</span>
          )}
        </div>
      </label>

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-[#ddd]">Phone</span>
        </div>
        <input
          type="text"
          placeholder="9999-5842-58"
          onChange={(e) => {
            dispatch(SET_ERRORS({ ...errors, phone: "" }));
            setPhone(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full rounded-md ${
            errors.phone ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.phone && (
            <span className="label-text-alt text-red-500">{errors.phone}</span>
          )}
        </div>
      </label>

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-[#ddd]">College Name</span>
        </div>
        <input
          type="text"
          placeholder="MNIT Jaipur"
          onChange={(e) => {
            dispatch(SET_ERRORS({ ...errors, college: "" }));
            setCollege(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full rounded-md ${
            errors.college ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.college && (
            <span className="label-text-alt text-red-500">
              {errors.college}
            </span>
          )}
        </div>
      </label>

      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-[#ddd]">Set password</span>
        </div>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => {
            dispatch(SET_ERRORS({ ...errors, password: "" }));
            setPass(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full rounded-md ${
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
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-[#ddd]">Confirm Password</span>
        </div>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => {
            dispatch(SET_ERRORS({ ...errors, confirmPassword: "" }));
            setCnf(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full rounded-md ${
            errors.confirmPassword ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.confirmPassword && (
            <span className="label-text-alt text-red-500">
              {errors.confirmPassword}
            </span>
          )}
        </div>
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text text-[#ddd]">Referal Id (optional)</span>
        </div>
        <input
          type="text"
          placeholder="optional"
          onChange={(e) => {
            dispatch(SET_ERRORS({ ...errors, referal: "" }));
            setReferal(e.target.value);
          }}
          className={`input input-bordered bg-white text-gray-700 w-full rounded-md ${
            errors.referal ? "input-error" : ""
          }`}
        />
        <div className="label">
          {errors.referal && (
            <span className="label-text-alt text-red-500">
              {errors.referal}
            </span>
          )}
        </div>
      </label>
      {errors.general && (
        <p className="text-red-600 text-sm">{errors.general}</p>
      )}

      {/* <Button onClick={(e)=>handleClick(e)} type="submit">{loading?<Spinner/>:"Create Account"}</Button> */}
      <button
        className="bg-yellow-400 text-white rounded-lg  py-2 w-full"
        onClick={(e) => handleClick(e)}
        type="submit"
      >
        {loading ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          "Create Account"
        )}
      </button>
    </div>
  );
}
