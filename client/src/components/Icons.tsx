
import { styled } from "styled-components";

const icons = [
  { id: "react", src: "/images/react.svg", alt: "React Logo" },
  { id: "firebase", src: "/images/firebase.svg", alt: "Firebase Logo" },
  { id: "node", src: "/images/node.svg", alt: "Node.js Logo" },
  { id: "typescript", src: "/images/ts.svg", alt: "TypeScript Logo" },
  { id: "javascript", src: "/images/js.svg", alt: "JavaScript Logo" },
  { id: "sql", src: "/images/sql.svg", alt: "SQL Logo" },
  { id: "css", src: "/images/css.svg", alt: "CSS Logo" },
  { id: "html", src: "/images/html.svg", alt: "HTML Logo" },
  { id: "sass", src: "/images/sass1.svg", alt: "SASS Logo" },
];

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
 
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 15px;
  justify-items: center;
  padding: 10px;
  max-width: 500px;
 
  width: 100%;
  justify-self: center; // Center the grid in the middle of its container
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  transition: transform 0.2s ease-in-out;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const Icons = () => {
  return (
    <IconsWrapper>
      <IconsGrid>
        {icons.map((icon) => (
          <Icon key={icon.id}>
            <img src={icon.src} alt={icon.alt} />
          </Icon>
        ))}
      </IconsGrid>
    </IconsWrapper>
  );
};
