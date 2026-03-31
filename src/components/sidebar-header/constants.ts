import { cva } from "class-variance-authority"

export const sidebarHeaderVariants = cva(
  "flex items-center justify-between gap-2 border-b px-2 py-2 transition-[gap] duration-200",
  {
    variants: {
      variant: {
        default: "border-sidebar-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const DEFAULT_TITLE = "CEO Club"
export const DEFAULT_INITIALS = "CE"
