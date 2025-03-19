import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: white;
  width: 100%;
  min-height: 10vh;
  // margin-top: 30px;
  text-align: center;
  padding: 10px;

  a {
    margin: 10px;
    cursor: pointer;

    img {
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
