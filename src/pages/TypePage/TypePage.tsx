import { useTimer } from '@/hooks/useTimer.ts';
import { createTime } from '@/utils/helpers/createTime.ts';
import { createTimeObject } from '@/utils/helpers/createTimeObject.ts';
import { useEffect } from 'react';
import { Button } from '@/components/ui/Button/Button.tsx';
import { Timer } from '@/components/shared/Timer/Timer.tsx';
import styles from './TypePage.module.css';
import { useSelect } from '@/hooks/useSelect.ts';

export const TypePage = () => {
  const timeVariants = [15, 30, 60];
  const { timer, setIsActive } = useTimer(
    createTime({ seconds: 10, minutes: 1 }),
  );
  const { selected, setSelected } = useSelect(timeVariants.length);

  useEffect(() => {
    setIsActive(true);
  }, []);
  return (
    <section>
      <div className={styles.up_block}>
        <Timer time={createTimeObject(timer)} />
        <div className={styles.buttons}>
          {timeVariants.map((variant, index) => {
            return (
              <Button
                onClick={() => setSelected(index)}
                key={index}
                className={
                  selected === index
                    ? styles.button_active
                    : styles.button_disabled
                }
              >
                {variant}
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
