import React from "react";
import {
  PageContainer,
  TwoColumnLayout,
  LeftColumn,
  RightColumn,
  StackedLayout,
  TextSection,
  InteractiveBox,
} from "../styledComponents/components/Layout/StyledLayout";
import { DragAndDropIcons } from "../components/animations/DragAndDropIcons";
import { MeImage, Pictures } from "../styledComponents/Images"
import { CustomButton } from "../styledComponents/Button";
import { Projects } from "../components/Projects";

const AboutMe: React.FC = () => {
  return (
    <>
      <PageContainer>
        <section id="home"></section>
        <TwoColumnLayout>
          <LeftColumn>
            <br />
            <h1>Hi. My name is Alinde.</h1>
            <h3>I'm a Fullstack Developer</h3>
            <CustomButton>
              <a href={"mailto:ost.alinde@gmail.com"}>Contact me</a>
            </CustomButton>
          </LeftColumn>
          <RightColumn>
            <Pictures>
              <MeImage src="/images/me.png" alt="Placeholder" />
            </Pictures>
          </RightColumn>
        </TwoColumnLayout>

        <StackedLayout>
          <TextSection>
            <section id="about-me"></section>
            <br />
            <h1>Who am I?</h1>
            <p>
              I’m a full-stack developer with experience in React, React Native,
              TypeScript, Node.js, Firebase, and API integrations. I love
              combining creativity with problem-solving to build solutions that
              not only work seamlessly but also look great.
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
              into every project. Creating solutions that are practical, clear,
              and enjoyable to use is what drives me. Now, I’m excited to bring
              everything I’ve learned into the workforce and continue growing as
              a developer!
            </p>
          </TextSection>
          <InteractiveBox>
            <section id="techstack"></section>
            <DragAndDropIcons />
          </InteractiveBox>
        </StackedLayout>
      </PageContainer>
      <section id="projects">
        <h1>My Projects</h1>
        <Projects />
      </section>
      <PageContainer>
        <TextSection>
          <section id="contact">
            <h1>Contact Me</h1>
          </section>
        </TextSection>
      </PageContainer>
    </>
  );
};

export default AboutMe;
