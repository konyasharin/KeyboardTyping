import { CheckedSymbol } from '@/hooks/useTypingTest.ts';
import { FC, memo } from 'react';
import styles from './Symbol.module.css';
import clsx from 'clsx';

type SymbolProps = {
  checked: CheckedSymbol;
};

const arePropsEqual = (oldProps: SymbolProps, newProps: SymbolProps) => {
  return (
    oldProps.checked.symbol === newProps.checked.symbol &&
    oldProps.checked.status === newProps.checked.status
  );
};

export const Symbol: FC<SymbolProps> = memo(props => {
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
}, arePropsEqual);
