import styled from "styled-components";

// Grundcontainer för en sida
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

// Flex-sektion för att placera två element bredvid varandra
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

// Vänsterkolumn (ofta bild eller media)
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

// Högerkolumn (ofta text)
export const RightColumn = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Sektion för att placera element under varandra (t.ex. text och en komponent)
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

// wrapper för en textsektion**
export const TextSection = styled.div`
  flex: 1;
  padding: 20px;
  margin: 10px;

  @media (max-width: 1200px) {
   
  }
`;


export const InteractiveBox = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  overflow: hidden; 
  border: 7px solid #ccc;
  margin: 0;
  padding: 10px;
  border-radius: 10px;
  background-color:rgb(4, 4, 4);
   @media (max-width: 1000px) {
    max-width: 500px;
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;