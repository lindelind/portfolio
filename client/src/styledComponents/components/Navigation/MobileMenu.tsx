
import { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import styled from "styled-components";


export interface MenuItem {
  label: string;
  key: string;
  href: string;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu = ({ menuItems, isOpen, onToggle }: MobileMenuProps) => {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

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
          onClick={(e) => setSelectedKey(e.key)}
          items={menuItems.map((item) => ({
            key: item.key,
            label: <a href={item.href}>{item.label}</a>,
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
