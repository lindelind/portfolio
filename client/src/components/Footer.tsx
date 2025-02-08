
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
          <a href={"https://github.com/lindelind"}>
            <img
              src="/svg/linkedin.svg"
              alt="github svg"
              style={{ width: "50px" }}
            />
          </a>
        </StyledIcon>
        <StyledIcon>
          <a href={"https://github.com/lindelind"}>
            <img src="/svg/@.png" alt="github svg" style={{ width: "50px" }} />
          </a>
        </StyledIcon>
      </StyledFooter>
      <ChangeLanguage />
    </>
  );
};
