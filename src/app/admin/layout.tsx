// app/admin/layout.tsx
"use client";

import { DashboardLayout } from "@/components/DashboardLayout";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import { useEffect } from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

 useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user.role !== "admin") {
      redirect("/"); // useRouter for client-side redirect
      console.log(session)
    } else {
      console.log("Admin access granted");
    }
  }, [session, status]);

  return <DashboardLayout>{children}</DashboardLayout>;
}

export default AdminLayout;
