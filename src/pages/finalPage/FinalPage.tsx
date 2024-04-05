import React, { FC } from 'react';
import styles from './FinalPage.module.scss';
import { useFinalPage } from './useFinalPage';
import Button from '../../UI/button/Button';
import Box from '../../UI/box/Box';

const FinalPage: FC = () => {
  const { mainState, handleResetState } = useFinalPage();

  return (
    <div className={styles.wrapper}>
      <Box isVisible={mainState.finalPage}>
        <div className={styles.container}>
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
