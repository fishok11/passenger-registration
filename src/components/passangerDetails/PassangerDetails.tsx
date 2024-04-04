import React, { FC } from 'react';
import styles from './PassangerDetails.module.scss';
import { usePassangerDetails } from './usePassangerDetails';
import SlideWindow from '../../UI/slideWindow/SlideWindow';
import { findingSeatTraveller } from '../../helpers/findingSeatTraveller';

const PassangerDetails: FC = () => {
  const {
    mainState,
    registrationProcessState,
    hanldeHidePassangerDetailsWindow,
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
              <p>PersonalID</p>
              <p className={styles.highlightedText}>
                {traveller.passport ? traveller.passport : 'Miss'}
              </p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>Class</p>
              <p className={styles.highlightedText}>Economy</p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>Cbin bag</p>
              <p className={styles.highlightedText}>{}</p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>Checked bag</p>
              <p className={styles.highlightedText}></p>
            </div>
            <div className={styles.travellerCardItem}>
              <p>Seat selection</p>
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
