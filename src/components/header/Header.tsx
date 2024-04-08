import React, { FC } from 'react';
import styles from './Header.module.scss';
import { useHeader } from './useHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Header: FC = () => {
  const { mainState, handlePrevStep, t, i18n } = useHeader();

  return (
    <header className={styles.header}>
      <button onClick={() => handlePrevStep()}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h2 className={styles.title}>
        {mainState.step === 1 && t('header.textStep1')}
        {mainState.step === 2 && t('header.textStep2')}
        {mainState.step === 3 && t('header.textStep3')}
        {mainState.step === 4 && t('header.textStep4')}
        {mainState.step === 5 && t('header.textStep5')}
      </h2>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('ru')}>ru</button>
    </header>
  );
};

export default Header;
