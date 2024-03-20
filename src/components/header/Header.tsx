import React, { FC } from 'react';
import styles from './Header.module.scss';
import { useHeader } from './useHeader';

const Header: FC = () => {
  const { state, handlePrevStep } = useHeader();

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        {state.step === 1 && 'Choose traveller(s)'}
        {state.step === 2 && 'Choose traveller(s)'}
        {state.step === 3 && 'Choose traveller(s)'}
        {state.step === 4 && 'Choose traveller(s)'}
        {state.step === 5 && 'Choose traveller(s)'}
      </h2>
    </header>
  );
};

export default Header;
