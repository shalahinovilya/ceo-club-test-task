import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { sidebarHeaderVariants } from "./constants"

export interface SidebarHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarHeaderVariants> {
  logo?: React.ReactNode
  title?: string
  initials?: string
}
