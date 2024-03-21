import React, { FC, useState } from 'react';
import styles from './CreateTravellers.module.scss';
import Input from '../../UI/input/Input';
import Dropdown from '../../UI/dropdown/Dropdown';
import DropdownItem from '../../UI/dropdown/DropdownItem';
import { useCreateTravellers } from './useCreateTravellers';
import Button from '../../UI/button/Button';

const CreateTravellers: FC = () => {
  const { nationalities, nationality, setNationality } = useCreateTravellers();

  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <h2 className={styles.title}>Add traveller</h2>
        <div className={styles.travellerInformationContainer}>
          <h2 className={styles.formTitle}>Traveller information</h2>
          <Input
            id={'name'}
            type={'text'}
            placeholder={'Given name(s)'}
            helperText={'As in passport/ID'}
          />
          <Input
            id={'surnaname'}
            type={'text'}
            placeholder={'Given surname(s)'}
            helperText={'As in passport/ID'}
          />
          <h3 className={styles.formTitle}>Gender</h3>
          <div className={styles.radioContainer}>
            <div className={styles.radioItem}>
              <input
                id={'male'}
                type={'radio'}
                className={styles.radioInput}
                name={'gender'}
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
            id={'name'}
            type={'text'}
            placeholder={'Passport or ID number'}
            helperText={'Reqired field'}
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
            <Dropdown placeholder={'Month'} value={nationality}>
              {nationalities.map((nationality) => (
                <DropdownItem
                  key={nationality}
                  text={nationality}
                  onClick={() => setNationality(nationality)}
                />
              ))}
            </Dropdown>
            <Input id={'year'} type={'text'} placeholder={'Year'} />
          </div>
          <Button
            text={'Confirm traveller'}
            onClick={() => console.log('Confirm traveller')}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTravellers;
