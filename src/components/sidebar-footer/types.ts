import * as React from "react"

export interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  onHelpClick?: () => void
  children?: React.ReactNode
}
