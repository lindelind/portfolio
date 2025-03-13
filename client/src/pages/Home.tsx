import React, { useState } from "react";
import {
  PageContainer,
  TwoColumnLayout,
  LeftColumn,
  RightColumn,
  StackedLayout,
  TextSection,
} from "../styledComponents/components/Layout/StyledLayout";

import { MeImage, Pictures } from "../styledComponents/Images";
import { CustomButton } from "../styledComponents/Button";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { useDeviceType } from "../hooks/useDevice";
import { useTranslation } from "react-i18next";

import { BubbleIcons } from "../components/animations/BubbleIcons";


const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState("/images/me.png");


  return (
    <>
      <PageContainer>
        <section id="home">
          <br />
          <br />
        </section>
        <TwoColumnLayout>
          <LeftColumn>
            <h1>{t("home.title")}</h1>

            <CustomButton>
              <a href={"mailto:ost.alinde@gmail.com"}>{t("home.contact")}</a>
            </CustomButton>
          </LeftColumn>
          <RightColumn>
            <Pictures>
              <MeImage
                src={imageSrc}
                alt="Profile"
                onMouseEnter={() => setImageSrc("/images/me-Colorized.jpg")}
                onMouseLeave={() => setImageSrc("/images/me.png")}
              />
            </Pictures>
          </RightColumn>
          <section id="about-me"></section>
        </TwoColumnLayout>
        <TwoColumnLayout>
          <TextSection>
            <h1>{t("aboutMe.heading")}</h1>
            <p>{t("aboutMe.paragraph1")}</p>
            <p>{t("aboutMe.paragraph2")}</p>
            <p>{t("aboutMe.paragraph3")}</p>
          </TextSection>
          <section id="techstack"></section>
        </TwoColumnLayout>
        <StackedLayout>
          <TwoColumnLayout>
            <LeftColumn>
              <br />
              <br />
              <TextSection>
                <h2>{t("techstack.heading")}</h2>
                <p>{t("techstack.description")}</p>
              </TextSection>
            </LeftColumn>
            <br />
            <br />
            <br />
            <LeftColumn>
              <BubbleIcons />
            </LeftColumn>
          </TwoColumnLayout>
        </StackedLayout>

        <br />
        <br />
        <br />
        {deviceType === "desktop" && (
          <>
            <embed
              src="https://tumbleweed-game.web.app"
              style={{
                width: "700px",
                height: "auto",
                minHeight: "500px",
                maxHeight: "80vh",
                borderRadius: "50px",
              }}
            />
            <>
              <div style={{ width: "500px" }}>
                <br />
                <i>{t("play_me")}</i> <br /><br />
                <i>{t("projects.tumbleweed_description")}</i>
              </div>
            </>
          </>
        )}
      </PageContainer>

      <section id="projects">
        <br />
        <br />
        <br />
        <h1>{t("projects.heading")}</h1>
        <Projects />
      </section>

      <PageContainer>
        <section id="contact">
          <Contact />
        </section>
      </PageContainer>
    </>
  );
};

export default AboutMe;
