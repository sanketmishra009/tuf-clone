"use client";
import { Home } from "lucide-react";
import React from "react";
import Sidebaritem from "./sidebaritem";

const Sidebarroutes = () => {
  const Routes = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
  ];
  return (
    <div className="text-pink-500 bg-slate-900 dark:bg-slate-900 h-full w-full flex flex-col">
      {Routes.map((item, i) => (
        <Sidebaritem
          key={item.href || i}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default Sidebarroutes;
