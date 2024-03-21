import React, { FC } from 'react';
import styles from './Box.module.scss';

type BoxProps = {
  children: React.ReactNode;
};

const Box: FC<BoxProps> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default Box;
