import { Time } from '@/shared/types/Time.ts';

export const createTime = (options?: Partial<Time>) => {
  let time = 0;
  if (options?.milliseconds) time += options.milliseconds;
  if (options?.seconds) time += options.seconds * 1000;
  if (options?.minutes) time += options.minutes * 1000 * 60;

  return time;
};
