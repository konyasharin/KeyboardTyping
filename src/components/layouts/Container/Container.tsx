import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Container.module.css';

type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = props => {
  return (
    <div className={clsx(styles.container, props.className)}>
      {props.children}
    </div>
  );
};
