import * as React from "react"
import { MessageSquare, HelpCircle, MoreVertical, Sparkles, PanelLeftOpen, PanelLeftClose } from "lucide-react"
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
              <PanelLeftClose className="h-4 w-4" />
            ) : (
              <PanelLeftOpen className="h-4 w-4" />
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
            <MessageSquare className="h-4 w-4" />
          </Button>

          {/* Help Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onHelpClick}
            aria-label="Help"
            className="rounded-md"
          >
            <HelpCircle className="h-4 w-4" />
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
                <MoreVertical className="h-4 w-4" />
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
              <Sparkles className="h-4 w-4 stroke-muted-foreground" />
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
