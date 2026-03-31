import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { WorkspaceMenu } from "../workspace-menu"
import { useSidebar } from "../ui/sidebar"
import { sidebarHeaderVariants, DEFAULT_TITLE, DEFAULT_INITIALS } from "./constants"
import { SidebarToggleIcon } from "@/icons/sidebar-toggle-icon"
import type { SidebarHeaderProps } from "./types"

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  (
    {
      className,
      variant,
      logo,
      title = DEFAULT_TITLE,
      initials = DEFAULT_INITIALS,
      ...props
    },
    ref
  ) => {
    const { toggleSidebar, isMobile } = useSidebar()

    return (
      <div
        ref={ref}
        className={cn(sidebarHeaderVariants({ variant, className }), "relative group-data-[collapsible=icon]:gap-0")}
        {...props}
      >
        <WorkspaceMenu title={title} initials={initials} logo={logo} />

        {/* Toggle Button - Shows on desktop as collapse, on mobile closes drawer */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          aria-label={isMobile ? "Close sidebar" : "Toggle sidebar collapse"}
          className="rounded-md shrink-0"
        >
          <SidebarToggleIcon />
        </Button>
      </div>
    )
  }
)

SidebarHeader.displayName = "SidebarHeader"

export { SidebarHeader }
