export const useIntervalTime = (timeInSeconds = 0, paused?: boolean) => {
  let passedTime = 0;

  const interval = setInterval(() => {
    passedTime++;
    const timeLeft = timeInSeconds - passedTime;

    return timeLeft;
  }, 1000);

  if (paused) {
    clearInterval(interval);
  }

  return 0;
};
