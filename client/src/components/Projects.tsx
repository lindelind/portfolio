import { ProjectBanner } from "../styledComponents/ProjectBanner";
import { Tags } from "../styledComponents/Tags";
import { Title } from "../styledComponents/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDeviceType } from "../hooks/useDevice";
import { PrimaryButton, SecondaryButton } from "../styledComponents/Button";
import { Modal } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Description } from "../styledComponents/Description";
import { styled } from "styled-components";
import { t } from "i18next";

// Anpassad modal med mörk bakgrund
const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: #1e1e1e; /* Mörk bakgrund */
    color: white; /* Vit text */
    border-radius: 10px;
  }

  .ant-modal-header {
    background-color: #1e1e1e; /* Mörkare header */
    color: white;
    border-bottom: none;
  }

  .ant-modal-title {
    color: white;
    font-size: 25px;
  }

  .ant-modal-close-x {
    color: white;
  }
`;



type Project = {
  image: string;
  title: string;
  tags: string[];
  description: string;
  url?: string;
};

 

const projects: Project[] = [
  
  {
    image: "/images/matrix.png",
    title: "Matrix",
    tags: ["JavaScript", "HTML", "CSS"],
    description: "Kontakt bok med Matrix-tema",
    url: "https://signup-matrix.netlify.app",
  },
  {
    image: "/images/vädret.png",
    title: "Vädret.Nu",
    tags: ["JavaScript", "HTML", "CSS", "API"],
    description:
      "Uppgift i frontendkursen där vi använde oss av ett externt api.",
    url: "https://searchweathertoday.netlify.app",
  },
  {
    image: "/images/retrogames2.png",
    title: "Retro Games",
    tags: ["React", "Stripe", "MongoDB", "Node"],
    description: "Webshop",
    url: "",
  },
  {
    image: "/images/swedishfika.png",
    title: "Swedish Fika",
    tags: ["React", "Stripe", "JSON", "Node", "SASS"],
    description: "Webshop",
    url: "",
  },
  {
    image: "/images/newsletter.png",
    title: "Newsletters",
    tags: ["PHP", "SQL", "Docker"],
    description: "Webshop",
    url: "",
  },
  {
    image: "/images/imagessearch2.png",
    title: "Image Search",
    tags: ["React", "Auth0"],
    description: "Sökmotor Bilder",
    url: "",
  },
  {
    image: "/images/todo.png",
    title: "Todo-app",
    tags: ["React", "CSS"],
    description: "Todo-app",
    url: "https://alinde-ost-todo.web.app",
  },
  {
    image: "/images/hittavet-pic.png",
    title: "HittaVet",
    tags: ["React", "Typescript", "Node", "Firebase"],
    description: t("projects.hittavet_description"),
    url: "https://hittavet-c3cf4.web.app",
  },
];

export const Projects = () => {

  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Project | null>(null);

  const deviceType = useDeviceType();
  const {t} = useTranslation();

  const swiperConfig = {
    spaceBetween: 13,
    speed: 15000,
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      delay: 0,
    },
    loop: true,

    slidesPerView:
      deviceType === "mobile" || deviceType === "tablet"
        ? 1
        : deviceType === "laptop"
          ? 2
          : deviceType === "desktop"
            ? 3
            : 4,
    modules: [Autoplay],
  };

  const showModal = (project: Project) => {
    setModalContent(project);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
    setModalContent(null);
  };

  

  return (
    <>
      <Swiper {...swiperConfig}>
        {projects.map((project, index) => (
          <SwiperSlide key={`key-${project.title}-${index}`}>
            <ProjectBanner $image={project.image}>
              <Title title={project.title} />
              <Tags tags={project.tags} />
              <br />
              <SecondaryButton>
                <a href={project.url}>Live</a>
              </SecondaryButton>
              <br />
              <PrimaryButton onClick={() => showModal(project)}>
                {t("projects.read_more")}
              </PrimaryButton>
            </ProjectBanner>
          </SwiperSlide>
        ))}
      </Swiper>

      <StyledModal
        title={modalContent ? modalContent.title : ""}
        open={open}
        onCancel={handleCancel}
        footer={null}
      >
        <Tags tags={modalContent?.tags} />
        <br />
        <Description description={modalContent?.description} />
        <br />
        <SecondaryButton>
          <a href={modalContent?.url}>Live</a>
        </SecondaryButton>
      </StyledModal>
          </>
      );
    };
