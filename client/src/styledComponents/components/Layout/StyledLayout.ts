import styled from "styled-components";


export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  max-width: 1199px;
  margin: 0 auto;

  h1 {
    font-family: "Playfair Display", serif;
  }
`;

export const TwoColumnLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  max-width: 50%;
  z-index: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 1200px) {
    max-width: 80%;
  }
  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;


export const RightColumn = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  padding: 20px;
  line-height: 2;

  z-index: 1;

  border-radius: 40px;
  background: linear-gradient(135deg, rgb(30, 30, 29), transparent);
  backdrop-filter: blur(10px);
  box-shadow: 0px 0px 20px 0 rgba(140, 137, 137, 0.1);
  
  h2, h3{

  color: rgb(177, 134, 231);
  font-weight: 700;
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1.5rem;
  color: white;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: linear-gradient(90deg,rgb(170, 113, 197),rgb(121, 30, 232));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin: 20px 0;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background: #6e8efb;
    margin: 10px auto 0;
    border-radius: 10px;
    box-shadow: 0 0 10px #6e8efb;
  }
`;

