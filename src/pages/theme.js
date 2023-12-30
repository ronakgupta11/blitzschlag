import React from "react"
// import Menu from '../components/Menu'
import flower1 from "../../public/assets/team/flower1.png"
import flower from "../../public/assets/team/flower.png"
import blue from "../../public/assets/theme/blue.png"
import yelo from "../../public/assets/theme/yelo.png"
import red from "../../public/assets/theme/red.png"
import orange from "../../public/assets/theme/orange.png"
import Image from 'next/image'
const theme = () => {
  return (
    <div className="bg-[#fffbed] min-h-screen relative w-full text-[#393939] text-lg font-amita flex flex-col items-center justify-center p-4">
      <Image className="absolute top-0 right-0 rotate-90" src={flower1}/>
      <div className="flex m-2 w-full items-center justify-between">
        <Image src ={flower}/>
        <Image src ={flower}/>
      </div>
      <p className="text-[#00293E] font-amita text-2xl my-4 ">
        Theme
      </p>
      <p className="text-justify w-[70%] mx-auto my-6">
      PADHARO MHARE FEST is a quest to bring to the world the cultural essence of our
enchanted lands of RAJASTHAN, where every hue comes alive, painting the canvas of
life with vibrant colors. An enchanting realm where culture seamlessly intertwines with
elegance, classics gracefully dance with modernity, and the soul embraces the horizon
with unwavering confidence. We present to you the four pinnacles of this magical realm
depicting the various tints of human emotions. Love, Divinity, Freedom and Strength.
Jaipur, the capital city, is adorned with a perfect blend of red’s passion and white’s
purity, pink symbolizing love, nurture, and compassion. A place where people find
solace amidst life’s hustle and bustle. Udaipur, the City of Lakes, painted with the
divine color white, synonymous with purity, untainted by any other hue. Jodhpur, the
Sun City, dipped into the color of the sea, portraying freedom. As unbounded as the sky,
it has eternal beauty spread across every horizon of the city. Jaisalmer, an oasis in the
midst of sand and encompassed with eolian sounds shining as bright as gold, with
beautiful sun-soaked sand dunes, magnificent forts, and temples.
      </p>
      <div className="flex flex-wrap items-center w-[70%] m-auto">
        <div className=" w-64 m-8">
<div className="flex space-x-4 items-center my-2">
    <Image src={yelo}/>
    <p className="font-semibold text-lg">STRENGTH</p>
</div>
        <p>
        As oasis in the midst of sand and encompassed with eolian sounds shining as bright as gold
        </p>
        </div>
        <div className=" w-64 m-8">
<div className="flex space-x-4 items-center my-2">
    <Image src={blue}/>
    <p className="font-semibold text-lg">FREEDOM</p>
</div>
        <p>
        As unbounded as the sky, it has eternal beauty spread across every horizon of the city
        </p>
        </div>
        <div className=" w-64 m-8">
<div className="flex space-x-4 items-center my-2">
    <Image src={red}/>
    <p className="font-semibold text-lg">DIVINITY</p>
</div>
        <p>
        Painted with divine color of white representing certainty and illumination
        </p>
        </div>
        <div className=" w-64 m-8">
<div className="flex space-x-4 items-center my-2">
    <Image src={orange}/>
    <p className="font-semibold text-lg">LOVE</p>
</div>
        <p>
        Perfect blend of red's passion and white's purity, pink symbolizing love, nurture and compassion
        </p>
        </div>  
      </div>
      <div className="h-12"></div>
      <div className="flex m-2 w-full items-center justify-between">
        <Image src ={flower}/>
        <Image src ={flower}/>
      </div>
      <Image className="absolute bottom-0 left-0 -rotate-90 " src={flower1}/>

    </div>


  )
  
};

export default theme;
