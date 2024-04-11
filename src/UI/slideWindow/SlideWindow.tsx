import React, { FC } from 'react';
import styles from './SlideWindow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

type SlideWindowProps = {
  isOpen: boolean;
  children: React.ReactNode;
  title: string;
  onClickClose: () => void;
};

const SlideWindow: FC<SlideWindowProps> = ({
  isOpen,
  children,
  title,
  onClickClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: isOpen ? 0 : '100vh' }}
          exit={{ y: '100vh' }}
          transition={{ stiffness: 300, damping: 30, duration: 0.2 }}
          className={styles.container}
        >
          <motion.div className={styles.element}>
            <motion.div className={styles.titleContainer}>
              <motion.button onClick={() => onClickClose()}>
                <FontAwesomeIcon icon={faXmark} />
              </motion.button>
              <motion.h2 className={styles.title}>{title}</motion.h2>
            </motion.div>
          </motion.div>
          <motion.div className={styles.childrenContainer}>{children}</motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideWindow;
