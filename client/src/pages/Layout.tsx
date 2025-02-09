import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { StyledHeader } from "../styledComponents/Header";
import { StyledMain } from "../styledComponents/Main";
import { StyledFooter } from "../styledComponents/Footer";

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
      <StyledMain>
        <Outlet />
      </StyledMain>
      <StyledFooter>
        <Footer />
      </StyledFooter>
    </>
  );
};
