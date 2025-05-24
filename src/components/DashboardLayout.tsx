"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import DashHead from "./DashHead";
import { DashboardNav } from "./sidebar/Admin-Sidebar";

interface DashboardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function DashboardLayout({
  children,
  className,
  ...props
}: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        {/* Sidebar: Visible on desktop, toggled on mobile */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-muted/40 border-r transform transition-transform duration-300 md:relative md:translate-x-0 md:block",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <DashboardNav />
        </aside>

        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <DashHead onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
          </div>

          {/* Main section */}
          <main className={cn(" px-3", className)} {...props}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
