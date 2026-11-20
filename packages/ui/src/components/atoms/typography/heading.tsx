import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";
import { heading } from "./heading.styles";

type HeadingProps = ComponentProps<"h1"> &
  VariantProps<typeof heading> & { as?: "h1" | "h2" | "h3" | "h4" };

export const Heading = ({
  as: Tag = "h1",
  size,
  className,
  ...props
}: HeadingProps) => {
  return <Tag className={heading({ size, className })} {...props} />;
};
