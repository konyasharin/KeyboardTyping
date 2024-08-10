import { Symbol } from '@/components/shared/Symbol/Symbol.tsx';
import { FC, memo, useRef } from 'react';
import { CheckedSymbol } from '@/hooks/useTypingTest.ts';
import styles from './TypingField.module.css';

type TypingFieldProps = {
  setTyped: (value: string) => void;
  typed: string;
  checked: CheckedSymbol[];
};

export const TypingField: FC<TypingFieldProps> = memo(props => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <>
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
        ref={inputRef}
        id={'input-plug'}
        onChange={e => props.setTyped(e.target.value)}
        onKeyDown={() => {
          inputRef.current?.setSelectionRange(
            props.typed.length,
            props.typed.length,
          );
        }}
        value={props.typed}
      />
    </>
  );
});
