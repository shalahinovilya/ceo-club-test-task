import { cva } from "class-variance-authority"

export const headerVariants = cva(
  "flex items-center justify-between border-b-[0.5px] bg-background px-3.5 py-2 gap-2",
  {
    variants: {
      variant: {
        default: "border-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const DEFAULT_AI_ASSISTANT_LABEL = "AI Assistant"
