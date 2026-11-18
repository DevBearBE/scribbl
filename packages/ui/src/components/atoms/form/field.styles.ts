import { tv } from "tailwind-variants";

const control = [
  "w-full bg-white px-3 rounded-lg border border-neutral-300",
  "outline-none focus:border-tapestry-600 focus:ring-2 focus:ring-tapestry-600/30",
  "group-data-[invalid]/field:border-danger-500 group-data-[invalid]/field:focus:border-danger-500 group-data-[invalid]/field:focus:ring-danger-500/30",
  "group-data-[disabled]/field:opacity-60",
];

export const field = tv({
  slots: {
    root: "group/field flex flex-col gap-1.5",
    label: "flex items-center gap-x-2 text-sm font-medium text-neutral-800",
    box: "relative flex items-center",
    leading: "pointer-events-none absolute left-3 text-neutral-400",
    trailing: "absolute right-2 flex items-center",
    input: ["h-11", control],
    select: ["h-11", control],
    textarea: ["min-h-24 py-2", control],
    error: "text-sm text-danger-700",
  },
  variants: {
    leading: { true: { input: "pl-10", select: "pl-10" } },
    trailing: { true: { input: "pr-10", select: "pr-10" } },
  },
});
