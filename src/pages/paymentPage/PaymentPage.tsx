import React, { FC } from 'react';
import { usePaymentPage } from './usePaymentPage';
import styles from './PaymentPage.module.scss';
import Box from '../../UI/box/Box';
import Button from '../../UI/button/Button';
import Input from '../../UI/input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faApplePay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const PaymentPage: FC = () => {
  const {
    mainState,
    registrationProcessState,
    handleResetState,
    ticketsPrice,
    baggagePrice,
    insurancePrice,
    totalPrice,
  } = usePaymentPage();

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
              <div className={styles.item}>
                <div className={styles.codeField}>
                  <Input
                    id={'code'}
                    type={'text'}
                    placeholder={'Code'}
                    // value={}
                    // onChange={}
                  />
                </div>
                <div className={styles.phoneNumberField}>
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
          </div>
          <button className={styles.promoContainer}>
            <p className={styles.promoText}>Promo code</p>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className={styles.infoContainer}>
            <div className={styles.infoText}>
              <p>{registrationProcessState.selectedTravellers.length}x Adult</p>
              <p>USD {ticketsPrice}</p>
            </div>
            <div className={styles.infoText}>
              <p>Baggage</p>
              <p>USD {baggagePrice}</p>
            </div>
            <div className={styles.line} />
            <div className={styles.infoText}>
              <p>Base fare</p>
              <p>USD {insurancePrice || 0}</p>
            </div>
            <div className={styles.infoText}>
              <p>Our service fee</p>
              <p>USD 0</p>
            </div>
            <div className={styles.infoText}>
              <p>Other fees and taxes</p>
              <p>USD 0</p>
            </div>
            <div className={styles.line} />
            <div className={styles.totalPriceText}>
              <b>Total price</b>
              <p>USD {totalPrice}</p>
            </div>
          </div>
          <div className={styles.payVariantsContainer}>
            <div className={styles.payVariant}>
              <input
                id={'applePay'}
                type={'radio'}
                name={'travellers'}
                className={styles.input}
                onChange={() => console.log(1)}
              />
              <label htmlFor={'applePay'} className={styles.label}>
                Apple pay
              </label>
              <FontAwesomeIcon icon={faApplePay as IconProp} />
            </div>
            <div className={styles.payVariant}>
              <input
                id={'paypal'}
                type={'radio'}
                name={'travellers'}
                className={styles.input}
                onChange={() => console.log(1)}
              />
              <label htmlFor={'paypal'} className={styles.label}>
                Paypal
              </label>
              <FontAwesomeIcon icon={faPaypal as IconProp} />
            </div>
            <div className={styles.payVariant}>
              <input
                id={'card'}
                type={'radio'}
                name={'travellers'}
                className={styles.input}
                onChange={() => console.log(1)}
              />
              <label htmlFor={'card'} className={styles.label}>
                Credit / Debit card
              </label>
              <FontAwesomeIcon icon={faCreditCard} />
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
