import React, { FC } from 'react';
import styles from './Badge.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type BadgeProps = {
  text: string;
  selected: boolean;
  additionalText: string;
  onClick: () => void;
};

const Badge: FC<BadgeProps> = ({ text, onClick, selected, additionalText }) => {
  return (
    <div
      className={selected ? styles.selectedContainer : styles.baseContainer}
      onClick={() => onClick()}
    >
      <div className={additionalText ? styles.seatIsSelectedText : styles.text}>
        {additionalText && (
          <div className={styles.check}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        )}
        {text}
        {additionalText && <div className={styles.space} />}
        {additionalText}
      </div>
    </div>
  );
};

export default Badge;
