import { useEffect, useState } from 'react';
import { useNow } from '@/hooks/useNow.ts';

type UseCountdownTimerOptions = {
  updateTime?: number;
};

export const useCountdownTimer = (
  startTime: number,
  onComplete: () => void,
  options?: UseCountdownTimerOptions,
) => {
  const [startAt, setStartAt] = useState<number | null>(null);
  const { now } = useNow(startAt !== null, {
    updateTime: options?.updateTime,
  });
  const [initialTime, setInitialTime] = useState(startTime);
  const timeFromStart = now - (startAt ?? now);
  const timer = Math.max(initialTime - timeFromStart, 0);

  useEffect(() => {
    setInitialTime(startTime);
  }, [startTime]);

  useEffect(() => {
    if (timer <= 0) {
      onComplete();
      setIsActive(false);
    }
  }, [timer]);

  const setIsActive = (newIsActive: boolean) => {
    if (!newIsActive) {
      setInitialTime(timer);
      setStartAt(null);
    } else {
      setStartAt(Date.now);
    }
  };

  const reset = () => {
    setIsActive(false);
    setInitialTime(startTime);
  };

  return { timer, setIsActive, reset };
};
