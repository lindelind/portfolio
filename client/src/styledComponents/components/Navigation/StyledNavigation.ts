import { styled } from "styled-components";

export const StyledNavigation = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #363635;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  opacity: 0.9;
  text-align: center;
  width: 100%;
  height: inherit;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    color: white;
  }

  nav ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 0;

    li {
      margin-left: 20px;
      font-size: 23px;

      a {
        text-decoration: none;
        color: white;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
