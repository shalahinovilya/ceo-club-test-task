import { cva } from "class-variance-authority"

export const headerVariants = cva(
  "flex items-center justify-between border-b bg-background px-2 py-2 gap-2",
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
