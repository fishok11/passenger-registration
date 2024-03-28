import React, { FC } from 'react';
import styles from './Badge.module.scss';

type BadgeProps = {
  text: string;
};

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Badge;
