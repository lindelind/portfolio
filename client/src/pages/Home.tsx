import React, { useEffect, useRef, useState } from "react";
import {
  PageContainer,
  TwoColumnLayout,
  LeftColumn,
  RightColumn,

  TextSection,
  StyledH2,
} from "../styledComponents/components/Layout/StyledLayout";

import { MeImage, Pictures } from "../styledComponents/Images";
import { useDeviceType } from "../hooks/useDevice";
import { useTranslation } from "react-i18next";

import { BubbleIcons } from "../components/animations/BubbleIcons";
import FloatingBackground from "../styledComponents/FloatingBackground";
import { ProjectsMore } from "../components/ProjectsMore";
import { ContactForm } from "../components/ContactForm";
import styled from "styled-components";


export const FadeSection = styled.section`
  opacity: 0;
  transform: translateY(40px);
  transition:
    opacity 0.3s ease-out,
    transform 0.3s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    
  }

 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;

`;

const AboutMe: React.FC = () => {
  const deviceType = useDeviceType();
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState("/images/me-Colorized.jpg");
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);
  const paperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70 && paperRef.current) {
        paperRef.current.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !(entry.target as HTMLElement).dataset.visible
        ) {
          entry.target.classList.add("visible");
          (entry.target as HTMLElement).dataset.visible = "true";
        }
      });
    },
    { threshold: 0.25}
  );

  fadeRefs.current.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return () => {
    fadeRefs.current.forEach((ref) => {
      if (ref) observer.unobserve(ref);
    });
  };
}, []);

  return (
    <>
      {deviceType === "desktop" && <FloatingBackground />}

      <PageContainer>
        <section id="home">
          <br />
          <br />
        </section>
        <TwoColumnLayout>
          <LeftColumn>
            <h1>{t("home.title")}</h1>
            <StyledH2>{t("home.subtitle")}</StyledH2>
            {deviceType === "desktop" && (
              <div className="paper" ref={paperRef}>
                <div className="pin">
                  <div className="shadow"></div>
                  <div className="metal"></div>
                  <div className="bottom-circle"></div>
                </div>
                <p>
                  {t("home.postit")}
                </p>
                <div className="pin2">
                  <div className="shadow2"></div>
                  <div className="metal2"></div>
                  <div className="bottom-circle2"></div>
                </div>
              </div>
            )}
          </LeftColumn>
          <RightColumn>
            <Pictures>
              <MeImage
                src={imageSrc}
                alt="Profile"
                onMouseEnter={() => setImageSrc("/images/me-Colorized.jpg")}
                // onMouseLeave={() => setImageSrc("/images/me.png")}
              />
            </Pictures>
          </RightColumn>
          <section id="about-me"></section>
        </TwoColumnLayout>
        <FadeSection ref={(el) => fadeRefs.current.push(el)}>
          <TwoColumnLayout>
            <TextSection>
              <h2>{t("aboutMe.heading")}</h2>
              <p>{t("aboutMe.paragraph1")}</p>
              <h3>{t("aboutMe.heading2")}</h3>
              <p>{t("aboutMe.paragraph2")}</p>
              <p>{t("aboutMe.paragraph3")}</p>
            </TextSection>
          </TwoColumnLayout>
        </FadeSection>
        <section id="quote">
          <div id="one" className="tilt-l">
            If,
          </div>
          <div id="two" className="tilt-r">
            at
          </div>
          <div id="three" className="tilt-r2x">
            first,
          </div>
          <div id="four" className="tilt-l">
            you
          </div>
          <div id="five" className="tilt-r">
            do
          </div>
          <div id="six" className="tilt-l2x">
            not
          </div>
          <div id="seven" className="tilt-r2x">
            succeed,
          </div>
          <div id="eight" className="tilt-l2x">
            call
          </div>
          <div id="nine" className="tilt-r">
            it
          </div>
          <div id="ten" className="tilt-l">
            version 1.0.
          </div>
        </section>
        <section id="techstack"></section>
        <br />
        <FadeSection ref={(el) => fadeRefs.current.push(el)}>
          <TwoColumnLayout>
            <TextSection>
              <h2>{t("techstack.heading")}</h2>
              <p>{t("techstack.description")}</p>
              <BubbleIcons />
            </TextSection>
          </TwoColumnLayout>
        </FadeSection>
        <FadeSection ref={(el) => fadeRefs.current.push(el)}></FadeSection>

        {deviceType === "desktop" && (
          <>
            <>
              <section id="projects" style={{ margin: 0 }}>
                <br />
                <br />
              </section>
              <h1>{t("projects.heading")}</h1>
            </>
          </>
        )}
      </PageContainer>

      {deviceType != "desktop" && (
        <>
          <section id="projects" style={{ margin: 0 }}>
            <br />
          </section>
          <h1>{t("projects.heading")}</h1>
        </>
      )}

      <ProjectsMore />

      <FadeSection ref={(el) => fadeRefs.current.push(el)}>
        <section id="contact">
          <br />
          <ContactForm />
        </section>
      </FadeSection>
    </>
  );
};

export default AboutMe;
