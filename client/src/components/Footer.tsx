
import { StyledFooter } from "../styledComponents/Footer";
import { StyledIcon } from "../styledComponents/Icons";
import { ChangeLanguage } from "./ChangeLanguage";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledIcon>
          <a href={"https://github.com/lindelind"}>
            <img
              src="/svg/github.svg"
              alt="github svg"
              style={{ width: "50px" }}
            />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a href={"https://www.linkedin.com/in/alinde-%C3%B6st-228769179/"}>
            <img
              src="/svg/linkedin.svg"
              alt="linkedin svg"
              style={{ width: "50px" }}
            />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a href={"mailto:ost.alinde@gmail.com"}>
            <img src="/svg/@.png" alt="email" style={{ width: "50px" }} />
          </a>
        </StyledIcon>
      </StyledFooter>
      <ChangeLanguage />
    </>
  );
};
