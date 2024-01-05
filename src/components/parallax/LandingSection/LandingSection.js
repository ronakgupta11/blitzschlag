import React from 'react'
import Image from 'next/image'
import Archway from './Archway'

import classes from './LandingSection.module.css'


function LandingSection() {
    return (
        <div className={`${classes.root} h-screen relative`}>
            <div className='font-sankaran w-screen'>
            <div class="flex items-center justify-center h-screen"> 
                <h1 className={`${classes.maintext} text-center text-23xl`}>blitzschlag'24</h1>
</div>
            </div>
        </div>
    )
}
export default LandingSection

