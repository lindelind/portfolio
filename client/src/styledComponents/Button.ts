import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color:rgb(231, 125, 49);
  color: white;
  
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;

  a {
  text-decoration: none;
  color: white;
  }

  &:hover {
    background-color:rgb(202, 110, 45);
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: rgb(217, 136, 38);
  padding: 9px 19px;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 5px;

  a {
    text-decoration: none;
    color: rgb(226, 160, 102);
  }

  &:hover {
    background-color:rgb(49, 45, 40);
  }
`;


export const CustomButton = styled.button`
  background-color: rgb(231, 125, 49);
  color: white;
      a {
    text-decoration: none;
    color: white;
    }

    &:hover {
      background-color: rgb(170, 97, 34);
    }

  padding: 20px 30px;
  border: none;
  border-radius: 30px;
  font-size: 25px;
  cursor: pointer;
  animation: bounce 1s;
            animation-direction: alternate;
            animation-timing-function: cubic-bezier(.5, .05, 1, .5);
            animation-iteration-count: infinite;
        }
   

        @keyframes bounce {
            from {
                transform: translate3d(0, 0px, 0);
            }

            to {
                transform: translate3d(0, 30px, 0);
            }
                
        }

  

  
`;

