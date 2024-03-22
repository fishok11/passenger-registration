import React, { FC } from 'react';
import styles from './StepNavigation.module.scss';
import Button from '../../UI/button/Button';
import { useStepNavigation } from './useStepNavigation';

const StepNavigation: FC = () => {
  const { handleNextStep } = useStepNavigation();

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>Total due</p>
        <p>
          <b>USD 1000</b>
        </p>
      </div>
      <Button
        text={'Continue'}
        onClick={() => handleNextStep()}
        variant={'primary'}
      />
    </div>
  );
};

export default StepNavigation;
