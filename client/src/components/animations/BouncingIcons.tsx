import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// Vår container (InteractiveBox) med responsiva egenskaper
export const InteractiveBox = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  overflow: hidden;
  border: 7px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(4, 4, 4);
  @media (max-width: 1000px) {
    max-width: 500px;
  }
  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

// Ikonens wrapper (positionerad absolut med transform)
const IconWrapper = styled.div.attrs<{ x: number; y: number; size: number }>(
  (props) => ({
    style: {
      transform: `translate(${props.x}px, ${props.y}px)`,
      width: `${props.size}px`,
      height: `${props.size}px`,
    },
  })
)<{ x: number; y: number; size: number }>`
  position: absolute;
`;


// Bilden i ikonen
const IconImage = styled.img`
  width: 100%;
  height: 100%;
`;

// Data för våra ikoner
const iconsData = [
  { id: "react", src: "/svg/react.svg", alt: "React Logo" },
  { id: "firebase", src: "/svg/firebase.svg", alt: "Firebase Logo" },
  { id: "node", src: "/svg/node.svg", alt: "Node.js Logo" },
  { id: "typescript", src: "/svg/ts.svg", alt: "TypeScript Logo" },
  { id: "javascript", src: "/svg/js.svg", alt: "JavaScript Logo" },
  { id: "sql", src: "/svg/sql.svg", alt: "SQL Logo" },
  { id: "css", src: "/svg/css.svg", alt: "CSS Logo" },
  { id: "html", src: "/svg/html.svg", alt: "HTML Logo" },
  { id: "sass", src: "/svg/sass1.svg", alt: "SASS Logo" },
];

// Typ för tillståndet för varje ikon
interface IconState {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  src: string;
  alt: string;
}

export const BouncingIcons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = useState({
    width: 500,
    height: 300,
  });
  const iconSize = 50;

  const [icons, setIcons] = useState<IconState[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        setContainerDimensions({ width, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const { width, height } = containerDimensions;
    const initialIcons: IconState[] = iconsData.map((icon) => ({
      id: icon.id,
      x: Math.random() * (width - iconSize),
      y: Math.random() * (height - iconSize),
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      src: icon.src,
      alt: icon.alt,
    }));
    setIcons(initialIcons);

    let lastTime = performance.now();

    const update = (time: number) => {
      const dt = (time - lastTime) / 16.67;
      lastTime = time;
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          let newX = icon.x + icon.vx * dt;
          let newY = icon.y + icon.vy * dt;
          let newVx = icon.vx;
          let newVy = icon.vy;

          if (newX < 0) {
            newX = 0;
            newVx = Math.abs(newVx);
          } else if (newX + iconSize > containerDimensions.width) {
            newX = containerDimensions.width - iconSize;
            newVx = -Math.abs(newVx);
          }

          if (newY < 0) {
            newY = 0;
            newVy = Math.abs(newVy);
          } else if (newY + iconSize > containerDimensions.height) {
            newY = containerDimensions.height - iconSize;
            newVy = -Math.abs(newVy);
          }

          return { ...icon, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
      animationRef.current = requestAnimationFrame(update);
    };

    animationRef.current = requestAnimationFrame(update);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [containerDimensions, iconSize]);

  return (
    <InteractiveBox ref={containerRef}>
      {icons.map((icon) => (
        <IconWrapper key={icon.id} x={icon.x} y={icon.y} size={iconSize}>
          <IconImage src={icon.src} alt={icon.alt} />
        </IconWrapper>
      ))}
    </InteractiveBox>
  );
};
