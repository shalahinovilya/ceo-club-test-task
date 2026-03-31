import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"
import { SidebarHeader } from "../sidebar-header"
import { SidebarFooter } from "../sidebar-footer"
import {
  DEFAULT_HEADER_TITLE,
  DEFAULT_HEADER_INITIALS,
  MAIN_ITEMS_LABELS,
  RECORDS_ITEMS_LABELS,
  RECORDS_LABEL,
} from "./constants"
import { getIconByType } from "./utils"
import type { SidebarNavProps, NavItem } from "./types"

const getDefaultMainItems = (): NavItem[] =>
  MAIN_ITEMS_LABELS.map((item) => ({
    ...item,
    icon: getIconByType(item.iconType),
  }))

const getDefaultRecordsItems = (): NavItem[] =>
  RECORDS_ITEMS_LABELS.map((item) => ({
    ...item,
    icon: getIconByType(item.iconType),
  }))

const SidebarNav = React.forwardRef<HTMLDivElement, SidebarNavProps>(
  (
    {
      mainItems = getDefaultMainItems(),
      recordsItems = getDefaultRecordsItems(),
      onHelpClick,
      headerTitle = DEFAULT_HEADER_TITLE,
      headerInitials = DEFAULT_HEADER_INITIALS,
      headerLogo,
      onHeaderToggle,
    },
    ref
  ) => {
    return (
      <Sidebar ref={ref}>
        <SidebarHeader
          title={headerTitle}
          initials={headerInitials}
          logo={headerLogo}
          onToggle={onHeaderToggle}
        />
        <SidebarContent>
          {/* Main Navigation Group */}
          <SidebarGroup>
            <SidebarMenu>
              {mainItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton
                    isActive={item.isActive}
                    onClick={item.onClick}
                    className="gap-3"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          {/* Records Group */}
          {recordsItems.length > 0 && (
            <SidebarGroup>
              <SidebarGroupLabel>{RECORDS_LABEL}</SidebarGroupLabel>
              <SidebarMenu>
                {recordsItems.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      isActive={item.isActive}
                      onClick={item.onClick}
                      className="gap-3"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroup>
          )}
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter onHelpClick={onHelpClick} />
      </Sidebar>
    )
  }
)

SidebarNav.displayName = "SidebarNav"

export { SidebarNav }
