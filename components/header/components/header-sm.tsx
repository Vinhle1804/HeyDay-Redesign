"use client";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function HeaderSm() {
  const [value, setValue] = useState(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:hidden">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        className="fixed bottom-4 gap-10 left-4 right-4 !h-24 bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded-xl shadow-xl border border-yellow-300 z-50"
      >
        <BottomNavigationAction
          label="About"
          icon={<HomeIcon className="!text-5xl" />}
          onClick={() => scrollTo("about")}
          className="!text-lg !text-black hover:!text-yellow-600"
        />
        <BottomNavigationAction
          label="Features"
          icon={<SearchIcon className="!text-5xl" />}
          onClick={() => scrollTo("feature")}
          className="!text-lg !text-black hover:!text-yellow-600"
        />
        <BottomNavigationAction
          label="Support"
          icon={<SearchIcon className="!text-5xl" />}
          onClick={() => scrollTo("support")}
          className="!text-lg !text-black hover:!text-yellow-600"
        />
        <BottomNavigationAction
          label="Community"
          icon={<SearchIcon className="!text-5xl" />}
          onClick={() => scrollTo("footer")}
          className="!text-lg !text-black hover:!text-yellow-600"
        />
      </BottomNavigation>
    </div>
  );
}
