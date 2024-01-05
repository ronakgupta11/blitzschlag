import React, { useEffect,useState } from "react";
import MobileEventPage from "../../components/eventsComponents/MobileEventPage";
import DesktopEventPage from "/src/components/eventsComponents/DesktopEventPage";
import { UAParser } from "ua-parser-js";
function EventPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const parser = new UAParser();
    const userAgent = window.navigator.userAgent;
    const result = parser.setUA(userAgent).getResult();
    const isMobileDevice = /mobile/i.test(result.device.type);
    setIsMobile(isMobileDevice);
  }, []);

  return isMobile ? <MobileEventPage /> : <DesktopEventPage />;
}
export default EventPage;
