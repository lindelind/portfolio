import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 480,
  tablet: 768,
  laptop: 1400,
  desktop: 1400,
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
