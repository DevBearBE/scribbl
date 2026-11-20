import { tv } from "tailwind-variants";

export const heading = tv({
  base: "font-semibold",
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl",
    },
  },
  defaultVariants: { size: "lg" },
});
