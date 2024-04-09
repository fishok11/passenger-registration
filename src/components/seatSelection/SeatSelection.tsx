import React, { FC } from 'react';
import styles from './SeatSelection.module.scss';
import Box from '../../UI/box/Box';
import { useSeatSelection } from './useSeatSelection';
import Badge from '../../UI/badge/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { findingSeatTraveller } from '../../helpers/findingSeatTraveller';

const SeatSelection: FC = () => {
  const {
    mainState,
    registrationProcessState,
    t,
    handleSelectTravellerIdForseat,
    handleSelectSeatTraveller,
    checkOccupiedSeat,
  } = useSeatSelection();

  return (
    <Box isVisible={mainState.step === 4}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{t('seatSelection.title')}</h2>
          <p className={styles.text}>{t('seatSelection.description')}</p>
        </div>
        <div className={styles.passangersContainer}>
          {registrationProcessState.selectedTravellers.map((traveller) => (
            <Badge
              key={traveller.id}
              text={traveller.name + ' ' + traveller.surname}
              selected={
                registrationProcessState.travellerIdForSeat === traveller.id
              }
              additionalText={findingSeatTraveller(
                mainState.interiorConfiguration.interior,
                traveller.id,
              )}
              onClick={() => handleSelectTravellerIdForseat(traveller.id)}
            />
          ))}
        </div>
        <div className={styles.seatsContainer}>
          {mainState.interiorConfiguration.interior.map(
            (interior, indexInterior) => (
              <React.Fragment key={interior.rowId}>
                <div className={styles.rowContainer}>
                  <p className={styles.rowName}>{interior.rowId}</p>
                  {interior.row.map((seat) => (
                    <React.Fragment key={seat.id}>
                      {checkOccupiedSeat(seat.id) && (
                        <div
                          className={
                            mainState.interiorConfiguration.interior.length ===
                            6
                              ? styles.seatOccupiedCurrentTravellerFirstInterior
                              : styles.seatOccupiedCurrentTravellerTwoInterior
                          }
                        >
                          <FontAwesomeIcon icon={faCheck} />
                        </div>
                      )}
                      {seat.travellerId !== null &&
                        !checkOccupiedSeat(seat.id) && (
                          <div
                            className={
                              mainState.interiorConfiguration.interior
                                .length === 6
                                ? styles.seatOccupiedFirstInterior
                                : styles.seatOccupiedTwoInterior
                            }
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </div>
                        )}
                      {seat.travellerId === null && (
                        <div
                          key={seat.id}
                          onClick={() =>
                            handleSelectSeatTraveller(
                              registrationProcessState.travellerIdForSeat,
                              seat.id,
                            )
                          }
                          className={
                            mainState.interiorConfiguration.interior.length ===
                            6
                              ? styles.seatFirstInterior
                              : styles.seatTwoInterior
                          }
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
                {mainState.interiorConfiguration.interior.length === 6
                  ? indexInterior + 1 === 3 && (
                      <div className={styles.spaceContainer}>
                        <div className={styles.item}>
                          <div className={styles.space} />
                        </div>
                        {Array.from({
                          length:
                            mainState.interiorConfiguration.interior[0].row
                              .length,
                        }).map((_, index) => (
                          <div key={index} className={styles.item}>
                            {index + 1}
                          </div>
                        ))}
                      </div>
                    )
                  : (indexInterior + 1 === 2 || indexInterior + 1 === 5) && (
                      <div className={styles.spaceContainer}>
                        <div className={styles.item}>
                          <div className={styles.space} />
                        </div>
                        {Array.from({
                          length:
                            mainState.interiorConfiguration.interior[0].row
                              .length,
                        }).map((_, index) => (
                          <div key={index} className={styles.item}>
                            {index + 1}
                          </div>
                        ))}
                      </div>
                    )}
              </React.Fragment>
            ),
          )}
        </div>
      </div>
    </Box>
  );
};

export default SeatSelection;
