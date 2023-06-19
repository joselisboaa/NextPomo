import { useIntervalTime } from "@/hooks/useIntervalTime";

export const useTimeLeft = (timeInSeconds: number, paused: boolean) => {
  const timeLeft = useIntervalTime(timeInSeconds, paused);
  const minutes = timeLeft / 60;
  const seconds = timeLeft % 60;

  return { minutes, seconds };
};
