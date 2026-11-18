import { tv } from "tailwind-variants";

export const button = tv({
  base: "px-12 h-11 inline-flex items-center justify-center gap-2 cursor-pointer rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
  variants: {
    variant: {
      primary:
        "text-white bg-linear-to-r from-tapestry-500 from-55% to-amber-400 font-bold hover:shadow-lg",
      secondary:
        "border border-tapestry-500 text-tapestry-500 font-bold hover:bg-tapestry-500/20 hover:border-tapestry-600 hover:text-tapestry-600 hover:shadow-md",
      ghost:
        "text-tapestry-500 font-bold hover:translate-y-0 hover:bg-tapestry-500/10 hover:text-tapestry-600",
      destructive:
        "bg-red-600 text-white font-bold hover:bg-red-700 hover:shadow-md",
    },
    size: {
      default: "",
      icon: "px-0 w-11",
      "icon-sm": "px-0 size-8",
    },
  },
  defaultVariants: { variant: "primary", size: "default" },
});
