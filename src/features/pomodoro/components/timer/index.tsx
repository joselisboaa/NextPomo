"use client";
import classNames from "classnames";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { CountDownContext } from "../../contexts/CountDown";

export const Timer = () => {
  const { isRestTime, minutes, seconds } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const minutesTime = minuteLeft + minuteRight;
  const secondsTime = secondLeft + secondRight;

  return (
    <div
      className={twMerge(
        classNames(
          "my-5 flex h-[18.75rem] w-[18.75rem] items-center justify-center rounded-full border-2 border-solid border-secondary",
          {
            "border-rest-primary": isRestTime,
          },
        ),
      )}
    >
      <span className="font-Roboto text-[6.25rem] font-bold text-white">
        {minutesTime}:{secondsTime}
      </span>
    </div>
  );
};
