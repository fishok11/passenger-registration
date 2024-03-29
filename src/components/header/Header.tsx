import React, { FC } from 'react';
import styles from './Header.module.scss';
import { useHeader } from './useHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Header: FC = () => {
  const { mainState, handlePrevStep } = useHeader();

  return (
    <header className={styles.header}>
      <button onClick={() => handlePrevStep()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h2 className={styles.title}>
        {mainState.step === 1 && 'Choose traveller(s)'}
        {mainState.step === 2 && 'Pick your baggages'}
        {mainState.step === 3 && 'Travel insurance'}
        {mainState.step === 4 && 'Seat selector'}
        {mainState.step === 5 && 'Payment'}
      </h2>
    </header>
  );
};

export default Header;
