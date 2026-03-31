import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Blockchain01Icon, PlusSignIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import {
  DEFAULT_EMPTY_STATE_TITLE,
  DEFAULT_EMPTY_STATE_SUBTITLE,
  DEFAULT_EMPTY_STATE_BUTTON_LABEL,
} from "./constants"
import type { EmptyStateProps } from "./types"

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      icon,
      title = DEFAULT_EMPTY_STATE_TITLE,
      subtitle = DEFAULT_EMPTY_STATE_SUBTITLE,
      buttonLabel = DEFAULT_EMPTY_STATE_BUTTON_LABEL,
      onButtonClick,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-80 flex-col items-center justify-center gap-4 rounded-lg p-6",
          className
        )}
      >
        {/* Icon Container */}
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted">
          {icon || <HugeiconsIcon icon={Blockchain01Icon} size={16} color="currentColor" strokeWidth={2} className="text-muted-foreground" />}
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-center text-sm font-medium text-foreground">{title}</h3>
          <p className="text-center text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Button */}
        <Button onClick={onButtonClick} className="gap-2">
          <HugeiconsIcon icon={PlusSignIcon} size={16} color="currentColor" strokeWidth={2} />
          {buttonLabel}
        </Button>
      </div>
    )
  }
)

EmptyState.displayName = "EmptyState"

export { EmptyState }
