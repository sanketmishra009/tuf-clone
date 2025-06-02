"use client";
import React, { useState } from "react";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SwitchToggle = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div className="flex items-center gap-1">
      <Label htmlFor="Darkmode">
        {theme == "light" ? <Sun className="text-yellow-500" /> : <Moon />}
      </Label>
      <Switch
        className="mt-1"
        id="Darkmode"
        checked={theme == "dark" ? true : false}
        onCheckedChange={changeTheme}
      />
    </div>
  );
};

export default SwitchToggle;
