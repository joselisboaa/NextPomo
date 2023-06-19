import { useEffect, useState } from "react";

export const useIntervalTime = (timeInSeconds: number, paused?: boolean) => {
  const [currentTime, setCurrentTime] = useState<number>(timeInSeconds);
  let interval: NodeJS.Timer;

  const intervalTime = () => {
    interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  useEffect(() => {
    if (!paused) {
      intervalTime();
    }

    return () => {
      clearInterval(interval);
    };
  }, [paused]);

  return currentTime;
};
