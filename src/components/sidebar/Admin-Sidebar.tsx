"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, LayoutDashboard, Users } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  variant: "default" | "admin";
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Courses",
    href: "/admin/courses",
    icon: BookOpen,
    variant: "default",
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: BookOpen,
    variant: "default",
  },
  {
    title: "Lessons",
    href: "/admin/lessons",
    icon: BookOpen,
    variant: "default",
  },
  {
    title: "Students",
    href: "/admin/students",
    icon: Users,
    variant: "default",
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="grid items-start gap-2 p-4 pt-15">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          className={cn(
            "flex w-full items-center justify-start gap-2 px-2",
            pathname === item.href && "bg-muted font-medium",
            item.variant === "admin" && "text-blue-600"
          )}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  );
}
