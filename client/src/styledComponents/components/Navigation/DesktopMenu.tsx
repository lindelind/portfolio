import { MenuItem } from "./MobileMenu";

interface DesktopMenuProps {
  menuItems: MenuItem[];
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

export const DesktopMenu = ({ menuItems, onNavigate }: DesktopMenuProps) => (
  <nav>
    <ul>
      {menuItems.map(({ label, href, key }) => (
        <li key={key}>
          <a href={href} onClick={(e) => onNavigate(e, href)}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

