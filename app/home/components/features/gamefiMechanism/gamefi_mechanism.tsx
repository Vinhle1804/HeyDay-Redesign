"use client";
import { useScreenType } from "@/hook/useScreenType";
import GamefiMechanismLg from "./components/gamefi_mechanism_lg";
import GamefiMechanismSm from "./components/gamefi_mechanism_sm";

export default function GamefiMechanism() {
  const screen = useScreenType();

  const UI = {
    mobile: <GamefiMechanismSm />,
    tablet: <GamefiMechanismLg />,
    desktop: <GamefiMechanismLg />,
  };

  return UI[screen];
}
