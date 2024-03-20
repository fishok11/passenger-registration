import React, { FC } from 'react';
import { useStepper } from './useStepper';
import styles from './Stepper.module.scss';

const Stepper: FC = () => {
  const { state } = useStepper();
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Provide the person who will travel for this flight
      </p>
      <div className={styles.stepper}>
        {Array.from({ length: state.stepsQuantity }).map((_, index) => (
          <React.Fragment key={index}>
            <div className={styles.step}>{index + 1}</div>
            {index + 1 < state.stepsQuantity && <div className={styles.line} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
