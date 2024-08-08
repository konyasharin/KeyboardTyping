import { Time } from '@/shared/types/Time.ts';
import { FC } from 'react';

type TimerProps = {
  time: Time;
  className?: string;
};

export const Timer: FC<TimerProps> = props => {
  return (
    <div
      className={'text_upper'}
    >{`${String(props.time.minutes).padStart(2, '0')}:${String(props.time.seconds).padStart(2, '0')}`}</div>
  );
};
