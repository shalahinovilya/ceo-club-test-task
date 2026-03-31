import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MessageMultiple02Icon,
  HelpCircleIcon,
  MoreVerticalIcon,
  SparklesIcon,
} from "@hugeicons/core-free-icons"
import { SidebarTrigger } from "../ui/sidebar"
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
      aiAssistantLabel = DEFAULT_AI_ASSISTANT_LABEL,
      ...props
    },
    ref
  ) => {
    return (
      <header ref={ref} className={cn(headerVariants({ variant, className }))} {...props}>
        {/* Left: Sidebar Toggle - Mobile only */}
        <div className="flex items-center md:hidden">
          <SidebarTrigger className="rounded-md" />
          <div className="flex h-6 items-center justify-center px-2">
            <div className="w-[1.5px] h-full bg-border" />
          </div>
        </div>

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
                          {crumb.icon && <span className="shrink-0 text-foreground opacity-70">{crumb.icon}</span>}
                          <span>{crumb.label}</span>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="flex items-center gap-1.5">
                          {crumb.icon && <span className="shrink-0 text-foreground opacity-70">{crumb.icon}</span>}
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
            <HugeiconsIcon icon={MessageMultiple02Icon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
          </Button>

          {/* Help Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onHelpClick}
            aria-label="Help"
            className="rounded-md"
          >
            <HugeiconsIcon icon={HelpCircleIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground" />
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
                <HugeiconsIcon icon={MoreVerticalIcon} size={16} color="currentColor" strokeWidth={1} absoluteStrokeWidth className="text-muted-foreground" />
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
              className="gap-2 rounded-md text-foreground border-[0.5px] w-8 h-8 sm:w-auto sm:h-auto sm:px-[7px]! sm:py-1.5!"
            >
              <HugeiconsIcon icon={SparklesIcon} size={16} color="currentColor" strokeWidth={1.5} absoluteStrokeWidth className="text-muted-foreground shrink-0" />
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
