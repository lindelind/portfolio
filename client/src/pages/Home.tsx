import React, { useState } from "react";
import {
  PageContainer,
  TwoColumnLayout,
  LeftColumn,
  RightColumn,
  StackedLayout,
  TextSection,
  InteractiveBox,
} from "../styledComponents/components/Layout/StyledLayout";


import { MeImage, Pictures } from "../styledComponents/Images";
import { CustomButton } from "../styledComponents/Button";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Arrow } from "../components/animations/Arrow";
import { useDeviceType } from "../hooks/useDevice";
import { useTranslation } from "react-i18next";
import { BouncingIcons } from "../components/animations/BouncingIcons";
import { DragAndDropIcons } from "../components/animations/DragAndDropIcons";

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
            <h3>{t("home.subtitle")}</h3>
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
        </TwoColumnLayout>
        <StackedLayout>
          <LeftColumn>
            <section id="techstack">
              <br />
              <br />
              <TextSection>
                {deviceType === "desktop" && <Arrow />}
                <h2>{t("techstack.heading")}</h2>
                <p>{t("techstack.description")}</p>
              </TextSection>
            </section>
          </LeftColumn>
        </StackedLayout>

        {deviceType != "desktop" ? (
          <>
            <BouncingIcons />
            <StackedLayout>
              <LeftColumn>
                <TextSection>
                  <section id="about-me">
                    <br />
                    <br />
                  </section>
                  <h1>{t("aboutMe.heading")}</h1>
                  <p>{t("aboutMe.paragraph1")}</p>
                  <p>{t("aboutMe.paragraph2")}</p>
                  <p>{t("aboutMe.paragraph3")}</p>
                  <p>{t("aboutMe.paragraph4")}</p>
                </TextSection>
              </LeftColumn>
            </StackedLayout>
          </>
        ) : (
          <StackedLayout>
            <LeftColumn>
              <TextSection>
                <section id="about-me">
                  <br />
                  <br />
                </section>
                <h1>{t("aboutMe.heading")}</h1>
                <p>{t("aboutMe.paragraph1")}</p>
                <p>{t("aboutMe.paragraph2")}</p>
                <p>{t("aboutMe.paragraph3")}</p>
              </TextSection>
            </LeftColumn>
            <InteractiveBox>
              <DragAndDropIcons />
            </InteractiveBox>
          </StackedLayout>
        )}
      </PageContainer>

      <section id="projects">
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
