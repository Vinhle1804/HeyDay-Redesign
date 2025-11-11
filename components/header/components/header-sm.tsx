"use client";

import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LanguageIcon from '@mui/icons-material/Language';
import ExtensionIcon from '@mui/icons-material/Extension';

export default function HeaderSm() {
  const [value, setValue] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "About", icon: <HomeIcon />, target: "about" },
    { label: "Features", icon: <ExtensionIcon/>, target: "feature" },
    { label: "Support", icon: <SupportAgentIcon />, target: "support" },
    { label: "Community", icon: <LanguageIcon />, target: "footer" },
  ];

  return (
    <div className="lg:hidden">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        className="fixed bottom-4 left-4 right-4 !h-24 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded-xl shadow-xl border border-yellow-300 z-50"
      >
        {navItems.map((item, index) => (
          <BottomNavigationAction
            key={index}
            label={item.label}
            icon={React.cloneElement(item.icon, { className: "!text-5xl" })}
            onClick={() => scrollTo(item.target)}
            className="!text-lg !text-black hover:!text-yellow-600"
          />
        ))}
      </BottomNavigation>
    </div>
  );
}
