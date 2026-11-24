import type { ComponentProps } from "react";
import { Icon } from "../icon/icon";
import type { IconName } from "../icon/icon-list";
import { navItem } from "./nav-item.styles";

type NavItemProps = ComponentProps<"a"> & {
  icon: IconName;
};

export const NavItem = ({
  icon,
  className,
  children,
  ...props
}: NavItemProps) => (
  <a className={navItem({ className })} {...props}>
    <Icon name={icon} />
    <span className="group-data-[collapsed=true]/sidebar:sr-only">
      {children}
    </span>
  </a>
);
