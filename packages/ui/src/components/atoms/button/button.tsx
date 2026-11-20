import { Button as BaseButton } from "@base-ui/react/button";
import type { VariantProps } from "tailwind-variants";
import { button } from "./button.styles";

type ButtonProps = Omit<BaseButton.Props, "className"> &
  VariantProps<typeof button> & { className?: string };

export const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <BaseButton className={button({ variant, size, className })} {...props} />
);
