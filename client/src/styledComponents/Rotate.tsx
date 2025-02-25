import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 10s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  
`;
