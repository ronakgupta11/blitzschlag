import React, { useEffect } from "react";
import MobileEventPage from "../../components/eventsComponents/MobileEventPage";
import DesktopEventPage from "/src/components/eventsComponents/DesktopEventPage";
import { UAParser } from "ua-parser-js";
function EventPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = React.useState();
  const breakpoint = 720;
  useEffect(() => {
    const parser = new UAParser();
    const userAgent = window.navigator.userAgent;
    const result = parser.setUA(userAgent).getResult();
    const isMobileDevice = /mobile/i.test(result.device.type);
    setIsMobile(isMobileDevice);
  }, []);
  // useEffect(() => {
  //   const handleWindowResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleWindowResize);

  //   return () => window.removeEventListener("resize", handleWindowResize);
  // }, []);

  return isMobile ? <MobileEventPage /> : <DesktopEventPage />;
}
export default EventPage;
