import * as React from "react"

export interface NavItem {
  label: string
  icon: React.ReactNode
  href?: string
  isActive?: boolean
  onClick?: () => void
}

export interface SidebarNavProps {
  mainItems?: NavItem[]
  recordsItems?: NavItem[]
  onHelpClick?: () => void
  headerTitle?: string
  headerInitials?: string
  headerLogo?: React.ReactNode
  onHeaderToggle?: () => void
}
