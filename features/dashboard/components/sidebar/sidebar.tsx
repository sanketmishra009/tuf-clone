import React from "react";
import Logo from "@/features/dashboard/components/logo";
import Sidebarroutes from "./sidebarroutes";

const Sidebar = () => {
  return (
    <div
      className="h-full flex flex-col overflow-y-auto  dark:bg-[#191a19] shadom-sm
     bg-slate-400 border-r-2 border-slate-900 dark:border-pink-500"
    >
      <Logo />
      <div className="w-full h-full p-6">
        <Sidebarroutes />
      </div>
    </div>
  );
};

export default Sidebar;
