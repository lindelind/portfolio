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
        style={{ padding: "20px" }}
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
  color: white;
  position: absolute;
  top: 15px;
  right: 35px;
  font-size: 30px;
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    background-color: white;
  }
`;

export default MobileMenu;
