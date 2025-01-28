import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotateContainer = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centrerar cirkeln */
  width: 800px; /* Diameter på cirkeln, justera för att göra större */
  height: 800px; /* Diameter på cirkeln */
  animation: ${rotate} 10s linear infinite; 
  z-index: -1; 
`;

const Icon = styled.img`
  position: absolute;
  width: 90px; 
  height: 90px;
  opacity: 0.3; 
`;

const icons = [
  "src/images/react.svg",
  "src/images/react.svg",
  "src/images/react.svg",
  "src/images/react.svg",
  "src/images/react.svg",
  
 
];

export const RotatingIcons = () => {
  return (
    <RotateContainer>
      {icons.map((src, index) => {
        const angle = (index / icons.length) * 360; // Fördela ikonerna jämnt
        const x = Math.cos((angle * Math.PI) / 180) * 180; // Radien ökas till 180px
        const y = Math.sin((angle * Math.PI) / 180) * 180;

        return (
          <Icon
            key={index}
            src={src}
            alt={`Icon ${index}`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          />
        );
      })}
    </RotateContainer>
  );
};
