import * as React from "react"
import { Header } from "./components/header"
import { SidebarNav } from "./components/sidebar-nav"
import { ViewToolbar } from "./components/view-toolbar"
import { EmptyState } from "./components/empty-state"
import { HugeiconsIcon } from "@hugeicons/react"
import { Database01Icon } from "@hugeicons/core-free-icons"

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <div className="flex h-screen bg-background relative">
      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 z-50 flex h-screen md:relative md:z-auto md:translate-x-0 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <SidebarNav
          onHelpClick={() => console.log("Help clicked")}
          onHeaderToggle={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header
          breadcrumbs={[
            {
              icon: <HugeiconsIcon icon={Database01Icon} size={16} color="currentColor" />,
              label: "Object name",
            },
          ]}
          onMessageClick={() => console.log("Messages clicked")}
          onHelpClick={() => console.log("Help clicked")}
          onAIAssistantClick={() => console.log("AI Assistant clicked")}
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
          sidebarOpen={sidebarOpen}
        />

        {/* Toolbar */}
        <ViewToolbar
          viewName="View name"
          onViewChange={(view) => console.log("View changed:", view)}
          onSearch={(query) => console.log("Search:", query)}
          onFilter={() => console.log("Filter clicked")}
          onSort={() => console.log("Sort clicked")}
          onColumnsClick={() => console.log("Columns clicked")}
          onAddClick={() => console.log("Add clicked")}
        />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <EmptyState onButtonClick={() => console.log("Add clicked")} />
        </div>
      </div>
    </div>
  )
}

export default App
