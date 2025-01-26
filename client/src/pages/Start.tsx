import styled from "styled-components";
import { useDeviceType } from "../hooks/useDevice";
import { Projects } from "../components/Projects";

const Main = () => {
  const isMobile = useDeviceType();

  return (
    <>
      <Container>
        <LeftColumn>
          <h1>Hi. My name is Alinde.</h1>
          <p>
            I’m a full-stack developer with experience in React, React Native,
            TypeScript, Node.js, Firebase, and API integrations. I love
            combining creativity with problem-solving to build solutions that
            not only work seamlessly but also look great.
            <br />
            <br />
            For me, clear code structure and a user-friendly experience go hand
            in hand—whether it’s ensuring the app is easy to use or making the
            code straightforward to navigate.
            <br />
            <br />
            During my education and internship, I’ve learned so much about
            development and teamwork. My background in customer service has also
            given me valuable insights into user needs, which I bring into every
            project. Creating solutions that are practical, clear, and enjoyable
            to use is what drives me. Now, I’m excited to bring everything I’ve
            learned into the workforce and continue growing as a developer!
          </p>
          <h4>
            If you have any questions or want to get in touch with me, email:{" "}
            <br />{" "}
            <a href={"mailto:ost.alinde@gmail.com"}>ost.alinde@gmail.com</a>
          </h4>
        </LeftColumn>

        {isMobile ? (
          <RightColumn>
            <h2 id="my-projects">Projects</h2>
            <ul>
              <li>
                <a href="#">HittaVet - Examensarbete</a>
              </li>
              <li>
                <a href="#">Weather App (Using Weatherbit API)</a>
              </li>
              <li>
                <a href="#">E-commerce with Stripe</a>
              </li>
              <li>
                <a href="#">Subscription Newsletter App</a>
              </li>
              <li>
                <a href="#">Image Search (Using Google Image API)</a>
              </li>
            </ul>
          </RightColumn>
        ) : (
          <RightColumn>
            <h2 id="my-projects">Projects</h2>
            <ul>
              <li>
                <a href="#">HittaVet - Examensarbete</a>
              </li>
              <li>
                <a href="#">Weather App (Using Weatherbit API)</a>
              </li>
              <li>
                <a href="#">E-commerce with Stripe</a>
              </li>
              <li>
                <a href="#">Subscription Newsletter App</a>
              </li>
              <li>
                <a href="#">Image Search (Using Google Image API)</a>
              </li>
            </ul>
          </RightColumn>
        )}
      </Container>
      <Projects/>
      <Pictures>
        <MeImage src="/src/images/russin.jpg" alt="picture of me and Russin" />
        <MeImage
          src="/src/images/alinderussin.png"
          alt="picture of me and Russin"
        />
      </Pictures>
      <i>Me and my dog Russin.</i>
      <br /> <br /> <br />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;

const LeftColumn = styled.div`
  margin: 20px;
  height: auto;
  box-sizing: border-box;
  flex: 1;
  min-width: 300px;
  max-width: 50%;

  h1 {
    font-family: "Playfair Display", serif;
  }

  p {
    font-size: 20px;
  }

  a {
    color: black;
  }

  h4 {
    font-family: "Playfair Display", serif;
  }
`;

const RightColumn = styled.div`
  margin: 20px;
  height: auto;
  box-sizing: border-box;
  flex: 1;
  width: 40%;
  min-width: 300px;
  max-width: 50%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  ul li a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 1.5rem;
    position: relative;
  }
`;

const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;

  img {
    border-radius: 20px;
  }
`;

const MeImage = styled.img`
  width: 450px;
  max-width: 100%;
  height: auto;
  margin: 10px;
`;

export default Main;
