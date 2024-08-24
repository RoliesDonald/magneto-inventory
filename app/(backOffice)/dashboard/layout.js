"use client";
import NavBar from "@/components/backoffice/NavBar";
import SideBar from "@/components/backoffice/SideBar";
import React, { useState } from "react";

export default function Layout({ children, catalogue, merchants }) {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="flex-grow-1">
      {/* sidebar */}
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className={showSideBar ? "ml-52 flex-grow-1 " : " sm:ml-0 md:ml-0"}>
        {/* Navbar */}
        <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        {/* main body */}
        <main className="p-5 text-slate-200 min-h-screen mt-20">
          {children}
          {catalogue}
          {merchants}
        </main>
      </div>
    </div>
  );
}
