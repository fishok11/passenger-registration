import React, { FC } from 'react';
import { useTravellersList } from './useTravellersList';
import CreateTravellers from '../createTravellers/CreateTravellers';
import Button from '../../UI/button/Button';
// import styles from './TravellersList.module.scss';

const TravellersList: FC = () => {
  const { state, handleOpenAddTravellersWindow } = useTravellersList();

  return (
    <>
      <Button
        text={'+ Create traveller'}
        onClick={() => handleOpenAddTravellersWindow()}
        variant={'secondary'}
      />
      <CreateTravellers isOpen={state.visibilityAddTravellerWindow} />
    </>
  );
};

export default TravellersList;
