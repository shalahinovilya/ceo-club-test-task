import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { headerVariants } from "./constants"

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headerVariants> {
  breadcrumbs?: BreadcrumbItem[]
  onMessageClick?: () => void
  onHelpClick?: () => void
  onAIAssistantClick?: () => void
  aiAssistantLabel?: string
}
