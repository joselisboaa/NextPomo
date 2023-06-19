"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { useTimeLeft } from "../../hooks/useTimeLeft";

interface ICountDown {
  isActive: boolean;
  isRestTime: boolean;
  hasFinished: boolean;
  setIsPaused: Dispatch<SetStateAction<boolean>>;
  setIsRestTime: Dispatch<SetStateAction<boolean>>;
  seconds: number;
  minutes: number;
}

interface Provider {
  children: React.ReactNode;
}

export const CountDownContext = createContext({} as ICountDown);

export const CountDownProvider = ({ children }: Provider) => {
  const [isRestTime, setIsRestTime] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const standardBreak = 25 * 60;

  const standardTime = useTimeLeft(standardBreak, isPaused);

  const minutes = standardTime.minutes;
  const seconds = standardTime.seconds;

  const hasFinished = minutes + seconds === 0;
  const isActive = !isPaused;

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isRestTime,
        isActive,
        setIsPaused,
        setIsRestTime,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};
