import React, { FC } from 'react';
import { useTravellersList } from './useTravellersList';
import CreateTravellers from '../createTravellers/CreateTravellers';

const TravellersList: FC = () => {
  const {
    state,
    handleOpenAddTravellersWindow,
  } = useTravellersList();

  return (
    <>
      <button onClick={() => handleOpenAddTravellersWindow()}>casca</button>
      {state.visibilityAddTravellerWindow && <CreateTravellers />}
    </>
  );
};

export default TravellersList;
