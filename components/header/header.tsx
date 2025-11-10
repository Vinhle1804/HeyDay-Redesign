"use client";
import { useScreenType } from "@/hook/useScreenType";
import HeaderLg from "./components/header-lg";
import HeaderSm from "./components/header-sm";

export default function Header() {
  const screen = useScreenType();

  const UI = {
    mobile: <HeaderSm />,
    tablet: <HeaderSm/>,
    desktop: <HeaderLg />,
  };

  return UI[screen];
}
