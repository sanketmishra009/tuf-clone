import React from "react";
import { ModeToggle } from "./mode-toggler";
import SwitchToggle from "./switch-toggle";

const Navroutes = () => {
  return (
    <div className="flex w-full justify-center gap-20">
      {/* <ModeToggle /> */}
      <SwitchToggle />
    </div>
  );
};

export default Navroutes;
