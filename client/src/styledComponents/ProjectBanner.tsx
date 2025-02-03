import { styled } from "styled-components";

export interface ProjectBannerProps {
  $image: string;
  children: React.ReactNode;
}
const BannersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0;
  width: 100%;

  
`;

const StyledContainer = styled.div<ProjectBannerProps>`
  height: 350px;
  display: flex;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-image: linear-gradient(90deg, rgb(28, 27, 27) 30%, transparent 70%),
    url(${(props) => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  width: 100%;
  margin: 10px auto;

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

export const ProjectBannerGrid = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <BannersGrid>{children}</BannersGrid>;
};
