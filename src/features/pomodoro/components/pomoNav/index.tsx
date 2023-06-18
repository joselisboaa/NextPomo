import Image from "next/image";
import { Pomodoro, ShortRestIcon, LongRestIcon } from "@/assets";
import { twMerge } from "tailwind-merge";

export const PomodoroNav = () => {
  return (
    <div className={twMerge("flex h-3.5 w-fit items-center justify-center rounded-full bg-primary md:h-[3.5rem]")}>
      <button className="flex h-full w-fit items-center justify-center gap-2 rounded-l-[2rem] px-4 text-white hover:bg-hover-primary">
        <Image src={Pomodoro} alt="Pomodoro Starter" />
        <span>Pomodoro</span>
      </button>
      <button className="flex h-full w-fit items-center justify-center gap-2 px-4 text-white hover:bg-hover-primary">
        <Image src={ShortRestIcon} alt="Short rest" />
        <span>Pausa curta</span>
      </button>
      <button className="flex h-full w-fit items-center justify-center gap-2 rounded-r-[2rem] px-4 text-white hover:bg-hover-primary">
        <Image src={LongRestIcon} alt="Long rest" />
        <span>Pausa longa</span>
      </button>
    </div>
  );
};
