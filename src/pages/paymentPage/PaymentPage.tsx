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
    t,
    handleShowPassangerDetailsWindow,
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
    checkUserPolicy,
    handleChangeCheckUserPolicy,
    buttonText,
    hanldeGoToTheFinishPage,
  } = usePaymentPage();

  return (
    <div className={styles.wrapper}>
      <Box isVisible={mainState.step === mainState.stepsQuantity}>
        <div className={styles.container}>
          <p className={styles.descriptionText}>{t('payment.description')}</p>
          <div className={styles.promoContainer}>
            <button
              className={styles.promoButton}
              onClick={() => handleShowPassangerDetailsWindow()}
            >
              <span className={styles.promoText}>
                {t('payment.passengerDetailsButtonText')}
              </span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
          <div className={styles.contactDetails}>
            <h3 className={styles.title}>
              {t('payment.contactDetails.title')}
            </h3>
            <p className={styles.text}>
              {t('payment.contactDetails.description')}
            </p>
            <div className={styles.contactDetailFields}>
              <div>
                <Input
                  id={'email'}
                  type={'text'}
                  placeholder={t(
                    'payment.contactDetails.inputs.inputEmailPlaceholder',
                  )}
                  // value={}
                  // onChange={}
                />
              </div>
              <div className={styles.item}>
                <div className={styles.codeField}>
                  <Input
                    id={'code'}
                    type={'text'}
                    placeholder={t(
                      'payment.contactDetails.inputs.inputCodePlaceholder',
                    )}
                    // value={}
                    // onChange={}
                  />
                </div>
                <div className={styles.phoneNumberField}>
                  <Input
                    id={'phoneNumber'}
                    type={'text'}
                    placeholder={t(
                      'payment.contactDetails.inputs.inputEmailPlainputPhonePlaceholderceholder',
                    )}
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
              <span className={styles.promoText}>
                {t('payment.promoCode.promoCodeButtonText')}
              </span>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            {isOpenPromoInput && (
              <div className={styles.promoActionContainer}>
                <Input
                  id={'promo'}
                  type={'text'}
                  placeholder={t('payment.promoCode.promoCodeInputPlaceholder')}
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
              <p>
                {registrationProcessState.selectedTravellers.length}x{' '}
                {t('payment.info.passengers')}
              </p>
              <p>USD {ticketsPrice}</p>
            </div>
            <div className={styles.infoText}>
              <p>{t('payment.info.baggage')}</p>
              <p>USD {cabinBagPrice}</p>
            </div>
            <div className={styles.line} />
            <div className={styles.infoText}>
              <p>{t('payment.info.fare')}</p>
              <p>USD {insurancePrice || 0}</p>
            </div>
            <div className={styles.infoText}>
              <p>{t('payment.info.service')}</p>
              <p>USD 0</p>
            </div>
            <div className={styles.infoText}>
              <p>{t('payment.info.otherFees')}</p>
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
              <b>{t('payment.info.total')}</b>
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
                  {t('payment.payVariants.apple')}
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
                  {t('payment.payVariants.paypal')}
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
                  {t('payment.payVariants.card')}
                </label>
              </div>
              <FontAwesomeIcon icon={faCreditCard} className={styles.card} />
            </div>
          </form>
          <CheckBoxCard
            id={'userPolicy'}
            label={t('payment.userPolicy.title')}
            text={t('payment.userPolicy.description')}
            onChange={() => handleChangeCheckUserPolicy()}
            checked={checkUserPolicy}
          />
          <Button
            text={buttonText}
            onClick={() => hanldeGoToTheFinishPage()}
            variant={payVariant == 'applePay' ? 'third' : 'primary'}
          />
        </div>
      </Box>
      <PassangerDetails />
    </div>
  );
};

export default PaymentPage;
