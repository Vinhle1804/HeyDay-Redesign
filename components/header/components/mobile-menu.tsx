"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "@/data/data";
import { useState } from "react";

export default function MobileMenu() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (id: string) => {
    setOpenGroup(prev => (prev === id ? null : id));
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-3 md:p-4">
          <MenuIcon className="w-20 h-20 md:w-20 md:h-20 text-white" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
          w-64 p-6 
          bg-black/60 backdrop-blur-xl 
          border-l border-white/10
          text-white
        "
      >
        <div className="mb-6">
          <h2 className="text-xl font-semibold tracking-wide">Menu</h2>
        </div>

        <ul className="flex flex-col gap-2">
          {navItems.map(item => (
            <li key={item.id}>
              {!item.children ? (
                <button
                  className="w-full text-left text-lg font-medium py-2 px-1 rounded-lg hover:bg-white/10 transition-all active:scale-95 uppercase"
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              ) : (
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    {/* Label parent scroll */}
                    <button
                      className="text-lg font-semibold py-2 px-1 rounded-lg hover:bg-white/10 transition-all uppercase flex-1 text-left"
                      onClick={() => scrollTo(item.id)}
                    >
                      {item.label}
                    </button>
                    {/* Toggle children */}
                    <button
                      className="ml-2 text-white/60 text-sm"
                      onClick={() => toggleGroup(item.id)}
                    >
                      {openGroup === item.id ? "−" : "+"}
                    </button>
                  </div>

                  {/* Children */}
                  {openGroup === item.id && (
                    <ul className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/10">
                      {item.children.map(child => (
                        <li key={child.id}>
                          <button
                            className="w-full text-left text-base font-medium py-1.5 px-1 rounded-md hover:bg-white/10 transition-all active:scale-95 uppercase"
                            onClick={() => scrollTo(child.id)}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
