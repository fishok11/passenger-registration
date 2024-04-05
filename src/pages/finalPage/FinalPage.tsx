import React, { FC } from 'react';
import styles from './FinalPage.module.scss';
import { useFinalPage } from './useFinalPage';
import Button from '../../UI/button/Button';
import Box from '../../UI/box/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const FinalPage: FC = () => {
  const { mainState, handleResetState } = useFinalPage();

  return (
    <div className={styles.wrapper}>
      <Box isVisible={mainState.finalPage}>
        <div className={styles.container}>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              stiffness: 300,
              damping: 30,
              duration: 1.5,
            }}
            className={styles.airplane}
          >
            <FontAwesomeIcon icon={faPlane} />
          </motion.div>
          <h1 className={styles.title}>Payment Completed</h1>
          <Button
            text={'Done'}
            onClick={() => handleResetState()}
            variant={'primary'}
          />
        </div>
      </Box>
    </div>
  );
};

export default FinalPage;
