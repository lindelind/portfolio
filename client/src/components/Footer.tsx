
import { PageContainer } from "../styledComponents/components/Layout/StyledLayout";
import { StyledFooter } from "../styledComponents/Footer";
import { ChangeLanguage } from "./ChangeLanguage";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
          <a href={"https://github.com/lindelind"}>
            <img
              src="/svg/github.svg"
              alt="github svg"
              style={{ width: "50px" }}
            />
          </a>
        
          <a href={"https://www.linkedin.com/in/alinde-%C3%B6st-228769179/"}>
            <img
              src="/svg/linkedin.svg"
              alt="linkedin svg"
              style={{ width: "50px" }}
            />
          </a>
      
          <a href={"mailto:ost.alinde@gmail.com"}>
            <img src="/svg/@.png" alt="email" style={{ width: "50px" }} />
          </a>
        
      </StyledFooter>
      <PageContainer>
        <ChangeLanguage />
      </PageContainer>
    </>
  );
};
