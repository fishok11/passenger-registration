import React, { FC, useState } from 'react';
import styles from './CreateTravellers.module.scss';
import Box from '../../UI/box/Box';
import Input from '../../UI/input/Input';
import Dropdown from '../../UI/dropdown/Dropdown';
import DropdownItem from '../../UI/dropdown/DropdownItem';
import { useCreateTravellers } from './useCreateTravellers';

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
          <div className={styles.selectGenderContainer}>
            <div className={styles.selectGender}>
              <input id={'male'} type={'radio'} className={styles.radioInput} />
              <label htmlFor={'male'} className={styles.radioLabel}>
                Male
              </label>
            </div>
            <div className={styles.selectGender}>
              <input
                id={'female'}
                type={'radio'}
                className={styles.radioInput}
              />
              <label htmlFor={'female'} className={styles.radioLabel}>
                Female
              </label>
            </div>
          </div>
          <h3 className={styles.formTitle}>Nationality</h3>
          <Dropdown placeholder={'Status'} value={nationality}>
            {nationalities.map((nationality) => (
              <DropdownItem
                key={nationality}
                text={nationality}
                onClick={() => setNationality(nationality)}
              />
            ))}
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default CreateTravellers;
