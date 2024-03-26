import React, { FC } from 'react';
import styles from './Box.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

type BoxProps = {
  isVisible: boolean;
  children: React.ReactNode;
};

const Box: FC<BoxProps> = ({ children, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: '0%', opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
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
