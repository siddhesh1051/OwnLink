"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { api } from "@/redux/api/apiSlice";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApiProvider api={api}>
      <NextUIProvider>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </ApiProvider>
  );
}
