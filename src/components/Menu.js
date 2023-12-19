import React from 'react'
import { useState } from 'react'
function Menu() {
    const [expand,setExpand]=useState(false);
    const changeExpand=()=>{
       setExpand(true)
    }
  return (
    <>
    {!expand && <div class="absolute top-[92px] left-32 border-1 border-white h-borderh w-56 rounded-lg text-white backdrop-blur-3xl flex-shrink-0 bg-x font-black-ops-one"  onMouseOverCapture={changeExpand}>
        <img
        className="absolute w-[24px] h-[24px] top-[40px] left-[12px]  object-cover"
        alt=""
        src="/lets-icons_home.png"
        />
        <img
        className="absolute w-[24px] h-[24px] top-[90px] left-[12px] object-cover"
        alt=""
        src="/tabler_timeline-event.png"
        />
        <img
        className="absolute w-[24px] h-[24px] top-[140px] left-[12px] object-cover"
        alt=""
        src="/ri_team-line.png"
        />
        <img
        className="absolute w-[24px] h-[24px] top-[190px] left-[12px] object-cover"
        alt=""
        src="/gala_brochure.png"
        />
        <img
        className="absolute w-[24px] h-[24px] top-[240px] left-[12px] object-cover"
        alt=""
        src="/carbon_user-sponsor.png"
        />
        <img
        className="absolute w-[24px] h-[24px] top-[290px] left-[12px] object-cover"
        alt=""
        src="/charm_tick.png"
        />
        <img
        className="absolute w-[24px] h-[24px] top-[450px] left-[12px] object-cover"
        alt=""
        src="/ic_baseline-login.png"
        />
      </div>
    }
    {expand && <div class="absolute top-[92px] left-32 border-1 border-white h-borderh w-368 rounded-lg text-white backdrop-blur-3xl flex-shrink-0 bg-x font-black-ops-one" onMouseOutCapture={changeExpand}>
        <img
        className=" absolute w-[24px] h-[24px] top-[40px] left-[50px]  object-cover"
        alt=""
        src="/lets-icons_home.png"
        />
        <div class="absolute transition duration-700 ease-in-out top-[43px] left-[150px]  object-cover">HOME</div>
       
        <img
        className="absolute w-[24px] h-[24px] top-[90px] left-[50px] object-cover"
        alt=""
        src="/tabler_timeline-event.png"
        />
        <div className="absolute top-[93px] left-[150px]  object-cover">EVENTS</div>
        <img
        className="absolute w-[24px] h-[24px] top-[140px] left-[50px] object-cover"
        alt=""
        src="/ri_team-line.png"
        />
        <div className="absolute top-[143px] left-[150px]  object-cover ">OUR TEAM</div>
        <img
        className="absolute w-[24px] h-[24px] top-[190px] left-[50px] object-cover"
        alt=""
        src="/gala_brochure.png"
        />
        <div className="absolute top-[193px] left-[150px]  object-cover">BROCHURE</div>
        <img
        className="absolute w-[24px] h-[24px] top-[240px] left-[50px] object-cover"
        alt=""
        src="/carbon_user-sponsor.png"
        />
        <div className="absolute top-[243px] left-[150px]  object-cover">SPONSORS</div>
        <img
        className="absolute w-[24px] h-[24px] top-[290px] left-[50px] object-cover"
        alt=""
        src="/charm_tick.png"
        />
        <div className="absolute top-[293px] left-[150px]  object-cover">REGISTER</div>
        <img
        className="absolute w-[24px] h-[24px] top-[450px] left-[50px] object-cover"
        alt=""
        src="/ic_baseline-login.png"
        />
        <div className="absolute top-[450px] left-[150px]  object-cover">LOG IN</div>
      </div>
  }
  </>
  )
}

export default Menu