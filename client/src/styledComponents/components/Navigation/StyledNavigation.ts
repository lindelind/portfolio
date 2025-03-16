import { styled } from "styled-components";


export const StyledNavigation = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:rgb(0, 0, 0);
  position: fixed;
  
  top: 0;
  width: 100%;
  z-index: 1000;
  opacity: 0.8;
  text-align: center;
  width: 100%;
  height: 8vh;

  nav ul {
    display: flex;
    list-style: none;
    justify-content: end;
    padding: 0;

    li {
      margin-right: 38px;
      font-size: 20px;

      a {
        text-decoration: none;
        color: white;
        font-family: "poppins";

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
