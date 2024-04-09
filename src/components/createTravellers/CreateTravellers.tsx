import React, { FC } from 'react';
import styles from './CreateTravellers.module.scss';
import Input from '../../UI/input/Input';
import Dropdown from '../../UI/dropdown/Dropdown';
import DropdownItem from '../../UI/dropdown/DropdownItem';
import { useCreateTravellers } from './useCreateTravellers';
import Button from '../../UI/button/Button';
import SlideWindow from '../../UI/slideWindow/SlideWindow';
import CheckBoxCard from '../../UI/checkBoxCard/CheckBoxCard';

const CreateTravellers: FC = () => {
  const {
    mainState,
    t,
    name,
    setName,
    surname,
    setSurname,
    errorName,
    errorSurname,
    gender,
    setGender,
    nationalities,
    nationality,
    setNationality,
    passport,
    setPassport,
    months,
    month,
    setMonth,
    checkExpireDatePasport,
    handleChangeCheckExpireDatePasport,
    // expireDatePasport,
    // setExpireDatePasport,
    handleHideAddTravellerWindow,
    handleAddTraveller,
  } = useCreateTravellers();

  return (
    <SlideWindow
      isOpen={mainState.visibilityAddTravellerWindow}
      title={t('createTravellers.title')}
      onClickClose={() => handleHideAddTravellerWindow()}
    >
      <div className={styles.travellerInformationContainer}>
        <h2 className={styles.formTitle}>
          {t('createTravellers.travellerInformation.title')}
        </h2>
        <Input
          id={'name'}
          type={'text'}
          placeholder={t(
            'createTravellers.travellerInformation.nameInput.placeholder',
          )}
          helperText={t(
            'createTravellers.travellerInformation.nameInput.helperText',
          )}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errorName}
        />
        <Input
          id={'surnaname'}
          type={'text'}
          placeholder={t(
            'createTravellers.travellerInformation.surnanameInput.placeholder',
          )}
          helperText={t(
            'createTravellers.travellerInformation.surnanameInput.helperText',
          )}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          error={errorSurname}
        />
        <h3 className={styles.formTitle}>
          {t('createTravellers.gender.title')}
        </h3>
        <div className={styles.radioContainer}>
          <div className={styles.radioItem}>
            <input
              id={'male'}
              type={'radio'}
              className={styles.radioInput}
              name={'gender'}
              value={'male'}
              onChange={(e) => setGender(e.target.value)}
              checked={gender === 'male'}
            />
            <label htmlFor={'male'} className={styles.radioLabel}>
              {t('createTravellers.gender.radio.male')}
            </label>
          </div>
          <div className={styles.radioItem}>
            <input
              id={'female'}
              type={'radio'}
              className={styles.radioInput}
              name={'gender'}
              value={'female'}
              onChange={(e) => setGender(e.target.value)}
              checked={gender === 'female'}
            />
            <label htmlFor={'female'} className={styles.radioLabel}>
              {t('createTravellers.gender.radio.female')}
            </label>
          </div>
        </div>
        <h3 className={styles.formTitle}>
          {t('createTravellers.nationality.title')}
        </h3>
        <Dropdown
          placeholder={t('createTravellers.nationality.countryInput')}
          value={nationality}
        >
          {nationalities.map((nationality) => (
            <DropdownItem
              key={nationality}
              text={nationality}
              onClick={() => setNationality(nationality)}
            />
          ))}
        </Dropdown>
      </div>
      <div className={styles.travellerInformationContainer}>
        <h2 className={styles.formTitle}>
          {t('createTravellers.documentInformation.title')}
        </h2>
        <Input
          id={'passport'}
          type={'text'}
          placeholder={t(
            'createTravellers.documentInformation.passportInput.placeholder',
          )}
          helperText={t(
            'createTravellers.documentInformation.passportInput.helperText',
          )}
          value={passport}
          onChange={(e) => setPassport(e.target.value)}
        />
        <CheckBoxCard
          id={'expireDate'}
          label={t('createTravellers.documentInformation.checkBoxLabel')}
          onChange={() => handleChangeCheckExpireDatePasport()}
          text={''}
          checked={checkExpireDatePasport}
        />
        {checkExpireDatePasport && (
          <>
            <h3 className={styles.formTitle}>Expire date</h3>
            <div className={styles.expireDateContainer}>
              <Input id={'day'} type={'text'} placeholder={'Day'} />
              <Dropdown placeholder={'Month'} value={month}>
                {months.map((month) => (
                  <DropdownItem
                    key={month}
                    text={month}
                    onClick={() => setMonth(month)}
                  />
                ))}
              </Dropdown>
              <Input id={'year'} type={'text'} placeholder={'Year'} />
            </div>
          </>
        )}
        <Button
          text={t('createTravellers.confirmButton')}
          onClick={() => handleAddTraveller()}
          variant={'primary'}
        />
      </div>
    </SlideWindow>
  );
};

export default CreateTravellers;
