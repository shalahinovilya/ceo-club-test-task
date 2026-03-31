import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { HelpSquareIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { HELP_ICON_ARIA_LABEL } from "./constants"
import type { SidebarFooterProps } from "./types"

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, onHelpClick, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start gap-0 border-t border-sidebar-border bg-sidebar p-2",
          className
        )}
        {...props}
      >
        {children ? (
          children
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={onHelpClick}
            aria-label={HELP_ICON_ARIA_LABEL}
            className="w-8 h-8 aspect-square rounded-md border-[0.5px] border-input bg-background flex items-center justify-center text-muted-foreground"
          >
            <HugeiconsIcon icon={HelpSquareIcon} size={16} color="currentColor" strokeWidth={1.8} absoluteStrokeWidth />
          </Button>
        )}
      </div>
    )
  }
)

SidebarFooter.displayName = "SidebarFooter"

export { SidebarFooter }
