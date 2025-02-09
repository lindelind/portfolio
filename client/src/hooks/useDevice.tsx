import { useEffect, useState } from "react";

const breakpoints = {
  mobile: 480,
  tablet: 768, 
  laptop: 1199,
  desktop: 1200,
};


export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<string>(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => setDeviceType(getDeviceType(window.innerWidth));

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getDeviceType(width: number): string {
    if (width <= breakpoints.mobile) return "mobile";
    if (width <= breakpoints.tablet) return "tablet";
    if (width <= breakpoints.laptop) return "laptop";
    return "desktop"; 
  }

  return deviceType;
};
