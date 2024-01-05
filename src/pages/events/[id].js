import React, { useEffect,useState } from "react";
import MobileEventPage from "../../components/eventsComponents/MobileEventPage";
import DesktopEventPage from "/src/components/eventsComponents/DesktopEventPage";
import { UAParser } from "ua-parser-js";
import axios from "axios";
import { url } from "@/constants";
import { useRouter } from "next/router";


function EventPage() {

const [dataEvent,setData] = useState({})

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const parser = new UAParser();
    const userAgent = window.navigator.userAgent;
    const result = parser.setUA(userAgent).getResult();
    const isMobileDevice = /mobile/i.test(result.device.type);
    setIsMobile(isMobileDevice);
  }, []);

  useEffect(()=>{
    const currentURL = window.location.href;
    const id = currentURL.split('/').pop();
    console.log(id)
    axios.get(`${url}/events/${id}`)
    .then(
      d => {
        // console.log(d.data)
        const data = d.data

       console.log(data)

       setData(data)
      }
    ).catch(e=>console.error(e))

  },[])

  

  return isMobile ? <MobileEventPage data={dataEvent}/> : <DesktopEventPage data={dataEvent} />;
}
export default EventPage;
