import Image from "next/image";
import { Pomodoro, ShortRestIcon, LongRestIcon } from "@/assets";
import { twMerge } from "tailwind-merge";

export const PomodoroNav = () => {
  return (
    <div
      className={twMerge(
        "flex h-[3.5rem] w-40 items-center justify-center gap-2 rounded-full bg-primary md:h-[3.5rem]",
      )}
    >
      <button className="flex w-[8.75rem] gap-2 text-white ">
        <Image src={Pomodoro} alt="Pomodoro Starter" />
        <span>Pomodoro</span>
      </button>
      <button className="flex w-[8.75rem] gap-2 text-white">
        <Image src={ShortRestIcon} alt="Short rest" />
        <span>Pausa curta</span>
      </button>
      <button className="flex w-[8.75rem] gap-2 text-white">
        <Image src={LongRestIcon} alt="Long rest" />
        <span>Pausa longa</span>
      </button>
    </div>
  );
};
