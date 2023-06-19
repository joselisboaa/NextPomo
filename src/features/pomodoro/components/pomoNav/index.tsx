"use client";

import Image from "next/image";
import { Pomodoro, ShortRestIcon, LongRestIcon } from "@/assets";
import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import { CountDownContext } from "../../contexts/CountDown";

export const PomodoroNav = () => {
  const { setIsRestTime } = useContext(CountDownContext);

  return (
    <div className={twMerge("flex h-3.5 w-fit items-center justify-center rounded-full bg-primary md:h-[3.5rem]")}>
      <button
        onClick={() => setIsRestTime(false)}
        className="flex h-full w-fit items-center justify-center gap-2 rounded-l-[2rem] px-4 text-white hover:bg-hover-primary"
      >
        <Image src={Pomodoro} alt="Pomodoro Starter" />
        <span>Pomodoro</span>
      </button>
      <button
        onClick={() => setIsRestTime(true)}
        className="flex h-full w-fit items-center justify-center gap-2 px-4 text-white hover:bg-hover-primary"
      >
        <Image src={ShortRestIcon} alt="Short rest" />
        <span>Pausa curta</span>
      </button>
      <button
        onClick={() => setIsRestTime(true)}
        className="flex h-full w-fit items-center justify-center gap-2 rounded-r-[2rem] px-4 text-white hover:bg-hover-primary"
      >
        <Image src={LongRestIcon} alt="Long rest" />
        <span>Pausa longa</span>
      </button>
    </div>
  );
};
