import React, { FC } from 'react';
import styles from './CreateTravellers.module.scss';
import Input from '../../UI/input/Input';
import Dropdown from '../../UI/dropdown/Dropdown';
import DropdownItem from '../../UI/dropdown/DropdownItem';
import { useCreateTravellers } from './useCreateTravellers';
import Button from '../../UI/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import SlideWindow from '../../UI/slideWindow/SlideWindow';

const CreateTravellers: FC = () => {
  const {
    mainState,
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
    // expireDatePasport,
    // setExpireDatePasport,
    handleHideAddTravellerWindow,
    handleAddTraveller,
  } = useCreateTravellers();

  return (
            <SlideWindow
              isOpen={mainState.visibilityAddTravellerWindow}
              title={'Add traveller'}
              onClickClose={() => handleHideAddTravellerWindow()}
            >
              <div className={styles.travellerInformationContainer}>
                <h2 className={styles.formTitle}>Traveller information</h2>
                <Input
                  id={'name'}
                  type={'text'}
                  placeholder={'Given name(s)'}
                  helperText={'As in passport/ID'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={errorName}
                />
                <Input
                  id={'surnaname'}
                  type={'text'}
                  placeholder={'Given surname(s)'}
                  helperText={'As in passport/ID'}
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  error={errorSurname}
                />
                <h3 className={styles.formTitle}>Gender</h3>
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
                      Male
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
                      Female
                    </label>
                  </div>
                </div>
                <h3 className={styles.formTitle}>Nationality</h3>
                <Dropdown placeholder={'Select country'} value={nationality}>
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
                <h2 className={styles.formTitle}>Document information</h2>
                <Input
                  id={'passport'}
                  type={'text'}
                  placeholder={'Passport or ID number'}
                  helperText={'Reqired field'}
                  value={passport}
                  onChange={(e) => setPassport(e.target.value)}
                />
                <div className={styles.radioContainer}>
                  <div className={styles.radioItem}>
                    <input
                      id={'expireDate'}
                      type={'Checkbox'}
                      className={styles.radioInput}
                      name={'expireDate'}
                    />
                    <label htmlFor={'expireDate'} className={styles.radioLabel}>
                      Document has expire date
                    </label>
                  </div>
                </div>
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
                <Button
                  text={'Confirm traveller'}
                  onClick={() => handleAddTraveller()}
                  variant={'primary'}
                />
              </div>
            </SlideWindow>
  );
};

export default CreateTravellers;
