"use client";

import Link from "next/link";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { INavigateItem } from "@/constants/navigate-menus";

function MobileNavButton({ data }: { data: INavigateItem }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <button onClick={() => setOpen(!isOpen)} className="w-full">
      <div className="flex w-full flex-col">
        <div className="flex w-full justify-between items-center p-2 border-b">
          <p>{data.label}</p>
          <ArrowForwardIosIcon
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </div>
        {isOpen && (
          <ul className="text-left text-black text-lg divide-y divide-gray-200">
            {data?.children?.map((child) => (
              <li key={child.id} className="p-2 hover:bg-gray-50">
                <Link href={child.path ?? "/"} className="block w-full">
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </button>
  );
}

export default MobileNavButton;
