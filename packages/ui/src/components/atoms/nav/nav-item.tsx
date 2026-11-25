import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { Icon } from "../icon/icon";
import type { IconName } from "../icon/icon-list";
import { navItem } from "./nav-item.styles";

type NavItemProps = ComponentProps<"a"> &
  VariantProps<typeof navItem> & {
    icon: IconName;
  };

export const NavItem = ({
  icon,
  interactive,
  className,
  children,
  ...props
}: NavItemProps) => (
  <a className={navItem({ interactive, className })} {...props}>
    <Icon name={icon} />
    <span className="group-data-[collapsed=true]/sidebar:sr-only">
      {children}
    </span>
  </a>
);
