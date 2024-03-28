import React, { FC } from 'react';
import styles from './SeatSelection.module.scss';
import Box from '../../UI/box/Box';
import { useSeatSelection } from './useSeatSelection';

const SeatSelection: FC = () => {
  const { mainState } = useSeatSelection();
  return (
    <Box isVisible={mainState.step === 4}>
      <p></p>
    </Box>
  );
};

export default SeatSelection;
