import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => {
    const handleResize = () => {
      const isMobileScreen = window.innerWidth < 768; // You can adjust the threshold as needed
      setIsMobile(isMobileScreen);
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  
  return (
    <div className="nav py-3 w-full flex bg-[#0A0A0A] opacity-[0.85]">
      { 
        
        <ul className={`w-full flex ${isMobile?"justify-between":"justify-evenly"} align-middle ${isMobile?"px-5":""} text-white text-center font-black-ops-one text-[16px]  font-normal leading-[44px]`} >
          <li className="w-[15%]">
            Logo
          </li>
          { 
            !isMobile &&
           
              <div className="flex justify-evenly w-[70%]">
            <li className={pathname === '/' ? 'active' : ''} >
            <a href="/">Home</a>
          </li>
          <li className={pathname === '/events' ? 'active' : ''}>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/ambassadors">Ambassadors</a>
          </li>
          <li>
            <a href="/team">Our Team</a>
          </li>
          
          </div>
         
            }
          
          <li className="w-[10%] flex flex-col align-middle justify-center ">
            { isMobile &&
              <svg
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
              <rect y="7.2002" width="32" height="3.2" rx="1.6" fill="white" />
            </svg>}
            
          </li>
       
          {
              !isMobile &&
              <li className="flex flex-col justify-center align-middle mr-4">
            <button className="bg-[#463000] btn-sm lg:btn text-white lg:px-6 text-center flex flex-col justify-center align-middle rounded-full">
              
               <a href="/register"> Register</a>
            
            </button>
          </li>
            }
          
        </ul>
      }

      {/* SideBar component */}
     {isMobile && <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 black-gradient bg-[#0A0A0A] absolute top-0 right-0 h-screen justify-start align-top   min-w-[140px] z-10  `}
      >
        <ul className="list-none flex flex-col  items-start justify-start gap-4  text-white text-center font-black-ops-one text-[16px]  font-normal leading-[44px]">
          <li></li>
          <li className="flex flex-col align-middle justify-center ">
            <svg
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
              <rect y="7.2002" width="32" height="3.2" rx="1.6" fill="white" />
            </svg>
          </li>
          <li className={pathname === '/' ? '' : ''}>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li className={pathname === '/ambassadors' ? 'active' : ''}>
            <a href="/ambassadors">Ambassadors</a>
          </li>
          <li className="flex flex-col justify-center align-middle">
            <button className="bg-[#463000] btn-sm lg:btn text-white lg:px-6 text-center flex flex-col justify-center align-middle rounded-full">
              <a className="text-[16px]" href="/register">
                Register
              </a>
            </button>
          </li>
        </ul>
      </div>}
    </div>
  );
}
         

export default Navbar;
