import React, { FC } from 'react';
import styles from './Header.module.scss';
import { useHeader } from './useHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Header: FC = () => {
  const { state, handlePrevStep } = useHeader();

  return (
    <header className={styles.header}>
      <button onClick={() => handlePrevStep()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h2 className={styles.title}>
        {state.step === 1 && 'Choose traveller(s)'}
        {state.step === 2 && 'Pick your baggages'}
        {state.step === 3 && 'Travel insurance'}
        {state.step === 4 && 'Seat selector'}
        {state.step === 5 && 'Payment'}
      </h2>
    </header>
  );
};

export default Header;
