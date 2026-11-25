import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { icon } from "./icon.styles";
import { type IconName, icons } from "./icon-list";

type IconProps = Omit<ComponentProps<"svg">, "name"> &
  VariantProps<typeof icon> & { name: IconName };

export const Icon = ({ name, size, className, ...props }: IconProps) => {
  const IconComponent = icons[name];

  return (
    <IconComponent
      aria-hidden="true"
      className={icon({ size, className })}
      {...props}
    />
  );
};
