import {useEffect, useRef, useState} from 'react';

type UseNowOptions = {
  updateTime?: number;
  callback?: () => void;
};

export const useNow = (isActive: boolean, options?: UseNowOptions) => {
  const [now, setNow] = useState(Date.now);
  const callbackRef = useRef(options?.callback);
  useEffect(() => {
    if (!isActive) return;
    setNow(Date.now);
    const interval = setInterval(() => {
      callbackRef.current?.();
      setNow(Date.now);
    }, options?.updateTime ?? 1000);
    return () => clearInterval(interval);
  }, [isActive, options?.updateTime]);

  return { now };
};
