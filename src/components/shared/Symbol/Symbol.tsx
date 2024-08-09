import { CheckedSymbol } from '@/hooks/useTypingTest.ts';
import { FC } from 'react';
import styles from './Symbol.module.css';
import clsx from 'clsx';

type SymbolProps = {
  checked: CheckedSymbol;
};

export const Symbol: FC<SymbolProps> = props => {
  return (
    <span
      className={clsx(
        'text',
        styles.symbol,
        props.checked.symbol === ' ' &&
          props.checked.status === 'incorrect' &&
          styles.space_incorrect,
        styles[props.checked.status],
      )}
    >
      {props.checked.symbol}
    </span>
  );
};
