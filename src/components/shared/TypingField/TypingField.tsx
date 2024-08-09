import { Symbol } from '@/components/shared/Symbol/Symbol.tsx';
import {FC, memo} from 'react';
import { CheckedSymbol } from '@/hooks/useTypingTest.ts';
import styles from './TypingField.module.css';

type TypingFieldProps = {
  setTyped: (value: string) => void;
  typed: string;
  checkTyping: () => CheckedSymbol[];
};

export const TypingField: FC<TypingFieldProps> = memo(props => {
  console.log('rerender')
  return (
    <>
      <label htmlFor="input-plug">
        <div className={styles.words_field}>
          {props.checkTyping().map((checked, i) => {
            return <Symbol checked={checked} key={i} />;
          })}
        </div>
      </label>
      <input
        className={styles.input}
        type="text"
        id={'input-plug'}
        onChange={e => props.setTyped(e.target.value)}
        value={props.typed}
      />
    </>
  );
});
