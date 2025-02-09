import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeviceType } from "../hooks/useDevice";
import {DesktopMenu} from "../styledComponents/components/Navigation/DesktopMenu";
import MobileMenu from "../styledComponents/components/Navigation/MobileMenu";
import { StyledNavigation } from "../styledComponents/components/Navigation/StyledNavigation";
import { useTranslation } from "react-i18next";


export const Navigation = () => {
  const deviceType = useDeviceType();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

const { t } = useTranslation();

const menuItems = [
  { label: t("menu.home"), key: "home", href: "/#home" },
  { label: t("menu.techstack"), key: "techstack", href: "/#techstack" },
  { label: t("menu.about"), key: "about", href: "/#about-me" },
  { label: t("menu.projects"), key: "projects", href: "/#projects" },
  { label: t("menu.contact"), key: "contact", href: "/#contact" },
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
