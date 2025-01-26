// import { useState, useEffect } from "react";

// export const useIsMobile = (breakpoint: number = 768) => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [breakpoint]);

//   return isMobile;
// };

import { useState, useEffect } from "react";

// Definiera breakpoints
const breakpoints = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
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

  // Funktion som returnerar en enhetstyp baserat på bredden
  function getDeviceType(width: number): string {
    if (width <= breakpoints.mobile) return "mobile";
    if (width <= breakpoints.tablet) return "tablet";
    if (width <= breakpoints.laptop) return "laptop";
    return "desktop";
  }

  return deviceType;
};
