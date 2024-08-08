import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...attributes
}) => {
  return (
    <button className={clsx(styles.button, className)} {...attributes}>
      {children}
    </button>
  );
};
