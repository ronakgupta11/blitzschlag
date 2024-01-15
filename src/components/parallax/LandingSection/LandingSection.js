import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import blitz from "../../../../public/assets/blitz.png"
// import blitz from "../../../../public/assets/blitz_ani.gif"

import classes from './LandingSection.module.css'

import bottomCloud from "../../../../public/assets/home/page1/cloudsbottom.png"
import topCloud from "../../../../public/assets/home/page1/cloudstop.png"
import sun from "../../../../public/assets/home/page1/sun.png"


function LandingSection() {
    return (
        <div className={`${classes.root} h-[80vh] md:h-screen relative overflow-hidden`}>
            <motion.div
                initial={{ y: 100 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 2, delay: 0 }} 
                className='absolute bottom-0 w-screen z-10'
            >
                <Image className='w-screen h-[30vh] md:h-auto' src={bottomCloud} />
            </motion.div>
            <motion.div className='font-amita z-20 text-3xl text-center mt-20 md:mt-8 text-[#2e0d02] font-semibold'>
                Malaviya National Institute Of Technology<br/>
                <p className='text-lg'>presents</p>
            </motion.div>
            <div className='absolute font-sankaran z-20'>
                <motion.div className="flex items-center justify-center md:h-screen"
                    initial={{ y: 400, scale: 1 }} 
                    animate={{ y: 0 }} 
                    transition={{ duration: 2, delay: 0 }}
                >
                    <Image className='md:w-[70%] w-full ' src={blitz}></Image>
                </motion.div>
            </div>
            <motion.div
                initial={{ y: 70 }} 
                animate={{ y: 0 }} 
                transition={{ duration: 2, delay: 0 }} 
                className={`${classes.bcloudgrad} absolute bottom-0 w-screen z-[25]`}
            >
                <Image className='w-screen h-[20vh] md:h-auto' src={topCloud} />
            </motion.div>
            <motion.div className="flex items-center justify-center h-screen"
                initial={{ y: 0, scale: 0.3 }} 
                animate={{ y: 100, scale: 2 }} 
                transition={{ duration: 1.7, delay: 0 }}>

                <Image className='w-50' src={sun} />
            </motion.div>
        </div>
    )
}
export default LandingSection;


