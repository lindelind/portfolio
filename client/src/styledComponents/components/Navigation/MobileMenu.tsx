import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";


export interface MenuItem {
  label: string;
  key: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: { label: string; key: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const MobileMenu = ({
  menuItems,
  isOpen,
  onToggle,
  onNavigate,
}: MobileMenuProps) => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState<string>("");

  useEffect(() => {
    setSelectedKey(location.pathname + location.hash);
  }, [location.pathname, location.hash]);

  return (
    <>
      <MobileMenuButton icon={<MenuOutlined />} onClick={onToggle} />
      <StyledDrawer
    placement="right"
    open={isOpen}
    onClose={onToggle}
    drawerStyle={{
    background: "rgba(17, 17, 17, 0.7)",
    backdropFilter: "blur(3px)",
    color: "white",
    
  }}
>

     
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={menuItems.map((item) => ({
            key: item.key,
            label: (
              <a
                href={item.href}
                onClick={(e) => onNavigate(e, item.href)}
              >
                {item.label}
              </a>
            ),
          }))}
        />
      </StyledDrawer>
    </>
  );
};

const MobileMenuButton = styled(Button)`
  background: transparent;
  border: none;
  color: white !important;
  position: absolute;
  top: 10px;
  right: 35px;
  font-size: 20px;
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-mask {
    background: rgba(0, 0, 0, 0.5) !important;
    backdrop-filter: blur(4px);
    color: white !important;
  }

  .ant-drawer-content {
    background: rgba(0, 0, 0, 0.8) !important;
    backdrop-filter: blur(12px);
    color: white !important;
  }

  .ant-drawer-body {
    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, 0.7) !important;
    padding-top: 30px;
    color: white !important;
  }

  .ant-drawer-header {
    border-bottom: none;
    background: rgba(0, 0, 0, 0.7) !important;

    svg {
      color: white !important;
    }
  }

  .ant-menu-item,
  li,
  ul,
  a {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    margin:0;
    transition: all 0.3s ease;
    background: transparent !important;
    color: white !important;

  }

  .ant-menu-item::after {
    display: none !important;
  }
`;

export default MobileMenu;
