import React, { FC } from 'react';
import { useTravellersList } from './useTravellersList';
import CreateTravellers from '../createTravellers/CreateTravellers';
import Button from '../../UI/button/Button';
import styles from './TravellersList.module.scss';
import TravellerCadr from '../travellerCard/TravellerCard';
import Box from '../../UI/box/Box';

const TravellersList: FC = () => {
  const { state, handleOpenAddTravellersWindow } = useTravellersList();

  return (
    <Box isVisible={state.step === 1}>
      <div className={styles.container}>
        {state.travellers.map((traveller) => (
          <TravellerCadr
            key={traveller.id}
            id={traveller.id}
            name={traveller.name}
            surname={traveller.surname}
            passport={traveller.passport}
          />
        ))}
        <Button
          text={'+ Create traveller'}
          onClick={() => handleOpenAddTravellersWindow()}
          variant={'secondary'}
        />
      </div>
      <CreateTravellers isOpen={state.visibilityAddTravellerWindow} />
    </Box>
  );
};

export default TravellersList;
