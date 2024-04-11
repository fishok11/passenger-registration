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
    cabinBagPrice,
    checkedBagPrice,
    insurancePrice,
    totalPrice,
    t,
  } = useStepNavigation();

  return (
    <motion.div className={styles.container}>
      <motion.button
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
                {registrationProcessState.selectedTravellers.length}x{' '}
                {t('stepsNavigation.passengers')}
              </motion.p>
              <motion.p className={styles.price}>USD {ticketsPrice}</motion.p>
            </motion.div>
            <motion.div className={styles.infoText}>
              <motion.p>{t('stepsNavigation.baggage')}</motion.p>
              <motion.p className={styles.price}>
                USD {cabinBagPrice + checkedBagPrice}
              </motion.p>
            </motion.div>
            <motion.div className={styles.line} />
            <motion.div className={styles.infoText}>
              <motion.p>{t('stepsNavigation.fare')}</motion.p>
              <motion.p className={styles.price}>
                USD {insurancePrice || 0}
              </motion.p>
            </motion.div>
            <motion.div className={styles.infoText}>
              <motion.p>{t('stepsNavigation.service')}</motion.p>
              <motion.p className={styles.price}>USD 0</motion.p>
            </motion.div>
            <motion.div className={styles.infoText}>
              <motion.p>{t('stepsNavigation.otherFees')}</motion.p>
              <motion.p className={styles.price}>USD 0</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.textContainer}>
        <p>{t('stepsNavigation.total')}</p>
        <p>
          <b>USD {totalPrice}</b>
        </p>
      </div>
      <Button
        text={t('stepsNavigation.button')}
        onClick={() => handleNextStep()}
        variant={'primary'}
      />
    </motion.div>
  );
};

export default StepNavigation;
