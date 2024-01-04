import React, { useEffect } from "react";
import LoginForm from "@/components/loginForm";
import { selectAuthenticated } from "@/redux/reducers/userReducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
// import "./styles/login.css"
import img from "../../public/assets/login/Image.jpg";
// import img1 from "../../public/assets/img2.png";
// import img2 from "../../public/assets/img3.png";
// import img3 from "../../public/assets/img4.png";
// import img4 from "../../public/assets/img5.png";
// import Login from '@/components/Login'
function login() {
  const router = useRouter();
  const auth = useSelector(selectAuthenticated);
  // const imgArr = [img0, img1, img2, img3, img4];
  // const num = Math.floor(Math.random() * 5) % 5

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
      >

      </div>

      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#070707] opacity-70 to-transparent z-10"></div>
      <div className=" absolute my-10  overfolw-x-hidden h-full overflow-y-auto z-10  py-12 flex flex-col lg:flex-row items-center justify-around space-y-4 w-full m-auto">
        <div className="font-sankaran text-white lg:text-7xl text-4xl items-center ">
          BLITZSCHLAG
        </div>
        <div className=" bg-black opacity-80 backdrop-blur-md rounded-lg p-8">
          <p className="text-white text-xl font-amita my-4"> LOGIN</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default login;
