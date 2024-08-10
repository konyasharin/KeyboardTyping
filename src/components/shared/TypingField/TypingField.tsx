import { Symbol } from '@/components/shared/Symbol/Symbol.tsx';
import { FC, memo } from 'react';
import { CheckedSymbol } from '@/hooks/useTypingTest.ts';
import styles from './TypingField.module.css';
import { useClickOutside } from '@/hooks/useClickOutside.ts';

type TypingFieldProps = {
  setTyped: (value: string) => void;
  typed: string;
  checked: CheckedSymbol[];
};

export const TypingField: FC<TypingFieldProps> = memo(props => {
  const { ref } = useClickOutside<HTMLInputElement>(() => ref.current?.focus());
  return (
    <div className={styles.block}>
      <label htmlFor="input-plug">
        <div className={styles.words_field}>
          {props.checked.map((checked, i) => {
            return <Symbol checked={checked} key={i} />;
          })}
        </div>
      </label>
      <input
        className={styles.input}
        type="text"
        ref={ref}
        autoComplete={'off'}
        autoCorrect={'off'}
        autoCapitalize={'off'}
        id={'input-plug'}
        onChange={e => props.setTyped(e.target.value)}
        onKeyDown={() => {
          ref.current?.setSelectionRange(
            props.typed.length,
            props.typed.length,
          );
        }}
        onPaste={e => e.preventDefault()}
        value={props.typed}
      />
    </div>
  );
});
