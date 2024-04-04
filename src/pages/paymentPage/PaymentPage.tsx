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
import PassangerDetails from '../../components/passangerDetails/PassangerDetails';
import CheckBoxCard from '../../UI/checkBoxCard/CheckBoxCard';

const PaymentPage: FC = () => {
  const {
    mainState,
    registrationProcessState,
    handleShowPassangerDetailsWindow,
    handleResetState,
    ticketsPrice,
    cabinBagPrice,
    insurancePrice,
    totalPrice,
    handleSelectPayVariant,
    handleSetPromoCode,
    handleOpenPromoInput,
    payVariant,
    promoCode,
    promoCodeName,
    interestDiscount,
    isOpenPromoInput,
    buttonText,
  } = usePaymentPage();

  return (
    <div className={styles.wrapper}>
      <Box isVisible={mainState.step === mainState.stepsQuantity}>
        <div className={styles.container}>
          <p className={styles.descriptionText}>
            Please secure your booking within
          </p>
          <div className={styles.promoContainer}>
            <button
              className={styles.promoButton}
              onClick={() => handleShowPassangerDetailsWindow()}
            >
              <span className={styles.promoText}>Passanger details</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
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
          <div className={styles.promoContainer}>
            <button
              className={styles.promoButton}
              onClick={() => handleOpenPromoInput()}
            >
              <span className={styles.promoText}>Promo code</span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            {isOpenPromoInput && (
              <div className={styles.promoActionContainer}>
                <Input
                  id={'promo'}
                  type={'text'}
                  placeholder={'Promo code'}
                  value={promoCode}
                  onChange={(e) => handleSetPromoCode(e.target.value)}
                  // error={errorName}
                />
                {/* <Button
                  text={'OK'}
                  onClick={() => console.log(1)}
                  variant={'primary'}
                /> */}
              </div>
            )}
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.infoText}>
              <p>{registrationProcessState.selectedTravellers.length}x Adult</p>
              <p>USD {ticketsPrice}</p>
            </div>
            <div className={styles.infoText}>
              <p>Baggage</p>
              <p>USD {cabinBagPrice}</p>
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
            {promoCode === promoCodeName && (
              <>
                <div className={styles.promoText}>
                  <p>
                    {promoCodeName} ({interestDiscount})%
                  </p>
                  <p>-USD {(totalPrice / 100) * interestDiscount}</p>
                </div>
                <div className={styles.line} />
              </>
            )}
            <div className={styles.totalPriceText}>
              <b>Total price</b>
              <p>
                USD{' '}
                {promoCode === promoCodeName
                  ? (totalPrice / 100) * (100 - interestDiscount)
                  : totalPrice}
              </p>
            </div>
          </div>
          <form className={styles.payVariantsContainer}>
            <div className={styles.payVariant}>
              <div className={styles.radioContainer}>
                <input
                  id={'applePay'}
                  type={'radio'}
                  name={'payVariants'}
                  className={styles.input}
                  value={'applePay'}
                  onChange={(e) => handleSelectPayVariant(e.target.value)}
                />
                <label htmlFor={'applePay'} className={styles.label}>
                  Apple pay
                </label>
              </div>
              <FontAwesomeIcon
                icon={faApplePay as IconProp}
                className={styles.applePay}
              />
            </div>
            <div className={styles.payVariant}>
              <div className={styles.radioContainer}>
                <input
                  id={'paypal'}
                  type={'radio'}
                  name={'payVariants'}
                  className={styles.input}
                  value={'paypal'}
                  onChange={(e) => handleSelectPayVariant(e.target.value)}
                />
                <label htmlFor={'paypal'} className={styles.label}>
                  Paypal
                </label>
              </div>
              <FontAwesomeIcon
                icon={faPaypal as IconProp}
                className={styles.paypal}
              />
            </div>
            <div className={styles.payVariant}>
              <div className={styles.radioContainer}>
                <input
                  id={'card'}
                  type={'radio'}
                  name={'payVariants'}
                  className={styles.input}
                  value={'card'}
                  onChange={(e) => handleSelectPayVariant(e.target.value)}
                  checked={payVariant === 'card'}
                />
                <label htmlFor={'card'} className={styles.label}>
                  Credit / Debit card
                </label>
              </div>
              <FontAwesomeIcon icon={faCreditCard} className={styles.card} />
            </div>
          </form>
          <CheckBoxCard
            id={'userPolicy'}
            label={'User policy'}
            onChange={() => console.log(0)}
            checked
          />
          <Button
            text={buttonText}
            onClick={() => console.log(1)}
            variant={payVariant == 'applePay' ? 'third' : 'primary'}
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
      <PassangerDetails />
    </div>
  );
};

export default PaymentPage;
