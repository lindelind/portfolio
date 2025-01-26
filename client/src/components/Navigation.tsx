import { useEffect, useState, useCallback } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import "../styles/_navigation.scss";

export const Navigation = () => {
  const isMobile = useIsMobile(768);
  const [open, setOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const toggleDrawer = useCallback(() => setOpen((prev) => !prev), []);

  const menuItems = [
    { label: "ABOUT ME", key: "about", href: "/" },
    { label: "MY PROJECTS", key: "projects", href: "/projects" },
    { label: "CONTACT", key: "contact", href: "/contact" },
  ];

  return (
    <header className="navigation">
      <div className="navigation-header">
        <h1>ALINDE ÖST</h1>
        {isMobile && (
          <Button
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
            className="mobile-menu-button"
          />
        )}
      </div>
      {isMobile ? (
        <Drawer
          placement="right"
          open={open}
          onClose={toggleDrawer}
          style={{ display: "flex", justifyContent: "flex-end" }} // Aligns menu to the right
          className="custom-mobile-drawer" // Custom class for additional styles if needed
        >
          <Menu
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={(e) => setSelectedKey(e.key)}
            items={menuItems.map((item) => ({
              key: item.key,
              label: <a href={item.href}>{item.label}</a>,
            }))}
          />
        </Drawer>
      ) : (
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
