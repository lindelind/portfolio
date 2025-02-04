import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeviceType } from "../hooks/useDevice";
import {DesktopMenu} from "../styledComponents/components/Navigation/DesktopMenu";
import MobileMenu from "../styledComponents/components/Navigation/MobileMenu";
import { StyledNavigation } from "../styledComponents/components/Navigation/StyledNavigation";


export const Navigation = () => {
  const deviceType = useDeviceType();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: "HOME", key: "home", href: "/#home" },
    { label: "ABOUT ME", key: "about", href: "/#about-me" },
    { label: "TECH STACK", key: "contact", href: "/#techstack" },
    { label: "MY PROJECTS", key: "projects", href: "/#projects" },
    { label: "CONTACT", key: "contact", href: "/#contact" },
  ];

  const toggleDrawer = () => setOpen((prev) => !prev);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");

      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(href);
    }
    setOpen(false);
  };

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location]);

  return (
    <StyledNavigation>
      {deviceType === "mobile" || deviceType === "tablet" ? (
        <MobileMenu
          menuItems={menuItems}
          isOpen={open}
          onToggle={toggleDrawer}
          onNavigate={handleNavigation}
        />
      ) : (
        <DesktopMenu menuItems={menuItems} onNavigate={handleNavigation} />
      )}
    </StyledNavigation>
  );
};

export default Navigation;
