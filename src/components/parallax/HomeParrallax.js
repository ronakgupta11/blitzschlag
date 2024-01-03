import React, { useRef } from 'react'
import {motion,useScroll,useTransform} from "framer-motion"
import image1 from "../../../public/assets/events/header.jpg"
import image2 from "../../../public/assets/sponsors/header.png"
function HomeParrallax() {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start" ,"end start" ]
    })
    const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
console.log(scrollYProgress)
  return (
    <div
    ref={ref} className='w-full h-screen relative flex items-center  overflow-hidden'>
        <motion.div
        className='absolute inset-0'
        animate={{ opacity: opacity1 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{
            backgroundImage:`url(${image1.src})`,
            backgroundSize:"cover",
            backgroundPosition: "bottom"
        }}
        
        />
        <motion.div  
        className='absolute inset-0 '
        animate={{ opacity: opacity2 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{
            backgroundImage:`url(${image2.src})`,
            backgroundSize:"cover",
            backgroundPosition: "bottom"
        }}
        
        />

        
    </div>
  )
}

export default HomeParrallax