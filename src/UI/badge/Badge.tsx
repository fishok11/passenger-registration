import React, { FC } from 'react';
import styles from './Badge.module.scss';

type BadgeProps = {
  text: string;
};

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Badge;
