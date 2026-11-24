import { tv } from "tailwind-variants";

export const navItem = tv({
  base: [
    "h-11 px-3 flex items-center gap-3 rounded-lg transition-colors",
    "hover:bg-neutral-100",
    "data-[status=active]:bg-tapestry-500/10 data-[status=active]:text-tapestry-700 data-[status=active]:ring-1 data-[status=active]:ring-inset data-[status=active]:ring-tapestry-700",
  ],
});
