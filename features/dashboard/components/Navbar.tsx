import React from "react";
import Navroutes from "./Navroutes";

const Navbar = () => {
  return (
    <div className="p-4 h-full dark:bg-[#191a19] flex items-center  bg-slate-400 border-b-2 border-slate-900 dark:border-pink-900">
      <Navroutes />
    </div>
  );
};

export default Navbar;
