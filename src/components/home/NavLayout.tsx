"use client"


import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

const NavLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Hide Navbar on admin routes
  const hideNavbar = pathname.startsWith("/admin");
  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className={!hideNavbar ? "pt-16" : ""}>{children}</div>
    </>
  );
};

export default NavLayout;
