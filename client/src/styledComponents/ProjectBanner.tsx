import { styled } from "styled-components";


export interface ProjectBannerProps {
  $image: string;
  children: React.ReactNode;
}

const StyledContainer = styled.div<ProjectBannerProps>`
  height: 400px;
  max-width: 600px;
  display: flex;
  background-image: linear-gradient(90deg, rgb(16, 13, 16) 60%, transparent),
    url(${(props) => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
  }
`;

export const ProjectBanner = (props: ProjectBannerProps) => {
  return (
    <StyledContainer $image={props.$image}>
      <div>{props.children}</div>
    </StyledContainer>
  );
};
