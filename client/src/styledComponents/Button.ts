import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color:rgb(164, 141, 222);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color:rgb(147, 45, 202);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: rgb(165, 130, 177);
  padding: 9px 19px;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #e6f2ff;
  }
`;
