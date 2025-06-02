import Navbar from "@/features/dashboard/components/Navbar";
import Sidebar from "@/features/dashboard/components/sidebar/sidebar";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full">
        <div className="w-50 fixed h-full z-50 hidden md:flex flex-col">
          <Sidebar />
        </div>

        <div className="flex-col w-full">
          <div className="h-15 md:left-50 fixed w-full">
            <Navbar />
          </div>

          <div className="mt-15 h-full md:pl-50">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
