import { styled } from "styled-components";
import { Rotate } from "../styledComponents/Rotate";

export const TechStack = () => {
  return (
    <>
      <Rotate>
        <Icon src="src/images/react.svg" alt="React Logo" />
      </Rotate>
    </>
  );
};


export const Icon = styled.img`
  width: 100px;
  max-width: 100%;
  height: auto;
  margin: 10px;
`;