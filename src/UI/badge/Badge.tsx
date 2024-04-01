import React, { FC } from 'react';
import styles from './Badge.module.scss';

type BadgeProps = {
  text: string;
  selected: boolean;
  onClick: () => void;
};

const Badge: FC<BadgeProps> = ({ text, onClick, selected }) => {
  return (
    <div
      className={selected ? styles.selectedContainer : styles.baseContainer}
      onClick={() => onClick()}
    >
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Badge;
