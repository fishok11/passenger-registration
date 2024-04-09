import React, { FC } from 'react';
import { useTravellersList } from './useTravellersList';
import Button from '../../UI/button/Button';
import styles from './TravellersList.module.scss';
import TravellerCadr from '../travellerCard/TravellerCard';
import Box from '../../UI/box/Box';

const TravellersList: FC = () => {
  const {
    mainState,
    registrationProcessState,
    handleOpenAddTravellersWindow,
    handleSelectTraveller,
    t,
  } = useTravellersList();

  return (
    <Box isVisible={mainState.step === 1}>
      <div className={styles.container}>
        {mainState.travellers.map((traveller) => (
          <TravellerCadr
            key={traveller.id}
            id={traveller.id}
            name={traveller.name}
            surname={traveller.surname}
            passport={traveller.passport}
            checked={registrationProcessState.selectedTravellers
              .map((traveller) => traveller.id)
              .includes(traveller.id)}
            onChange={() => handleSelectTraveller(traveller)}
          />
        ))}
        <Button
          text={`+ ${t('travellersList.buttonText')}`}
          onClick={() => handleOpenAddTravellersWindow()}
          variant={'secondary'}
        />
      </div>
    </Box>
  );
};

export default TravellersList;
