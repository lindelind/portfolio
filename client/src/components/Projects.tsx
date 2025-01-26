import { ProjectBanner } from "../styledComponents/ProjectBanner";
import { Description } from "../styledComponents/Description";
import { Tags } from "../styledComponents/Tags";
import { Title } from "../styledComponents/Title";
import hittavetImage from "../images/hittavet-pic.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDeviceType } from "../hooks/useDevice";

const projects = [
  {
    image: hittavetImage,
    title: "HittaVet",
    tags: ["React", "Node", "Firebase"],
    description: "ExamensArbete Medieinstitutet ...",
  },
  {
    image: hittavetImage,
    title: "HittaVet",
    tags: ["React", "Node", "Firebase"],
    description: "ExamensArbete Medieinstitutet ...",
  },
  {
    image: hittavetImage,
    title: "HittaVet",
    tags: ["React", "Node", "Firebase"],
    description: "ExamensArbete Medieinstitutet ...",
  },
  {
    image: hittavetImage,
    title: "HittaVet",
    tags: ["React", "Node", "Firebase"],
    description: "ExamensArbete Medieinstitutet ...",
  },
  {
    image: "",
    title: "Project 2",
    tags: ["JavaScript", "React", "Firebase"],
    description: "Beskrivning av projekt 2",
  },
];

export const Projects = () => {
  const deviceType = useDeviceType();

  const swiperConfig = {
    spaceBetween: 0,
    loop: true,
    navigation: true,
    slidesPerView:
      deviceType === "mobile" || deviceType === "tablet"
        ? 1
        : deviceType === "laptop"
          ? 2
          : 3,
    modules: [Navigation],
  };

  return (
    <Swiper {...swiperConfig}>
      {projects.map((project, index) => (
        <SwiperSlide key={`key-${project.title}-${index}`}>
          <ProjectBanner $image={project.image}>
            <Title title={project.title} />
            <Tags tags={project.tags} />
            <Description description={project.description} />
          </ProjectBanner>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
