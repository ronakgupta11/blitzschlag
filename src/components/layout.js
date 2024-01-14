import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { IoMdVolumeOff ,IoMdVolumeHigh} from "react-icons/io";
import { useState,useRef } from "react";
function Layout({ children }) {
//   const [isMuted, setIsMuted] = useState(false);
//   const audioRef = useRef(null);
//   const audio = audioRef.current;

  
//   function toggleMute() {

//     if (audio.paused) {
//         audio.play();
//     } else {
//         audio.pause();
//     }
//     setIsMuted(!audio.paused);
// }

// useEffect(() => {
//   const audio = audioRef.current;

//   // Play audio on website load
//   audio.play().catch((error) => {
//     // Handle play error, for example, autoplay may be blocked by the browser
//     console.error("Audio play error:", error);
//   });

//   return () => {
//     // Cleanup: Pause audio when the component unmounts
//     audio.pause();
//   };
// }, []);

  return (
    <ParallaxProvider>
      <div className="layout ">
        {/* <div className="sidebar fixed z-[9999999]  "><Sidebar/></div> */}
        <div className="h-[80px] z-[999]">
        <Navbar/>
        </div>
        <div className="content flex-1 relative w-full ">{children}</div>
        {/* <audio ref={audioRef} id="soundEffect" loop>
    <source src="/song.mp3" type="audio/mp3"/>
        </audio> */}
        {/* <button onClick={toggleMute} className="btn btn-circle fixed bottom-10 left-10 z-[999]">{isMuted?<IoMdVolumeOff size={20}/>:<IoMdVolumeHigh size={20}/>}</button> */}
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default Layout;
