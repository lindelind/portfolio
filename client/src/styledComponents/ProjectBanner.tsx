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
  background-image: linear-gradient(90deg, rgb(28, 27, 27) 30%, transparent 70%),
    url(${(props) => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
  margin: 10px auto;
  cursor: grab;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
    margin: 20px;
  }
`;

export const ProjectBanner = (props: ProjectBannerProps) => {
  return (
    <StyledContainer $image={props.$image}>
      <div>{props.children}</div>
    </StyledContainer>
  );
};

