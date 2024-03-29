import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import blitz_logo1 from "../../public/assets/blitz_logo2.png";
import Mnit_logo from "../../public/assets/Mnit_logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAuthenticated } from "@/redux/reducers/userReducer";

function Navbar() {
  const auth = useSelector(selectAuthenticated);
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useRouter();
  const [visible, setVisible] = useState(true);
  let timeoutId;
  // useEffect(()=>{
  //   setTimeout(()=>{
  //     if(visible)
  //     {
  //       setVisible(false)
  //     }
  //   },5000)
  // },[visible])
  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 768; // You can adjust the threshold as needed
      setIsMobile(isMobileScreen);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (toggle) setToggle(!toggle);
  }, [pathname]);

  return (
    <>
      {
        <div
          onMouseOver={() => {
            clearTimeout(timeoutId);
            setVisible(true);
          }}
          onMouseOut={() => {
            timeoutId = setTimeout(() => {
              setVisible(false);
            }, 3000);
          }}
          style={{
            transition: "opacity 0.3s ease", // Adjust the duration and easing function as needed
          }}
          className={` nav flex z-[999] py-2 w-full  bg-[#0A0A0A]  absolute top-0  overflow-x-clip`}
        >
          {
            <ul
              className={`w-full flex ${
                isMobile ? "justify-between" : "justify-evenly"
              } align-middle ${
                isMobile ? "px-5" : ""
              } text-white text-center font-amita text-[16px]  font-normal leading-[44px]`}
            >
              <li className="sm:w-[15%]  sm:px-6 gap-2 items-center flex align-middle">
                <Image
                  className="fit-cover "
                  style={{ width: "50px", height: "50px" }}
                  src={Mnit_logo}
                ></Image>
                <Image
                  className="fit-cover"
                  style={{ width: "60px", height: "60px" }}
                  src={blitz_logo1}
                ></Image>

                <div className="flex flex-col justify-center text-[16px] sm:text-[25px]">
                  <Link href="/">Blitzschlag</Link>
                </div>
              </li>
              {!isMobile && (
                <div className="flex justify-evenly w-[70%]">
                  <li
                    className={
                      pathname === "/events"
                        ? "active flex flex-col justify-center"
                        : "flex flex-col justify-center"
                    }
                  >
                    <Link href="/events">Events</Link>
                  </li>
                  <li
                    className={
                      pathname === "/ambassadors"
                        ? "active flex flex-col justify-center"
                        : "flex flex-col justify-center"
                    }
                  >
                    <Link href="/ambassadors">Ambassadors</Link>
                  </li>
                  <li
                    className={
                      pathname === "/passes"
                        ? "active flex flex-col justify-center"
                        : "flex flex-col justify-center"
                    }
                  >
                    <Link href="/passes">Passes</Link>
                  </li>

                  <li
                    className={
                      pathname === "/profile"
                        ? "active flex flex-col justify-center"
                        : "flex flex-col justify-center"
                    }
                  >
                    <Link href={auth ? "/profile" : "/login"}>
                      {auth ? "Profile" : "Login/Register"}
                    </Link>
                  </li>
                </div>
              )}

              <li className="w-[10%] flex flex-col align-middle justify-center ">
                {!toggle && (
                  <svg
                    className="hover:cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="18"
                    viewBox="0 0 32 18"
                    fill="none"
                  >
                    <rect width="16" height="3.2" rx="1.6" fill="white" />
                    <rect
                      x="16"
                      y="14.4004"
                      width="16"
                      height="3.2"
                      rx="1.6"
                      fill="white"
                    />
                    <rect
                      y="7.2002"
                      width="32"
                      height="3.2"
                      rx="1.6"
                      fill="white"
                    />
                  </svg>
                )}
              </li>

              {/* {!isMobile && (
            <li className="flex items-center gap-3  justify-center align-middle mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
                  fill="white"
                />
              </svg>
              <Link href={"/login"}>Register</Link>
            </li>
          )} */}
            </ul>
          }

          {/* SideBar component */}
          <AnimatePresence mode="wait">
            <motion.div
              className={`${"flex"} p-6   rounded-l-[40px] h-[600px] overflow-hidden font-amita  absolute top-0 right-0  justify-start align-top   min-w-[140px]   `}
              style={{
                borderLeft: "2px solid white",
                background:
                  "linear-gradient(90deg, #934505 0%, rgba(147, 69, 5, 0.00) 575.21%)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: toggle ? "0%" : "100%" }}
              transition={{ duration: 0.5 }}
              exit={{ x: "100%" }}
            >
              <motion.ul
                className="list-none flex flex-col h-full  items-start justify-start gap-4  text-white text-center font-amita text-[16px]  font-normal leading-[44px]"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.6, // Delay before the revealing effect starts
                      staggerChildren: 0.1, // Stagger between each list item
                    },
                  },
                }}
              >
                <motion.li
                  className="
             
            flex  align-middle justify-start  w-full "
                >
                  <svg
                    className="hover:cursor-pointer"
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="white"
                  >
                    <path
                      d="M11.1998 22.668L15.9998 17.868L20.7998 22.668L22.6665 20.8013L17.8665 16.0013L22.6665 11.2013L20.7998 9.33464L15.9998 14.1346L11.1998 9.33464L9.33317 11.2013L14.1332 16.0013L9.33317 20.8013L11.1998 22.668ZM15.9998 29.3346C14.1554 29.3346 12.4221 28.9844 10.7998 28.284C9.17762 27.5835 7.7665 26.6337 6.5665 25.4346C5.3665 24.2346 4.41673 22.8235 3.71717 21.2013C3.01762 19.5791 2.66739 17.8457 2.6665 16.0013C2.6665 14.1569 3.01673 12.4235 3.71717 10.8013C4.41762 9.17908 5.36739 7.76797 6.5665 6.56797C7.7665 5.36797 9.17762 4.41819 10.7998 3.71864C12.4221 3.01908 14.1554 2.66886 15.9998 2.66797C17.8443 2.66797 19.5776 3.01819 21.1998 3.71864C22.8221 4.41908 24.2332 5.36886 25.4332 6.56797C26.6332 7.76797 27.5834 9.17908 28.2838 10.8013C28.9843 12.4235 29.3341 14.1569 29.3332 16.0013C29.3332 17.8457 28.9829 19.5791 28.2825 21.2013C27.5821 22.8235 26.6323 24.2346 25.4332 25.4346C24.2332 26.6346 22.8221 27.5849 21.1998 28.2853C19.5776 28.9857 17.8443 29.3355 15.9998 29.3346Z"
                      fill="white"
                    />
                  </svg>
                </motion.li>
                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`
              ${
                pathname === "/" ? "bg-[#FCF2D9] text-[#934505] rounded-md" : ""
              }
             flex items-center pl-3 gap-5 justify-start  align-middle w-full `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="white"
                  >
                    <path
                      d="M4.5835 12.1592C4.5835 10.9143 4.5835 10.2919 4.83466 9.74467C5.08675 9.19742 5.55883 8.79317 6.50391 7.98283L7.42058 7.19725C9.13016 5.73333 9.98266 5 11.0002 5C12.0177 5 12.8711 5.73242 14.5797 7.19633L15.4964 7.98192C16.4406 8.79225 16.9136 9.1965 17.1647 9.74375C17.4168 10.291 17.4168 10.9134 17.4168 12.1583V16.0458C17.4168 17.7747 17.4168 18.6382 16.8797 19.1753C16.3425 19.7125 15.479 19.7125 13.7502 19.7125H8.25016C6.52133 19.7125 5.65783 19.7125 5.12066 19.1753C4.5835 18.6382 4.5835 17.7747 4.5835 16.0458V12.1592Z"
                      stroke="#934505"
                      stroke-width="2"
                    />
                    <path
                      d="M13.2918 19.7109V15.1276C13.2918 14.8845 13.1953 14.6513 13.0233 14.4794C12.8514 14.3075 12.6183 14.2109 12.3752 14.2109H9.62516C9.38205 14.2109 9.14889 14.3075 8.97698 14.4794C8.80507 14.6513 8.7085 14.8845 8.7085 15.1276V19.7109"
                      stroke="#934505"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <Link href="/">Home</Link>
                </motion.li>
                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ scale: 1.1 }}
                  className={`
               ${
                 pathname === "/events"
                   ? "bg-[#FCF2D9] text-[#934505] rounded-md"
                   : ""
               }
              flex items-center pl-3 gap-5 justify-start  align-middle w-full `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M9.1665 18.3333C9.1665 18.8196 9.35966 19.2859 9.70348 19.6297C10.0473 19.9735 10.5136 20.1667 10.9998 20.1667C11.4861 20.1667 11.9524 19.9735 12.2962 19.6297C12.64 19.2859 12.8332 18.8196 12.8332 18.3333M9.1665 18.3333C9.1665 17.8471 9.35966 17.3808 9.70348 17.037C10.0473 16.6932 10.5136 16.5 10.9998 16.5C11.4861 16.5 11.9524 16.6932 12.2962 17.037C12.64 17.3808 12.8332 17.8471 12.8332 18.3333M9.1665 18.3333H3.6665M12.8332 18.3333H18.3332M10.9998 13.75L9.1665 11.9167H6.4165C6.17339 11.9167 5.94023 11.8201 5.76832 11.6482C5.59641 11.4763 5.49984 11.2431 5.49984 11V3.66667C5.49984 3.42355 5.59641 3.19039 5.76832 3.01849C5.94023 2.84658 6.17339 2.75 6.4165 2.75H15.5832C15.8263 2.75 16.0594 2.84658 16.2314 3.01849C16.4033 3.19039 16.4998 3.42355 16.4998 3.66667V11C16.4998 11.2431 16.4033 11.4763 16.2314 11.6482C16.0594 11.8201 15.8263 11.9167 15.5832 11.9167H12.8332L10.9998 13.75Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke={`${pathname == "/events" ? "#934505" : "white"}`}
                    />
                  </svg>
                  <Link href="/events">Events</Link>
                </motion.li>

                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  className={`
               ${
                 pathname === "/about"
                   ? "bg-[#FCF2D9] text-[#934505] rounded-md"
                   : ""
               }
              flex items-center pl-3 gap-5 justify-start  align-middle w-full `}
                >
                 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="22"
                    height="22"
                    viewBox="0 0 50 50"
                  >
                    <path 
                     fill={`${pathname == "/about" ? "#934505" : "white"}`}
                    d="M 25 1 C 11.214844 1 0 10.960938 0 23.199219 C 0 29.113281 2.574219 34.644531 7.261719 38.835938 C 6.394531 41.394531 4.171875 43.15625 2.519531 44.464844 C 1.003906 45.664063 -0.09375 46.53125 0.234375 47.757813 L 0.339844 48.160156 L 0.699219 48.367188 C 1.609375 48.886719 2.820313 49.152344 4.308594 49.152344 C 9.257813 49.152344 16.371094 46.3125 19.503906 44.945313 C 21.285156 45.316406 23.054688 45.5 24.898438 45.5 C 38.6875 45.5 49.898438 35.539063 49.898438 23.300781 C 49.898438 11.003906 38.730469 1 25 1 Z M 26.601563 34 C 26.601563 34.199219 26.5 34.398438 26.199219 34.398438 L 23.902344 34.398438 L 23.902344 34.300781 C 23.699219 34.300781 23.5 34.199219 23.5 33.902344 L 23.5 20.5 C 23.5 20.300781 23.601563 20.101563 23.902344 20.101563 L 26.199219 20.101563 C 26.402344 20.101563 26.601563 20.199219 26.601563 20.5 Z M 26.601563 15.800781 C 26.601563 16 26.5 16.199219 26.199219 16.199219 L 23.800781 16.199219 C 23.601563 16.199219 23.402344 16.101563 23.402344 15.800781 L 23.402344 13.199219 C 23.402344 13 23.5 12.800781 23.800781 12.800781 L 26.199219 12.800781 C 26.402344 12.800781 26.601563 12.898438 26.601563 13.199219 Z"></path>
                  </svg>

                  <Link href="/about">About Us</Link>
                </motion.li>

                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  whileHover={{ scale: 1.1 }}
                  className={`
               ${
                 pathname === "/ambassadors"
                   ? "bg-[#FCF2D9] text-[#934505] rounded-md"
                   : ""
               }
              flex items-center pl-3 gap-5 justify-start  align-middle w-full `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M8.25016 10.0833C8.97536 10.0833 9.68427 9.86829 10.2873 9.46539C10.8902 9.06249 11.3602 8.48984 11.6377 7.81984C11.9152 7.14985 11.9879 6.4126 11.8464 5.70134C11.7049 4.99007 11.3557 4.33674 10.8429 3.82394C10.3301 3.31115 9.67676 2.96193 8.96549 2.82046C8.25423 2.67898 7.51699 2.75159 6.84699 3.02911C6.17699 3.30663 5.60434 3.7766 5.20144 4.37958C4.79854 4.98256 4.5835 5.69147 4.5835 6.41667C4.5835 7.38913 4.9698 8.32176 5.65744 9.00939C6.34507 9.69703 7.2777 10.0833 8.25016 10.0833ZM8.25016 4.58333C8.61276 4.58333 8.96722 4.69086 9.26871 4.89231C9.5702 5.09376 9.80518 5.38008 9.94394 5.71508C10.0827 6.05008 10.119 6.4187 10.0483 6.77433C9.97753 7.12997 9.80292 7.45663 9.54653 7.71303C9.29013 7.96943 8.96346 8.14404 8.60783 8.21478C8.2522 8.28551 7.88357 8.24921 7.54858 8.11045C7.21358 7.97169 6.92725 7.7367 6.7258 7.43521C6.52435 7.13372 6.41683 6.77927 6.41683 6.41667C6.41683 5.93044 6.60998 5.46412 6.9538 5.12031C7.29762 4.77649 7.76393 4.58333 8.25016 4.58333ZM15.5835 11.9167C16.1274 11.9167 16.6591 11.7554 17.1113 11.4532C17.5635 11.151 17.916 10.7215 18.1242 10.219C18.3323 9.71655 18.3868 9.16362 18.2807 8.63017C18.1745 8.09672 17.9126 7.60672 17.528 7.22213C17.1434 6.83753 16.6534 6.57562 16.12 6.46951C15.5865 6.3634 15.0336 6.41786 14.5311 6.626C14.0286 6.83414 13.5991 7.18661 13.297 7.63885C12.9948 8.09109 12.8335 8.62277 12.8335 9.16667C12.8335 9.89601 13.1232 10.5955 13.639 11.1112C14.1547 11.6269 14.8542 11.9167 15.5835 11.9167ZM15.5835 8.25C15.7648 8.25 15.942 8.30376 16.0928 8.40449C16.2435 8.50521 16.361 8.64838 16.4304 8.81588C16.4998 8.98337 16.5179 9.16769 16.4825 9.3455C16.4472 9.52332 16.3599 9.68665 16.2317 9.81485C16.1035 9.94305 15.9401 10.0304 15.7623 10.0657C15.5845 10.1011 15.4002 10.0829 15.2327 10.0136C15.0652 9.94418 14.922 9.82669 14.8213 9.67594C14.7206 9.5252 14.6668 9.34797 14.6668 9.16667C14.6668 8.92355 14.7634 8.6904 14.9353 8.51849C15.1072 8.34658 15.3404 8.25 15.5835 8.25ZM15.5835 12.8333C14.5677 12.8345 13.581 13.173 12.7785 13.7958C11.8806 12.9015 10.738 12.293 9.49483 12.0472C8.25162 11.8014 6.96346 11.9292 5.79279 12.4145C4.62212 12.8999 3.62137 13.721 2.91676 14.7743C2.21214 15.8277 1.83521 17.0661 1.8335 18.3333C1.8335 18.5765 1.93007 18.8096 2.10198 18.9815C2.27389 19.1534 2.50705 19.25 2.75016 19.25C2.99328 19.25 3.22644 19.1534 3.39834 18.9815C3.57025 18.8096 3.66683 18.5765 3.66683 18.3333C3.66683 17.1178 4.14971 15.952 5.00926 15.0924C5.8688 14.2329 7.03459 13.75 8.25016 13.75C9.46574 13.75 10.6315 14.2329 11.4911 15.0924C12.3506 15.952 12.8335 17.1178 12.8335 18.3333C12.8335 18.5765 12.9301 18.8096 13.102 18.9815C13.2739 19.1534 13.507 19.25 13.7502 19.25C13.9933 19.25 14.2264 19.1534 14.3983 18.9815C14.5703 18.8096 14.6668 18.5765 14.6668 18.3333C14.669 17.2594 14.3977 16.2026 13.8785 15.2625C14.2836 14.9424 14.7706 14.7428 15.2839 14.6865C15.7971 14.6303 16.3158 14.7196 16.7806 14.9444C17.2454 15.1692 17.6376 15.5202 17.9122 15.9574C18.1868 16.3947 18.3328 16.9004 18.3335 17.4167C18.3335 17.6598 18.4301 17.8929 18.602 18.0649C18.7739 18.2368 19.007 18.3333 19.2502 18.3333C19.4933 18.3333 19.7264 18.2368 19.8983 18.0649C20.0703 17.8929 20.1668 17.6598 20.1668 17.4167C20.1668 16.2011 19.6839 15.0353 18.8244 14.1758C17.9649 13.3162 16.7991 12.8333 15.5835 12.8333Z"
                      fill={`${
                        pathname == "/ambassadors" ? "#934505" : "white"
                      }`}
                    />
                  </svg>
                  <Link href="/ambassadors">Campus Ambassadors</Link>
                </motion.li>
                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  whileHover={{ scale: 1.1 }}
                  className={`
               ${
                 pathname === "/sponsors"
                   ? "bg-[#FCF2D9] text-[#934505] rounded-md"
                   : ""
               }
              flex items-center pl-3 gap-5 justify-start  align-middle w-full `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M21.8831 9.18913L21.1956 7.99837L19.25 9.12175V6.875H17.875V9.12175L15.9294 7.99837L15.2419 9.18913L17.1875 10.3125L15.2419 11.4359L15.9294 12.6266L17.875 11.5033V13.75H19.25V11.5033L21.1956 12.6266L21.8831 11.4359L19.9375 10.3125L21.8831 9.18913ZM15.125 20.625H13.75V17.1875C13.7489 16.2762 13.3864 15.4024 12.742 14.758C12.0976 14.1136 11.2238 13.7511 10.3125 13.75H6.1875C5.27615 13.7511 4.40245 14.1136 3.75803 14.758C3.11361 15.4024 2.75109 16.2762 2.75 17.1875V20.625H1.375V17.1875C1.37646 15.9116 1.88395 14.6884 2.78616 13.7862C3.68836 12.884 4.91159 12.3765 6.1875 12.375H10.3125C11.5884 12.3765 12.8116 12.884 13.7138 13.7862C14.616 14.6884 15.1235 15.9116 15.125 17.1875V20.625ZM8.25 2.75C9.16168 2.75 10.036 3.11216 10.6807 3.75682C11.3253 4.40148 11.6875 5.27582 11.6875 6.1875C11.6875 7.09918 11.3253 7.97352 10.6807 8.61818C10.036 9.26284 9.16168 9.625 8.25 9.625C7.33832 9.625 6.46398 9.26284 5.81932 8.61818C5.17466 7.97352 4.8125 7.09918 4.8125 6.1875C4.8125 5.27582 5.17466 4.40148 5.81932 3.75682C6.46398 3.11216 7.33832 2.75 8.25 2.75ZM8.25 1.375C6.97365 1.375 5.74957 1.88203 4.84705 2.78455C3.94453 3.68707 3.4375 4.91115 3.4375 6.1875C3.4375 7.46385 3.94453 8.68793 4.84705 9.59045C5.74957 10.493 6.97365 11 8.25 11C9.52635 11 10.7504 10.493 11.653 9.59045C12.5555 8.68793 13.0625 7.46385 13.0625 6.1875C13.0625 4.91115 12.5555 3.68707 11.653 2.78455C10.7504 1.88203 9.52635 1.375 8.25 1.375Z"
                      fill={`${pathname == "/sponsors" ? "#934505" : "white"}`}
                    />
                  </svg>
                  <Link href="/sponsors">Sponsors</Link>
                </motion.li>
                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className={`
               ${
                 pathname === "/team"
                   ? "bg-[#FCF2D9] text-[#934505] rounded-md"
                   : ""
               }
              flex items-center pl-3 gap-5 justify-start  align-middle w-full `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11.0002 10.082C12.2157 10.082 13.3815 10.5649 14.2411 11.4245C15.1006 12.284 15.5835 13.4498 15.5835 14.6654V20.1654H13.7502V14.6654C13.7502 13.9639 13.4822 13.289 13.001 12.7786C12.5198 12.2683 11.8617 11.9611 11.1615 11.9199L11.0002 11.9154C10.2987 11.9153 9.62377 12.1833 9.11342 12.6645C8.60307 13.1458 8.2959 13.8038 8.25475 14.504L8.25016 14.6654V20.1654H6.41683V14.6654C6.41683 13.4498 6.89971 12.284 7.75926 11.4245C8.6188 10.5649 9.78459 10.082 11.0002 10.082ZM5.04183 12.832C5.29758 12.832 5.546 12.8623 5.78433 12.9182C5.62761 13.3848 5.5348 13.8705 5.50841 14.3619L5.50016 14.6654V14.7442C5.39479 14.7065 5.2852 14.6819 5.17383 14.6709L5.04183 14.6654C4.70016 14.6654 4.37073 14.7926 4.11773 15.0222C3.86473 15.2518 3.70627 15.5674 3.67325 15.9074L3.66683 16.0404V20.1654H1.8335V16.0404C1.8335 15.1895 2.17152 14.3734 2.7732 13.7717C3.37487 13.1701 4.19093 12.832 5.04183 12.832ZM16.9585 12.832C17.8094 12.832 18.6255 13.1701 19.2271 13.7717C19.8288 14.3734 20.1668 15.1895 20.1668 16.0404V20.1654H18.3335V16.0404C18.3335 15.6987 18.2063 15.3693 17.9767 15.1163C17.7471 14.8633 17.4315 14.7048 17.0914 14.6718L16.9585 14.6654C16.7981 14.6654 16.6441 14.6929 16.5002 14.7433V14.6654C16.5002 14.0549 16.4012 13.4682 16.2178 12.92C16.4543 12.8623 16.7037 12.832 16.9585 12.832ZM5.04183 7.33203C5.64962 7.33203 6.23251 7.57347 6.66228 8.00324C7.09205 8.43302 7.3335 9.01591 7.3335 9.6237C7.3335 10.2315 7.09205 10.8144 6.66228 11.2442C6.23251 11.6739 5.64962 11.9154 5.04183 11.9154C4.43404 11.9154 3.85115 11.6739 3.42138 11.2442C2.99161 10.8144 2.75016 10.2315 2.75016 9.6237C2.75016 9.01591 2.99161 8.43302 3.42138 8.00324C3.85115 7.57347 4.43404 7.33203 5.04183 7.33203ZM16.9585 7.33203C17.5663 7.33203 18.1492 7.57347 18.5789 8.00324C19.0087 8.43302 19.2502 9.01591 19.2502 9.6237C19.2502 10.2315 19.0087 10.8144 18.5789 11.2442C18.1492 11.6739 17.5663 11.9154 16.9585 11.9154C16.3507 11.9154 15.7678 11.6739 15.338 11.2442C14.9083 10.8144 14.6668 10.2315 14.6668 9.6237C14.6668 9.01591 14.9083 8.43302 15.338 8.00324C15.7678 7.57347 16.3507 7.33203 16.9585 7.33203ZM5.04183 9.16536C4.92027 9.16536 4.80369 9.21365 4.71774 9.29961C4.63178 9.38556 4.5835 9.50214 4.5835 9.6237C4.5835 9.74526 4.63178 9.86183 4.71774 9.94779C4.80369 10.0337 4.92027 10.082 5.04183 10.082C5.16339 10.082 5.27997 10.0337 5.36592 9.94779C5.45187 9.86183 5.50016 9.74526 5.50016 9.6237C5.50016 9.50214 5.45187 9.38556 5.36592 9.29961C5.27997 9.21365 5.16339 9.16536 5.04183 9.16536ZM16.9585 9.16536C16.8369 9.16536 16.7204 9.21365 16.6344 9.29961C16.5485 9.38556 16.5002 9.50214 16.5002 9.6237C16.5002 9.74526 16.5485 9.86183 16.6344 9.94779C16.7204 10.0337 16.8369 10.082 16.9585 10.082C17.0801 10.082 17.1966 10.0337 17.2826 9.94779C17.3685 9.86183 17.4168 9.74526 17.4168 9.6237C17.4168 9.50214 17.3685 9.38556 17.2826 9.29961C17.1966 9.21365 17.0801 9.16536 16.9585 9.16536ZM11.0002 1.83203C11.9726 1.83203 12.9053 2.21834 13.5929 2.90597C14.2805 3.59361 14.6668 4.52624 14.6668 5.4987C14.6668 6.47116 14.2805 7.40379 13.5929 8.09142C12.9053 8.77906 11.9726 9.16536 11.0002 9.16536C10.0277 9.16536 9.09507 8.77906 8.40744 8.09142C7.7198 7.40379 7.3335 6.47116 7.3335 5.4987C7.3335 4.52624 7.7198 3.59361 8.40744 2.90597C9.09507 2.21834 10.0277 1.83203 11.0002 1.83203ZM11.0002 3.66536C10.5139 3.66536 10.0476 3.85852 9.7038 4.20234C9.35998 4.54615 9.16683 5.01247 9.16683 5.4987C9.16683 5.98493 9.35998 6.45124 9.7038 6.79506C10.0476 7.13888 10.5139 7.33203 11.0002 7.33203C11.4864 7.33203 11.9527 7.13888 12.2965 6.79506C12.6403 6.45124 12.8335 5.98493 12.8335 5.4987C12.8335 5.01247 12.6403 4.54615 12.2965 4.20234C11.9527 3.85852 11.4864 3.66536 11.0002 3.66536Z"
                      fill={`${pathname == "/team" ? "#934505" : "white"}`}
                    />
                  </svg>
                  <Link href="/team">Our Team</Link>
                </motion.li>
                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  whileHover={{ scale: 1.1 }}
                  className={`
               ${
                 pathname === "/passes"
                   ? "bg-[#FCF2D9] text-[#934505] rounded-md"
                   : ""
               }
              flex items-center pl-3 gap-5 justify-start  align-middle w-full `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 4L10 20"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="5 5"
                    />
                  </svg>
                  <Link href="/passes">Passes And Accomodation</Link>
                </motion.li>
                <motion.li
                  initial={{ x: "-30px" }}
                  animate={{ x: toggle ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ justiySelf: "flex-end" }}
                  className={`
               ${
                 pathname == "/profile"
                   ? "bg-[#FCF2D9] text-[#934505] rounded-md"
                   : ""
               }
              flex items-center self-end  pl-3 gap-5 justify-start  align-middle w-full `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
                      fill={`${pathname == "/profile" ? "#934505" : "white"}`}
                    />
                  </svg>
                  <Link href={auth ? "/profile" : "/login"}>
                    {auth ? "Profile" : "Login/Register"}
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      }
    </>
  );
}

export default Navbar;
