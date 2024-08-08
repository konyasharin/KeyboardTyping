import { Time } from '@/shared/types/Time.ts';

export const createTimeObject = (time: number): Time => {
  const minutes = Math.floor(time / (1000 * 60));
  const seconds = Math.floor((time - minutes * 1000 * 60) / 1000);
  const milliseconds = Math.floor(time - minutes * 1000 * 60 - seconds * 1000);

  return {
    milliseconds,
    seconds,
    minutes,
  };
};
