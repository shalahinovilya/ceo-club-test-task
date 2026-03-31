import { HugeiconsIcon } from "@hugeicons/react"
import {
  Home01Icon,
  NotificationSquareIcon,
  CheckmarkSquare02Icon,
  Analytics01Icon,
  Activity03Icon,
  Blockchain01Icon,
} from "@hugeicons/core-free-icons"

export function getIconByType(iconType: string) {
  const props = { size: 16, color: "currentColor" }
  switch (iconType) {
    case "home-01":
      return <HugeiconsIcon icon={Home01Icon} {...props} />
    case "notification-square":
      return <HugeiconsIcon icon={NotificationSquareIcon} {...props} />
    case "checkmark-square-02":
      return <HugeiconsIcon icon={CheckmarkSquare02Icon} {...props} />
    case "analytics-01":
      return <HugeiconsIcon icon={Analytics01Icon} {...props} />
    case "activity-03":
      return <HugeiconsIcon icon={Activity03Icon} {...props} />
    case "blockchain-01":
      return <HugeiconsIcon icon={Blockchain01Icon} {...props} />
    default:
      return null
  }
}
