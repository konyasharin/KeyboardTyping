import { Time } from '@/shared/types/Time.ts';

export const calculateWpm = (totalSymbols: number, time: Time) => {
  // миллисекунды отбрасываем
  const minutes = time.minutes + time.seconds / 60;
  return totalSymbols / 5 / minutes;
};
