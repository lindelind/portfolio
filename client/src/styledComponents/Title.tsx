import styled from "styled-components";

export const StyledTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: white;
  margin-top: 25px;
`;

export const Title = (props: { title: string }) => {
  return <StyledTitle>{props.title}</StyledTitle>;
};
