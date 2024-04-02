import React, { FC } from 'react';
import { usePaymentPage } from './usePaymentPage';
import styles from './PaymentPage.module.scss';
import Box from '../../UI/box/Box';
import Button from '../../UI/button/Button';

const PaymentPage: FC = () => {
  const { mainState, registrationProcessState, handleReserState } =
    usePaymentPage();

  return (
    <div className={styles.container}>
      <Box isVisible={mainState.step === mainState.stepsQuantity}>
        <Button
          text={'Pay'}
          onClick={() => console.log(1)}
          variant={'primary'}
        />
      </Box>
      {/* <Box isVisible={mainState.step === mainState.stepsQuantity}>
        <Button
          text={'Done'}
          onClick={() => handleReserState()}
          variant={'primary'}
        />
      </Box> */}
    </div>
  );
};

export default PaymentPage;
