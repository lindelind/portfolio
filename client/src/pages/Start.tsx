import styled from "styled-components";
import { useDeviceType } from "../hooks/useDevice";
import {ProjectsList} from "../components/ProjectsList";
import { Projects } from "../components/Projects";
import { TechStack } from "../components/TechStack";


const Main = () => {
  const deviceType = useDeviceType();

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
          </p>
          <h4>
            If you have any questions or want to get in touch with me, email:{" "}
            <br />{" "}
            <a href={"mailto:ost.alinde@gmail.com"}>ost.alinde@gmail.com</a>
          </h4>
        </LeftColumn>

        {deviceType === "desktop" ? (
          <RightColumn>
            <Pictures>
                <MeImage
                  src="src/images/bebis.jpg"
                  alt="Rotating image of a baby"
                />
            </Pictures>
          </RightColumn>
        ) : (
          <SingleColumn>
            <h2 id="my-projects">Projects</h2>
            <ProjectsList deviceType={deviceType} />
          </SingleColumn>
        )}
      </Container>
      <TechStack/>
      <h1>Projects I have done</h1>
      <Projects />
      {/* <Pictures>
        <MeImage src="/src/images/russin.jpg" alt="picture of me and Russin" />
        <MeImage
          src="/src/images/alinderussin.png"
          alt="picture of me and Russin"
        />
      </Pictures> */}
      {/* <i>Me and my dog Russin.</i> */}
    </>
  );
};

const SingleColumn = styled.div`
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
  align-items: flex-start;
  justify-content: center;
`;

export const LeftColumn = styled.div`
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
    border-radius: 200px;
  }
`;

export const MeImage = styled.img`
  width: 450px;
  max-width: 100%;
  height: auto;
  margin: 10px;
`;


export default Main;
