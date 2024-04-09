import React, { FC } from 'react';
import { useStepper } from './useStepper';
import styles from './Stepper.module.scss';

const Stepper: FC = () => {
  const { mainState, t } = useStepper();

  return (
    <div className={styles.container}>
      {mainState.step === 1 && (
        <p className={styles.text}>{t('stepper.textStep1')}</p>
      )}
      {mainState.step === 2 && (
        <p className={styles.text}>{t('stepper.textStep2')}</p>
      )}
      {mainState.step === 3 && (
        <p className={styles.text}>{t('stepper.textStep3')}</p>
      )}
      {mainState.step === 4 && (
        <p className={styles.text}>{t('stepper.textStep4')}</p>
      )}
      <div className={styles.stepper}>
        {Array.from({ length: mainState.stepsQuantity }).map((_, index) => (
          <React.Fragment key={index}>
            <div
              className={
                index + 1 === mainState.step
                  ? styles.currentStep
                  : index + 1 < mainState.step
                    ? styles.completedStep
                    : styles.step
              }
            >
              {index + 1}
            </div>
            {index + 1 < mainState.stepsQuantity && (
              <div
                className={
                  index + 1 < mainState.step
                    ? styles.completedLine
                    : styles.line
                }
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
