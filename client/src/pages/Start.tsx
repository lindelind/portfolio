import styled from "styled-components";
import { useDeviceType } from "../hooks/useDevice";
import { Projects } from "../components/Projects";
import { useEffect } from "react";
import { useLocation} from "react-router-dom";
import { CustomButton} from "../styledComponents/Button";
import { Icons } from "../components/Icons";
import { DragAndDropIcons } from "../components/animations/DragAndDropIcons";



const Main = () => {
  const deviceType = useDeviceType();
  const location = useLocation();

   useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const target = document.getElementById(sectionId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth",});
      }
    }
  }, [location.state]);

  return (
    <>
      <Container>
        <LeftColumn>
          <h1>Hi. My name is Alinde.</h1>
          <h3>I'm a Fullstack Developer</h3>

          <CustomButton>
            <a href={"mailto:ost.alinde@gmail.com"}>Contact me</a>
          </CustomButton>
        </LeftColumn>

        <RightColumn>
          <Pictures>
            <MeImage src="/images/me.png" alt="" />
          </Pictures>
        </RightColumn>

        {deviceType === "desktop" ? (
          <Container>
            <LeftColumn>
              <section id="about-me"></section>
              <br />
              <h1>Who am I?</h1>
              <p>
                I’m a full-stack developer with experience in React, React
                Native, TypeScript, Node.js, Firebase, and API integrations. I
                love combining creativity with problem-solving to build
                solutions that not only work seamlessly but also look great.
                <br />
                <br />
                For me, clear code structure and a user-friendly experience go
                hand in hand—whether it’s ensuring the app is easy to use or
                making the code straightforward to navigate.
                <br />
                <br />
                During my education and internship, I’ve learned so much about
                development and teamwork. My background in customer service has
                also given me valuable insights into user needs, which I bring
                into every project. Creating solutions that are practical,
                clear, and enjoyable to use is what drives me. Now, I’m excited
                to bring everything I’ve learned into the workforce and continue
                growing as a developer!
              </p>
            </LeftColumn>

            <RightColumn>
              <br />
              <section id="techstack">
                <DragAndDropIcons />
              </section>
            </RightColumn>
          </Container>
        ) : (
          <>
            <Container>
              <LeftColumn>
                <section id="about-me"></section>
                <h1>Who am I?</h1>
                <p>
                  I’m a full-stack developer with experience in React, React
                  Native, TypeScript, Node.js, Firebase, and API integrations. I
                  love combining creativity with problem-solving to build
                  solutions that not only work seamlessly but also look great.
                  <br />
                  <br />
                  For me, clear code structure and a user-friendly experience go
                  hand in hand—whether it’s ensuring the app is easy to use or
                  making the code straightforward to navigate.
                  <br />
                  <br />
                  During my education and internship, I’ve learned so much about
                  development and teamwork. My background in customer service
                  has also given me valuable insights into user needs, which I
                  bring into every project. Creating solutions that are
                  practical, clear, and enjoyable to use is what drives me. Now,
                  I’m excited to bring everything I’ve learned into the
                  workforce and continue growing as a developer!
                </p>
              </LeftColumn>
              <SingleColumn>
                <section id="techstack">
                  <h1>TechStack</h1>
                  <Icons />
                </section>
              </SingleColumn>
            </Container>
          </>
        )}
      </Container>

      <section id="projects">
        <h1>My Projects</h1>
        <Projects />
      </section>
      <section id="contact">
        <h1>Contact me</h1>
        fjskfjsk
      </section>
    </>
  );
};

export const SingleColumn = styled.div`
  width: 100%;
  margin-top: 20px;
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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  // align-items: flex-start;
  justify-content: center;
`;

export const LeftColumn = styled.div`
  margin-top: 50px;
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

  h3 {
  font-family: monospace;
  font-size: 40px;
  }
`;

export const RightColumn = styled.div`
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

export const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: center;

  img {
    border-radius: 170px;
  }
`;

 export const ImageWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  margin: 10px;
`;

export const MeImage = styled.img`
  width: 370px;
  max-width: 100%;
  height: auto;
  margin: 10px;
 
`;


export default Main;
