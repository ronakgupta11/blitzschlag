import React, { useEffect } from "react";
import LoginForm from "@/components/loginForm";
import { selectAuthenticated } from "@/redux/reducers/userReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import img from "../../public/assets/login/Image.jpg";

function login() {
  const router = useRouter();
  const auth = useSelector(selectAuthenticated);

  useEffect(() => {
    if (auth) {
      router.push("/profile");
    }
  }, [auth]);
  return (
    <div className=" relative h-screen">
      <div
        className="absolute top-0 left-0 w-full h-screen  bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${img.src})` }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-[9]"></div>
      <div className=" absolute mb-10  overfolw-x-hidden h-full overflow-y-auto z-[9] pt-6  pb-12 flex flex-col lg:flex-row items-center justify-around space-y-4 w-full m-auto">
        <div className="font-sankaran text-white lg:text-7xl text-4xl items-center ">
          BLITZSCHLAG
        </div>
        <div className=" bg-black opacity-80 backdrop-blur-md rounded-lg py-8 px-12">
          <p className="text-white text-2xl font-amita mb-4"> LOGIN</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default login;
