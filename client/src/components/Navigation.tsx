import { useState } from "react";
import { useDeviceType } from "../hooks/useDevice";
import DesktopMenu from "../styledComponents/components/Navigation/DesktopMenu";
import MobileMenu from "../styledComponents/components/Navigation/MobileMenu";
import { StyledNavigation } from "../styledComponents/components/Navigation/StyledNavigation";

export const Navigation = () => {
  const deviceType = useDeviceType();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "ABOUT ME", key: "about", href: "/" },
    // { label: "MY PROJECTS", key: "projects", href: "/projects" },
    { label: "CONTACT", key: "contact", href: "/contact" },
  ];

  const toggleDrawer = () => setOpen((prev) => !prev);

  return (
    <StyledNavigation>
      {deviceType === "mobile" || deviceType === "tablet" ? (
        <MobileMenu
          menuItems={menuItems}
          isOpen={open}
          onToggle={toggleDrawer}
        />
      ) : (
        <DesktopMenu menuItems={menuItems} />
      )}
    </StyledNavigation>
  );
};

export default Navigation;
