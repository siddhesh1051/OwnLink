"use client";

import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full md:gap-4 p-3">
      <div className="h-full relative">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className="flex flex-col w-full md:h-[calc(100vh-24px)] gap-4">
        <Navbar />
        <div className="w-full flex flex-col h-full justify-start items-center gap-4 overflow-y-auto bg-charcoal p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
