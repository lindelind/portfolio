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

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  max-width: 50%;

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

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


export const StackedLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const TextSection = styled.div`
  flex: 1;
  padding: 20px;
  
  border-radius: 40px;
  background-color: transparent;
  
  box-shadow: 0px 0px 20px 0 rgba(140, 137, 137, 0.2);
  // opacity: 0.6;
  

  @media (max-width: 1200px) {
  }
`;
