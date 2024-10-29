"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center bg-charcoal w-full px-4 py-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>PP</AvatarFallback>
      </Avatar>
    </div>
  );
}
