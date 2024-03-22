import React, { FC } from 'react';
import { useTravellersList } from './useTravellersList';
import CreateTravellers from '../createTravellers/CreateTravellers';
// import styles from './TravellersList.module.scss';

const TravellersList: FC = () => {
  const { state, handleOpenAddTravellersWindow } = useTravellersList();

  return (
    <>
      <button onClick={() => handleOpenAddTravellersWindow()}>casca</button>
      <CreateTravellers isOpen={state.visibilityAddTravellerWindow} />
    </>
  );
};

export default TravellersList;
