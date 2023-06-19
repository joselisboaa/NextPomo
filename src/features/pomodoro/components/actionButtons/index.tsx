"use client";

import Image from "next/image";
import {
  Restart,
  playIcon,
  PauseActivateWithoutHover,
  Skip,
  RestPlay,
  RestRestart,
  RestSkip,
  RestPause,
} from "@/assets";
import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDown";

export const ActionButtons = () => {
  const { setIsPaused, isActive, isRestTime } = useContext(CountDownContext);

  const resumePomodoroTimer = () => {
    setIsPaused(false);
  };

  const pausePomodoroTimer = () => {
    setIsPaused(true);
  };

  return (
    <div className="flex h-[6.25rem] w-[18.75rem] items-center justify-center gap-10">
      <button>
        {isRestTime ? <Image src={RestRestart} alt="Restart timer" /> : <Image src={Restart} alt="Restart timer" />}
      </button>
      <button
        onClick={isActive ? pausePomodoroTimer : resumePomodoroTimer}
        className="flex h-[100px] w-[110px] items-center justify-center"
      >
        {isRestTime ? (
          <Image src={isActive ? RestPause : RestPlay} alt="Play timer" />
        ) : (
          <Image src={isActive ? PauseActivateWithoutHover : playIcon} alt="Play timer" />
        )}
      </button>
      <button>
        {isRestTime ? <Image src={RestSkip} alt="Restart timer" /> : <Image src={Skip} alt="Pause timer" />}
      </button>
    </div>
  );
};
