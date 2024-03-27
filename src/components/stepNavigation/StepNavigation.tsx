import React, { FC } from 'react';
import styles from './StepNavigation.module.scss';
import Button from '../../UI/button/Button';
import { useStepNavigation } from './useStepNavigation';
import { AnimatePresence, motion } from 'framer-motion';

const StepNavigation: FC = () => {
  const { handleNextStep, isOpenInfo, handleOpenInfo } = useStepNavigation();

  return (
    <AnimatePresence>
      <motion.div
        // layout
        // data-isOpen={isOpenInfo}
        // initial={{ height: 'max-content' }}
        // animate={{ height: 'max-content' }}
        // exit={{ height: 0, opacity: 0 }}
        // transition={{ duration: 0.6 }}
        className={styles.container}
      >
        <button
          className={styles.buttonInfoContainer}
          onClick={handleOpenInfo}
        />
        <AnimatePresence>
          {isOpenInfo && (
            <motion.div
              // initial={{ height: 0 }}
              // animate={{ height: 'auto' }}
              // exit={{ height: 0 }}
              // transition={{ duration: 0.3 }}
              className={styles.infoContainer}
            >
              <div className={styles.infoText}>
                <p>1 x Adult</p>
                <p className={styles.price}>USD 0</p>
              </div>
              <div className={styles.infoText}>
                <p>Baggage</p>
                <p className={styles.price}>USD 0</p>
              </div>
              <div className={styles.line} />
              <div className={styles.infoText}>
                <p>Base fare</p>
                <p className={styles.price}>USD 0</p>
              </div>
              <div className={styles.infoText}>
                <p>Our service fee</p>
                <p className={styles.price}>USD 0</p>
              </div>
              <div className={styles.infoText}>
                <p>Other fees and taxes</p>
                <p className={styles.price}>USD 0</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.textContainer}>
          <p>Total due</p>
          <p>
            <b>USD 0</b>
          </p>
        </div>
        <Button
          text={'Continue'}
          onClick={() => handleNextStep()}
          variant={'primary'}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StepNavigation;
