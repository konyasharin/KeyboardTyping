import { createTime } from '@/utils/helpers/createTime.ts';
import { createTimeObject } from '@/utils/helpers/createTimeObject.ts';
import { Button } from '@/components/ui/Button/Button.tsx';
import { Timer } from '@/components/shared/Timer/Timer.tsx';
import styles from './TypingPage.module.css';
import { useSelect } from '@/hooks/useSelect.ts';
import { useTypingTest } from '@/hooks/useTypingTest.ts';
import { RestartIcon } from '@/components/icons/RestartIcon.tsx';
import { TypingField } from '@/components/shared/TypingField/TypingField.tsx';

export const TypingPage = () => {
  const timeVariants = [15, 30, 60];
  const { selected, setSelected } = useSelect(timeVariants.length);
  const { setTyped, typed, checked, timer, isActive, restart } = useTypingTest(
    createTime({ seconds: timeVariants[selected] }),
  );

  return (
    <section className={styles.page}>
      <div className={styles.up_block}>
        <Timer time={createTimeObject(timer)} />
        <div className={styles.buttons}>
          {timeVariants.map((variant, i) => {
            return (
              <Button
                variant={'primary'}
                onClick={() => setSelected(i)}
                key={i}
                disabled={isActive}
                className={
                  selected === i ? styles.button_active : styles.button_disabled
                }
              >
                {variant}
              </Button>
            );
          })}
        </div>
      </div>
      <TypingField setTyped={setTyped} typed={typed} checked={checked} />
      <Button onClick={restart}>
        <RestartIcon />
      </Button>
    </section>
  );
};
