import SignupForm from "@/components/signupForm";
import React, { useEffect } from "react";
import { selectAuthenticated } from "@/redux/reducers/userReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import img from "../../public/assets/login/Image.jpg";

function register() {
  const router = useRouter();
  // const imgArr = [img0, img1, img2, img3, img4];
  // const num = Math.floor(Math.random() * 5) % 5

  const auth = useSelector(selectAuthenticated);
  useEffect(() => {
    if (auth) {
      router.push("/profile");
    }
  }, [auth]);
  return (
    <div
      className="  bg-center bg-no-repeat bg-cover flex flex-col lg:flex-row items-center justify-around w-full m-auto py-12"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="font-sankaran text-white lg:text-7xl text-4xl items-center ">
        BLITZSCHLAG
      </div>
      <div className=" bg-black opacity-80 w-[80%] md:w-[40%] backdrop-blur-md rounded-lg p-8">
        <p className="text-white text-2xl font-amita mb-4">Register</p>
        <SignupForm />
      </div>
    </div>
  );
}

export default register;
