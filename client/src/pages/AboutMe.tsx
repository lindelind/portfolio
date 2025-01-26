import { ProjectsList } from "../components/ProjectsList";
import { useDeviceType } from "../hooks/useDevice";
import { Container, LeftColumn, RightColumn } from "./Start";

export const AboutMe = () => {
  const deviceType = useDeviceType();

  return (
    <>
      <Container>
        <LeftColumn>
          <h1>Who am I?</h1>
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
        </LeftColumn>

        <RightColumn>
          <h2 id="my-projects">Projects</h2>
          <ProjectsList deviceType={deviceType} />
        </RightColumn>
      </Container>
    </>
  );
};
