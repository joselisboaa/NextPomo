"use client";

import Image from "next/image";
import { Restart, playIcon, PauseActivateWithoutHover, Skip } from "@/assets";
import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDown";

export const ActionButtons = () => {
  const { setIsPaused } = useContext(CountDownContext);

  const resumePomodoroTimer = () => {
    setIsPaused(false);
  };

  const pausePomodoroTimer = () => {
    setIsPaused(true);
  };

  return (
    <div className="flex items-center justify-center gap-10">
      <button>
        <Image src={Restart} alt="Restart timer" />
      </button>
      <button onClick={resumePomodoroTimer}>
        <Image src={playIcon} alt="Play timer" />
      </button>
      <button>
        <Image src={Skip} alt="Pause timer" />
      </button>
    </div>
  );
};
