"use client";

import { createContext, useState } from "react";
import { useTimeLeft } from "../../hooks/useTimeLeft";

interface PomoStatus {
  isRestTime: boolean;
  isPaused: boolean;
  pomoTime: number;
}

type DefinePomoStatus = (isRestTime?: boolean, isPaused?: boolean, pomoTime?: number) => void;

interface ICountDown {
  pomoStatus: PomoStatus;
  definePomodoroStatus: DefinePomoStatus;
  isActive: boolean;
  hasFinished: boolean;
  seconds: number;
  minutes: number;
  standardBreak: number;
  shortBreak: number;
}

interface Provider {
  children: React.ReactNode;
}

export const CountDownContext = createContext({} as ICountDown);

export const CountDownProvider = ({ children }: Provider) => {
  const [pomoStatus, setPomoStatus] = useState<PomoStatus>({ isRestTime: false, isPaused: true, pomoTime: 25 * 60 });

  const standardTime = useTimeLeft(pomoStatus.pomoTime, pomoStatus.isPaused);

  const minutes = Math.floor(standardTime.minutes);
  const seconds = standardTime.seconds;

  const hasFinished = minutes + seconds === 0;
  const isActive = !pomoStatus.isPaused;

  const standardBreak = 25 * 60;
  const shortBreak = 15 * 60;

  const definePomodoroStatus = (
    isRestTime: boolean = pomoStatus.isRestTime,
    isPaused: boolean = pomoStatus.isPaused,
    pomoTime: number = pomoStatus.pomoTime,
  ) => {
    setPomoStatus((prevStatus) => {
      return { ...prevStatus, isPaused, isRestTime, pomoTime };
    });
  };

  return (
    <CountDownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        pomoStatus,
        definePomodoroStatus,
        standardBreak,
        shortBreak,
        isActive,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
};
