import { styled } from "styled-components";

export const StyledDescription = styled.div`
  color: rgba(255, 255, 255, 0.8);
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: start;
`;

export const Description = (props: { description: string }) => (
  <StyledDescription>{props.description}</StyledDescription>
);
