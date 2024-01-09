import React from "react";
// import Menu from '../components/Menu'
import flower1 from "../../public/assets/team/flower1.png";
import flower from "../../public/assets/team/flower.png";
import Image from "next/image";
const about = () => {
  return (
    <div className="bg-[#fffbed]  min-h-screen relative w-full text-[#393939] text-lg font-amita flex flex-col items-center justify-center">
      
      <div className="flex p-12 mt-8 w-full items-center justify-between">
        <Image src={flower} />
        <Image src={flower} />
      </div>
      <p className="text-[#00293E] font-amita text-2xl my-4 ">Rules and Regulations</p>
      <ul className="text-justify w-[70%] mx-auto my-6">
      <ul className="list-disc">
  <li>
    All guests will be provided with mattresses, bedsheets, pillows, and blankets. All these commodities issued to them would have to be returned in sound condition to the organizers during check-out.
  </li>
  <li>
    <p>Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their electronic/physical receipts of accommodation would be heavily fined and disqualified.</p>
  </li>
  <li>
    <p>Entry will be only through the 'Main Gate' of MNIT Jaipur. All other gates will be closed for entry.</p>
  </li>
  <li>
    <p>Participants are expected to not create any kind of nuisance which might trouble other participants in the room.</p>
  </li>
  <li>
    <p>All guests are required to carry their valid government photo id proofs at all times. In addition, the student participants are also required to carry their valid College photo id card. Any guest failing to produce their id card will not be permitted inside the campus during Blitzschlag 2024.</p>
  </li>
  <li>
    <p>Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus. Any other item if deemed unsafe will be prohibited. The decision of the Security and Blitzschlag team will be final in case of any disputes.</p>
  </li>
  <li>
    <p>No outside vehicles will be allowed into the campus during the Blitzschlag 2024.</p>
  </li>
  <li>
    <p>All guests are required to maintain the decorum and cleanliness of the campus, and follow the rules of the campus at all times.</p>
  </li>
  <li>
    <p>Blitzschlag 2024 and MNIT Jaipur will not be responsible for any mishaps that occur throughout the duration of their stay.</p>
  </li>
</ul>


      </ul>
      <div className="h-12"></div>
      <div className="flex p-12  w-full items-center justify-between">
        <Image src={flower} />
        <Image src={flower} />
      </div>
      
    </div>
  );
};

export default about;
