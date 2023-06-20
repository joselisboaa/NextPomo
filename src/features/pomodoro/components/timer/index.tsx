"use client";
import classNames from "classnames";
import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { CountDownContext } from "../../contexts/CountDown";

export const Timer = () => {
  const { minutes, seconds, definePomodoroStatus, pomoStatus } = useContext(CountDownContext);
  const { isRestTime } = pomoStatus;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const minutesTime = minuteLeft + minuteRight;
  const secondsTime = secondLeft + secondRight;

  if (minutes + seconds === 0 && pomoStatus.isPaused === false) {
    definePomodoroStatus(isRestTime, true);
  }

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
