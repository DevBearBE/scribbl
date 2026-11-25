import {
  Eye,
  EyeClosed,
  FastArrowLeftSquare,
  FastArrowRightSquare,
  Lock,
  LogOut,
  Mail,
  Notes,
  Settings,
  Star,
  Trash,
} from "iconoir-react";
import type { ComponentProps, ComponentType } from "react";

export const icons = {
  eye: Eye,
  eyeClosed: EyeClosed,
  fastArrowLeftSquare: FastArrowLeftSquare,
  fastArrowRightSquare: FastArrowRightSquare,
  lock: Lock,
  logOut: LogOut,
  mail: Mail,
  notes: Notes,
  settings: Settings,
  star: Star,
  trash: Trash,
} as const satisfies Record<string, ComponentType<ComponentProps<"svg">>>;

export type IconName = keyof typeof icons;
