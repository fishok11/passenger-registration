import React, { FC } from 'react';
import styles from './Box.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';

type BoxProps = {
  isVisible: boolean;
  children: React.ReactNode;
};

const Box: FC<BoxProps> = ({ children, isVisible }) => {
  const mainState = useAppSelector(stateMainSlice);
  const initial = {
    x: mainState.movingForwardInSteps ? '100%' : '-100%',
    opacity: 0,
  };
  const animate = { x: '0%', opacity: 1 };
  const exit = { opacity: 0 };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{
            stiffness: 300,
            damping: 30,
            duration: 0.2,
          }}
          className={styles.box}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Box;
