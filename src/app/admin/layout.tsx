// app/admin/layout.tsx
import { DashboardLayout } from "@/components/DashboardLayout";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default AdminLayout;
