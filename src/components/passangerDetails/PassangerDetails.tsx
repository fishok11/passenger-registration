import React, { FC } from 'react';
import styles from './PassangerDetails.module.scss';
import { usePassangerDetails } from './usePassangerDetails';
import SlideWindow from '../../UI/slideWindow/SlideWindow';
import { findingSeatTraveller } from '../../helpers/findingSeatTraveller';

const PassangerDetails: FC = () => {
  const {
    mainState,
    registrationProcessState,
    t,
    i18n,
    hanldeHidePassangerDetailsWindow,
    findBagVariantTitle,
  } = usePassangerDetails();

  return (
    <SlideWindow
      isOpen={registrationProcessState.visibilityPassangerDetailsWindow}
      title={'Passanger details'}
      onClickClose={() => hanldeHidePassangerDetailsWindow()}
    >
      <div className={styles.container}>
        {registrationProcessState.selectedTravellers.map((traveller) => (
          <div key={traveller.id} className={styles.travellerCard}>
            <h2 className={styles.travellerName}>
              {traveller.name + ' ' + traveller.surname}
            </h2>
            <div className={styles.travellerCardItem}>
              <p>{t('passengerDetails.personalID.title')}</p>
              <p className={styles.highlightedText}>
                {traveller.passport
                  ? traveller.passport
                  : t('passengerDetails.personalID.miss')}
              </p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>{t('passengerDetails.class.title')}</p>
              <p className={styles.highlightedText}>
                {t('passengerDetails.class.text')}
              </p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>{t('passengerDetails.cabinBag')}</p>
              <p className={styles.highlightedText}>
                {/* {registrationProcessState.selectedCabinBag?.title} */}
                {registrationProcessState.selectedCabinBag !== null
                  ? findBagVariantTitle(
                      mainState.cabinBaggageVariants[i18n.language],
                      registrationProcessState.selectedCabinBag,
                    )
                  : ''}
              </p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>{t('passengerDetails.checkedBag')}</p>
              <p className={styles.highlightedText}>
                {/* {registrationProcessState.selectedCheckedBag?.title} */}
                {registrationProcessState.selectedCheckedBag !== null
                  ? findBagVariantTitle(
                      mainState.checkedBaggageVariants[i18n.language],
                      registrationProcessState.selectedCheckedBag,
                    )
                  : ''}
              </p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>{t('passengerDetails.seatSelection')}</p>
              <p className={styles.highlightedText}>
                {findingSeatTraveller(
                  mainState.interiorConfiguration.interior,
                  traveller.id,
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SlideWindow>
  );
};

export default PassangerDetails;
