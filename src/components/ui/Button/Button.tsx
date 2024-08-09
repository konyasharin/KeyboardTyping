import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

type ButtonVariants = 'primary' | 'default';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = 'default',
  ...attributes
}) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...attributes}
    >
      {children}
    </button>
  );
};
