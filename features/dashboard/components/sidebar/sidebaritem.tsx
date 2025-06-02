"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { SidebarItemsProps } from "../../types";
import { usePathname, useRouter } from "next/navigation";

const Sidebaritem = ({ icon: Icon, label, href }: SidebarItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname == href ||
    pathname?.startsWith(href + "/");
  //   const isActive = false;
  return (
    <>
      <button
        className={cn(
          "flex flex-col item-center gap-x-2 hover:text-slate-800 hover:bg-slate-500 rounded justify-center font-extrabold",
          isActive && "bg-pink-300 text-slate-700"
        )}
      >
        <div className="flex items-center gap-x-1 py-4 justify-center">
          <Icon />
          {label}
        </div>
        <div
          className={cn(
            "border-1 border-slate-200",
            isActive && "border-pink-500"
          )}
        />
      </button>
    </>
  );
};

export default Sidebaritem;
