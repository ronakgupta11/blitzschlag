import React, { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import blitz_logo1 from "../../public/assets/blitz_logo2.png";
function Footer() {
  const [isMobile, setIsMobile] = useState(false);
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
  return (
    <div className="bg-[#140E00]">
      <div className="flex-col md:flex lg:flex  justify-center flex-wrap  lg:flex-row align-middle bg-[#140E00] py-[57px] gap-10">
        <div
          style={{
            borderRight: "solid white 1px",
          }}
          className="flex-col flex   align-middle  justify-start  lg:max-w-[25%]"
        >
          <div className="flex items-center justify-center align-middle">
            <Link href={"/"}>
              <Image width={200} src={blitz_logo1}></Image>
            </Link>
          </div>
          <div className="text-white text-center font-sankaran text-[16px]  leading-[44px]">
            BLITZSCHLAG’24
          </div>
        </div>

        <div
          style={{
            fontFamily: "BlackOpsOne",
            borderRight: "1px solid white",
          }}
          className="flex flex-col my-3  lg:gap-y-11 align-middle lg:max-w-[50%] "
        >
          <div className="text-white text-center font-sankaran text-[20px] lg:text-[40px] font-normal leading-[44px]">
            Quick Links
          </div>

          <div className=" flex align-middle lg:gap-y-4 gap-x-[12px] lg:gap-x-[74px] justify-center flex-wrap text-white text-center font-amita text-[12.5px] md:text-[20px] font-normal leading-[44px]">
            {/* <div className="text-center ">
              <Link className="text-center " href="/">
                Home
              </Link>
            </div> */}
            <div className="">
              <Link href="/events">Events</Link>
            </div>
            <div className="">
              <Link href="/about">About Us</Link>
            </div>

            <div className="">
              <Link href="/theme">Theme</Link>
            </div>
            <div className="">
              <Link href="/login">Register</Link>
            </div>
            <div className="">
              <Link href="/ambassadors">Campus Ambassador</Link>
            </div>
            <div className="">
              <Link href="/team">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[25%] ">
          <div className="flex lg:mt-[10px] justify-center gap-y-5 lg:gap-y-[68px]  align-middle flex-col text-white text-center font-BlackOpsOne md:text-[25px] text-[20px] font-normal">
            <div className="text-center font-sankaran">Connect With Us</div>
            <div className="flex justify-center">
              <div className=" flex align-middle justify-center w-[88px] h-[88px] flex-wrap gap-[40px]">
                <a
                  href="https://www.instagram.com/blitz_mnit?igsh=OThhczUxZG5yOTR2"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.0276 2C14.1526 2.003 14.7236 2.009 15.2166 2.023L15.4106 2.03C15.6346 2.038 15.8556 2.048 16.1226 2.06C17.1866 2.11 17.9126 2.278 18.5496 2.525C19.2096 2.779 19.7656 3.123 20.3216 3.678C20.8301 4.1779 21.2236 4.78259 21.4746 5.45C21.7216 6.087 21.8896 6.813 21.9396 7.878C21.9516 8.144 21.9616 8.365 21.9696 8.59L21.9756 8.784C21.9906 9.276 21.9966 9.847 21.9986 10.972L21.9996 11.718V13.028C22.0021 13.7574 21.9944 14.4868 21.9766 15.216L21.9706 15.41C21.9626 15.635 21.9526 15.856 21.9406 16.122C21.8906 17.187 21.7206 17.912 21.4746 18.55C21.2243 19.2178 20.8307 19.8226 20.3216 20.322C19.8216 20.8303 19.2169 21.2238 18.5496 21.475C17.9126 21.722 17.1866 21.89 16.1226 21.94C15.8853 21.9512 15.648 21.9612 15.4106 21.97L15.2166 21.976C14.7236 21.99 14.1526 21.997 13.0276 21.999L12.2816 22H10.9726C10.2429 22.0025 9.51312 21.9949 8.7836 21.977L8.5896 21.971C8.35221 21.962 8.11487 21.9517 7.8776 21.94C6.8136 21.89 6.0876 21.722 5.4496 21.475C4.78227 21.2244 4.17782 20.8309 3.6786 20.322C3.16965 19.8223 2.77582 19.2176 2.5246 18.55C2.2776 17.913 2.1096 17.187 2.0596 16.122C2.04846 15.8847 2.03846 15.6474 2.0296 15.41L2.0246 15.216C2.00617 14.4868 1.99784 13.7574 1.9996 13.028V10.972C1.99681 10.2426 2.00414 9.5132 2.0216 8.784L2.0286 8.59C2.0366 8.365 2.0466 8.144 2.0586 7.878C2.1086 6.813 2.2766 6.088 2.5236 5.45C2.77471 4.7819 3.16932 4.17702 3.6796 3.678C4.17869 3.16947 4.78274 2.77599 5.4496 2.525C6.0876 2.278 6.8126 2.11 7.8776 2.06C8.1436 2.048 8.3656 2.038 8.5896 2.03L8.7836 2.024C9.51279 2.00623 10.2422 1.99857 10.9716 2.001L13.0276 2ZM11.9996 7C10.6735 7 9.40175 7.52678 8.46407 8.46447C7.52638 9.40215 6.9996 10.6739 6.9996 12C6.9996 13.3261 7.52638 14.5979 8.46407 15.5355C9.40175 16.4732 10.6735 17 11.9996 17C13.3257 17 14.5975 16.4732 15.5351 15.5355C16.4728 14.5979 16.9996 13.3261 16.9996 12C16.9996 10.6739 16.4728 9.40215 15.5351 8.46447C14.5975 7.52678 13.3257 7 11.9996 7ZM11.9996 9C12.3936 8.99994 12.7837 9.07747 13.1477 9.22817C13.5117 9.37887 13.8424 9.5998 14.1211 9.87833C14.3997 10.1569 14.6207 10.4875 14.7715 10.8515C14.9224 11.2154 15 11.6055 15.0001 11.9995C15.0002 12.3935 14.9226 12.7836 14.7719 13.1476C14.6212 13.5116 14.4003 13.8423 14.1218 14.121C13.8432 14.3996 13.5126 14.6206 13.1486 14.7714C12.7847 14.9223 12.3946 14.9999 12.0006 15C11.205 15 10.4419 14.6839 9.87928 14.1213C9.31667 13.5587 9.0006 12.7957 9.0006 12C9.0006 11.2044 9.31667 10.4413 9.87928 9.87868C10.4419 9.31607 11.205 9 12.0006 9M17.2506 5.5C16.9191 5.5 16.6011 5.6317 16.3667 5.86612C16.1323 6.10054 16.0006 6.41848 16.0006 6.75C16.0006 7.08152 16.1323 7.39946 16.3667 7.63388C16.6011 7.8683 16.9191 8 17.2506 8C17.5821 8 17.9001 7.8683 18.1345 7.63388C18.3689 7.39946 18.5006 7.08152 18.5006 6.75C18.5006 6.41848 18.3689 6.10054 18.1345 5.86612C17.9001 5.6317 17.5821 5.5 17.2506 5.5Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  href="https://m.facebook.com/blitzschlagMNIT/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/blitzschlag-mnit-8a897a2a8/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@blitzschlagmnit3592?si=DBv0JypcSmMzytSl"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_27_6124)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.161 4.35628 20.0004 4.73695 20.6395 5.36304C21.2786 5.98913 21.6764 6.82054 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864C21.79 16.01 21.777 16.151 21.763 16.289C21.6764 17.1796 21.2784 18.0112 20.6391 18.6373C19.9999 19.2634 19.1602 19.6439 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9794 12.861 19.9987 12 20C11.139 19.9987 10.2782 19.9794 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83895 19.6437 3.99955 19.2631 3.36047 18.637C2.72139 18.0109 2.32357 17.1795 2.237 16.289L2.197 15.864L2.122 14.954C2.04554 13.9711 2.00484 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136C2.21 7.99 2.223 7.849 2.237 7.711C2.32354 6.8207 2.72122 5.98942 3.36009 5.36334C3.99897 4.73727 4.83813 4.3565 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02063 11.1387 4.0013 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_27_6124">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
