import React, { useEffect } from "react";
import MobileEventPage from "../../components/eventsComponents/MobileEventPage";
import DesktopEventPage from "/src/components/eventsComponents/DesktopEventPage";

function EventPage() {
  const [width, setWidth] = React.useState();
  const breakpoint = 720;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <MobileEventPage /> : <DesktopEventPage />;
}
export default EventPage;
