import React, { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { stateMainSlice } from '../../app/mainSlice';
import styles from './Header.module.scss';

const Header: FC = () => {
  const state = useAppSelector(stateMainSlice);
  return (
    <header className={styles.header}>
      <h1>
        {state.step === 1 && 'Choose traveller(s)'}
        {state.step === 2 && 'Choose traveller(s)'}
        {state.step === 3 && 'Choose traveller(s)'}
        {state.step === 4 && 'Choose traveller(s)'}
        {state.step === 5 && 'Choose traveller(s)'}
      </h1>
    </header>
  );
};

export default Header;
