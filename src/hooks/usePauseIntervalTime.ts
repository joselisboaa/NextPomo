import { useIntervalTime } from "./useIntervalTime";

export const usePauseIntervalTime = (timeLeft: number) => {
  useIntervalTime(timeLeft, true);
};
