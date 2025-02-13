import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PageContainer,
  TwoColumnLayout,
  LeftColumn,
  RightColumn,
  StackedLayout,
  TextSection,
} from "../styledComponents/components/Layout/StyledLayout";

import { MeImage, Pictures } from "../styledComponents/Images";
import { CustomButton, PrimaryButton } from "../styledComponents/Button";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Arrow } from "../components/animations/Arrow";
import { useDeviceType } from "../hooks/useDevice";
import { useTranslation } from "react-i18next";
import { BouncingIcons } from "../components/animations/BouncingIcons";
import { DragAndDropIcons } from "../components/animations/DragAndDropIcons";


const blurVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.5 } },
};

interface ToggleButtonProps {
  toggleIcons: () => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ toggleIcons }) => {
  const [buttonText, setButtonText] = useState("Dansa?");

  const handleClick = () => {
    setButtonText((prev) => (prev === "Pausa?" ? "Dansa?" : "Pausa?"));
    toggleIcons();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <PrimaryButton onClick={handleClick}>{buttonText}</PrimaryButton>
    </div>
  );
};



const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState("/images/me.png");
  const [showFirstComponent, setShowFirstComponent] = useState(true);

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

        {deviceType !== "desktop" ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={showFirstComponent ? "dragDrop" : "bouncing"}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={blurVariants}
              >
                {showFirstComponent ? <DragAndDropIcons /> : <BouncingIcons />}
              </motion.div>
            </AnimatePresence>
            <StackedLayout>
              <br />
              <ToggleButton
                toggleIcons={() => setShowFirstComponent(!showFirstComponent)}
              />

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
          
          <TwoColumnLayout>
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
            <RightColumn style={{marginLeft: "100px"}}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={showFirstComponent ? "dragDrop" : "bouncing"}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={blurVariants}
                >
                  {showFirstComponent ? (
                    <DragAndDropIcons />
                  ) : (
                    <BouncingIcons />
                  )}
                </motion.div>
              </AnimatePresence>

              <br />
              <ToggleButton
                toggleIcons={() => setShowFirstComponent(!showFirstComponent)}
              />
            </RightColumn>
          </TwoColumnLayout>
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
