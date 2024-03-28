import React, { FC } from 'react';
import styles from './SeatSelection.module.scss';
import Box from '../../UI/box/Box';
import { useSeatSelection } from './useSeatSelection';
import Badge from '../../UI/badge/Badge';

const SeatSelection: FC = () => {
  const { mainState, registrationProcessState } = useSeatSelection();
  return (
    <Box isVisible={mainState.step === 4}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Passangers</h2>
          <p className={styles.text}>
            Pick your seat selection for each passanger
          </p>
        </div>
        <div className={styles.passangersContainer}>
          {registrationProcessState.selectedTravellers.map((traveller) => (
            <Badge
              key={traveller.id}
              text={traveller.name + ' ' + traveller.surname}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default SeatSelection;
