import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MessageMultiple02Icon,
  HelpCircleIcon,
  MoreVerticalIcon,
  SparklesIcon,
  PanelLeftOpenIcon,
  PanelLeftCloseIcon,
} from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu"
import { headerVariants, DEFAULT_AI_ASSISTANT_LABEL } from "./constants"
import type { HeaderProps } from "./types"

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      className,
      variant,
      breadcrumbs,
      onMessageClick,
      onHelpClick,
      onAIAssistantClick,
      onSidebarToggle,
      sidebarOpen = false,
      aiAssistantLabel = DEFAULT_AI_ASSISTANT_LABEL,
      ...props
    },
    ref
  ) => {
    return (
      <header ref={ref} className={cn(headerVariants({ variant, className }))} {...props}>
        {/* Left: Sidebar Toggle (Mobile) */}
        {onSidebarToggle && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onSidebarToggle}
            aria-label="Toggle sidebar"
            className="md:hidden rounded-md"
          >
            {sidebarOpen ? (
              <HugeiconsIcon icon={PanelLeftCloseIcon} size={16} color="currentColor" />
            ) : (
              <HugeiconsIcon icon={PanelLeftOpenIcon} size={16} color="currentColor" />
            )}
          </Button>
        )}

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex-1">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <BreadcrumbSeparator />}
                    <BreadcrumbItem>
                      {crumb.href ? (
                        <BreadcrumbLink href={crumb.href} className="flex items-center gap-1.5">
                          {crumb.icon && <span className="shrink-0">{crumb.icon}</span>}
                          <span>{crumb.label}</span>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="flex items-center gap-1.5">
                          {crumb.icon && <span className="shrink-0">{crumb.icon}</span>}
                          <span>{crumb.label}</span>
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}

        {/* Middle-Right: Action Buttons */}
        <div className="flex items-center gap-0">
          {/* Messages Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onMessageClick}
            aria-label="Messages"
            className="rounded-md"
          >
            <HugeiconsIcon icon={MessageMultiple02Icon} size={16} color="currentColor" />
          </Button>

          {/* Help Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onHelpClick}
            aria-label="Help"
            className="rounded-md"
          >
            <HugeiconsIcon icon={HelpCircleIcon} size={16} color="currentColor" />
          </Button>

          {/* More Options Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="More options"
                className="rounded-md"
              >
                <HugeiconsIcon icon={MoreVerticalIcon} size={16} color="currentColor" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right: AI Assistant Button */}
        {onAIAssistantClick && (
          <div className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={onAIAssistantClick}
              className="gap-2 rounded-md text-foreground"
            >
              <HugeiconsIcon icon={SparklesIcon} size={16} color="currentColor" className="text-muted-foreground" />
              <span className="hidden sm:inline">{aiAssistantLabel}</span>
            </Button>
          </div>
        )}
      </header>
    )
  }
)

Header.displayName = "Header"

export { Header }
