import { MenuItem } from "./MobileMenu";

interface DesktopMenuProps {
  menuItems: MenuItem[];
}

export const DesktopMenu = ({ menuItems }: DesktopMenuProps) => {
  return (
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default DesktopMenu;
