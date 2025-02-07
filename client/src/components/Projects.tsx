import { ProjectBanner } from "../styledComponents/ProjectBanner";
import { Description } from "../styledComponents/Description";
import { Tags } from "../styledComponents/Tags";
import { Title } from "../styledComponents/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDeviceType } from "../hooks/useDevice";
import { PrimaryButton, SecondaryButton } from "../styledComponents/Button";

const projects = [
  {
    image: "/images/matrix.png",
    title: "Matrix",
    tags: ["React", "Node", "Firebase"],
    description: "Kontakt bok med Matrix-tema",
  },
  {
    image: "/images/vädret.png",
    title: "Vädret.Nu",
    tags: ["React", "Node", "Firebase"],
    description:
      "Uppgift i frontendkursen där vi använde oss av ett externt api.",
  },
  {
    image: "/images/hittavet-pic.png",
    title: "HittaVet",
    tags: ["React", "Node", "Firebase"],
    description: "ExamensArbete Medieinstitutet",
  },
  {
    image: "/images/hittavet-pic.png",
    title: "HittaVet",
    tags: ["React", "Node", "Firebase"],
    description: "ExamensArbete Medieinstitutet",
  },
];

export const Projects = () => {
  const deviceType = useDeviceType();

  const swiperConfig = {
    spaceBetween: 13,
    speed: 7000,
    autoplay: {
      delay: 150,
      
    },
    loop: true,
    navigation: true,

    slidesPerView:
      deviceType === "mobile" || deviceType === "tablet"
        ? 1
        : deviceType === "laptop"
          ? 2
          : 2,
    modules: [Navigation, Autoplay],
  };

  return (
    <> 
      <Swiper {...swiperConfig}>
        {projects.map((project, index) => (
          <SwiperSlide key={`key-${project.title}-${index}`}>
              <ProjectBanner $image={project.image}>
                <Title title={project.title} />
                <Tags tags={project.tags} />
                <Description description={project.description} />
                <br />
                <PrimaryButton>Github</PrimaryButton>
                <br />
                <SecondaryButton>Live</SecondaryButton>
              </ProjectBanner>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
