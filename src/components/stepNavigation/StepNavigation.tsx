import React, { FC } from 'react';
import styles from './StepNavigation.module.scss';
import Button from '../../UI/button/Button';
import { useStepNavigation } from './useStepNavigation';
import { AnimatePresence, motion } from 'framer-motion';

const StepNavigation: FC = () => {
  const {
    registrationProcessState,
    handleNextStep,
    isOpenInfo,
    handleOpenInfo,
    ticketsPrice,
    baggagePrice,
    insurancePrice,
  } = useStepNavigation();

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
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: '100%',
                padding: '10px',
              }}
              exit={{ opacity: 0, height: 0, padding: 0 }}
              transition={{
                ease: 'linear',
                stiffness: 300,
                damping: 30,
                duration: 0.1,
              }}
              className={styles.infoContainer}
            >
              <motion.div className={styles.infoText}>
                <motion.p>
                  {registrationProcessState.selectedTravellers.length}x Adult
                </motion.p>
                <motion.p className={styles.price}>USD {ticketsPrice}</motion.p>
              </motion.div>
              <motion.div className={styles.infoText}>
                <motion.p>Baggage</motion.p>
                <motion.p className={styles.price}>USD {baggagePrice}</motion.p>
              </motion.div>
              <motion.div className={styles.line} />
              <motion.div className={styles.infoText}>
                <motion.p>Base fare</motion.p>
                <motion.p className={styles.price}>
                  USD {insurancePrice || 0}
                </motion.p>
              </motion.div>
              <motion.div className={styles.infoText}>
                <motion.p>Our service fee</motion.p>
                <motion.p className={styles.price}>USD 0</motion.p>
              </motion.div>
              <motion.div className={styles.infoText}>
                <motion.p>Other fees and taxes</motion.p>
                <motion.p className={styles.price}>USD 0</motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.textContainer}>
          <p>Total due</p>
          <p>
            <b>USD {ticketsPrice + baggagePrice + insurancePrice}</b>
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
