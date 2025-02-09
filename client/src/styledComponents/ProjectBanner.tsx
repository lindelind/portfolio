import { styled } from "styled-components";

export interface ProjectBannerProps {
  $image: string;
  children: React.ReactNode;
}

const StyledContainer = styled.div<ProjectBannerProps>`
  height: 350px;
  display: flex;
  border-radius: 10px;
  box-shadow: rgba(204, 201, 201, 0.35) 0px 5px 5px;
  background-image: linear-gradient(90deg, rgb(22, 22, 22) 0%, transparent 100%),
    url(${(props) => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  width: 95%;
  margin: 10px auto;
  cursor: grab;
  position: relative;
  overflow: hidden;

  /* Front layer - initial blurred and faded background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Dark semi-transparent overlay */
    filter: blur(9px); /* Apply blur */
    z-index: 1; /* Ensure overlay is on top of the image */
    transition: all 0.3s ease;
  }

  /* Reveal the image on hover */
  &:hover::before {
    filter: blur(0); /* Remove blur */
    background: rgba(0, 0, 0, 0); /* Make the overlay fully transparent */
  }

  /* Ensure children content is above the overlay */
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
    margin: 20px;
    z-index: 2; 
  }

  
`;

export const ProjectBanner = (props: ProjectBannerProps) => {
  return (
    <StyledContainer $image={props.$image}>
      <div>{props.children}</div>
    </StyledContainer>
  );
};
