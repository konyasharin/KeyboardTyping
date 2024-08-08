import { useEffect, useState } from 'react';

type UseTimerOptions = {
  updateTime?: number;
};

export const useTimer = (startTime: number, options?: UseTimerOptions) => {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(startTime);

  useEffect(() => {
    if (!isActive) return;
    const updateTime = options?.updateTime ?? 1000;
    const interval = setInterval(() => {
      const newTime = timer - updateTime;
      if (newTime >= 0) setTimer(newTime);
      else {
        setTimer(0);
        setIsActive(false);
      }
    }, updateTime);
    return () => clearInterval(interval);
  }, [options?.updateTime, isActive, timer]);

  return { timer, setIsActive };
};
