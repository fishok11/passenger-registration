import React, { FC } from 'react';
import { usePaymentPage } from './usePaymentPage';
import styles from './PaymentPage.module.scss';
import Box from '../../UI/box/Box';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input';

const PaymentPage: FC = () => {
  const { mainState, registrationProcessState, handleReserState } =
    usePaymentPage();

  return (
    <div className={styles.wrapper}>
      <Box isVisible={mainState.step === mainState.stepsQuantity}>
        <div className={styles.container}>
          <div className={styles.contactDetails}>
            <h3 className={styles.title}>Contact details</h3>
            <p className={styles.text}>
              This information will be used to message you about any changes or
              update
            </p>
            <div className={styles.contactDetailFields}>
              <div>
                <Input
                  id={'email'}
                  type={'text'}
                  placeholder={'Email'}
                  // value={}
                  // onChange={}
                />
              </div>
              <div>
                <Input
                  id={'code'}
                  type={'text'}
                  placeholder={'Code'}
                  // value={}
                  // onChange={}
                />
              </div>
              <div>
                <Input
                  id={'phoneNumber'}
                  type={'text'}
                  placeholder={'Phone number'}
                  // value={}
                  // onChange={}
                />
              </div>
            </div>
          </div>
          <Button
            text={'Pay'}
            onClick={() => console.log(1)}
            variant={'primary'}
          />
        </div>
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
