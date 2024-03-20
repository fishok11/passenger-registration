import React, { FC } from 'react';
import styles from './StepNavigation.module.scss';
import Button from '../../UI/button/Button';

const StepNavigation: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Total due</p>
        <p>
          <b>USD 1000</b>
        </p>
      </div>
      <Button text={'Continue'} onClick={() => console.log(1)} />
    </div>
  );
};

export default StepNavigation;
