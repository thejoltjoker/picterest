import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SidebarListItemProps {
  text: string;
  href: string;
  icon: ReactNode;
  badge?: ReactNode;
}

const SidebarListItem = ({ text, href, icon, badge }: SidebarListItemProps) => {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          isActive
            ? "text-theme-900 dark:text-white"
            : "text-stone-500 dark:text-stone-400"
        }
      >
        <span className="group flex items-center rounded-lg p-2  hover:bg-stone-200 hover:dark:bg-zinc-800">
          <span className="text-xl">{icon}</span>

          <span className="ms-3 flex-1 whitespace-nowrap">{text}</span>
          {badge}
        </span>
      </NavLink>
    </li>
  );
};

export default SidebarListItem;
