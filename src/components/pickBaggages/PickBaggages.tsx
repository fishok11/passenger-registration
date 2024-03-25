import React from 'react';
import styles from './PickBaggages.module.scss';
import RadioCard from '../radioCard/RadioCard';

const PickBaggages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <div>
          <h3 className={styles.sectionTitle}>Cabin bag</h3>
          <p className={styles.sectionDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <RadioCard id={'8kg'} label={'8kg'}>
          <p></p>
        </RadioCard>
      </div>
      <div className={styles.element}>
        <div>
          <h3 className={styles.sectionTitle}>Checked baggages</h3>
          <p className={styles.sectionDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <RadioCard id={'9kg'} label={'9kg'}>
          <p></p>
        </RadioCard>
      </div>
    </div>
  );
};

export default PickBaggages;
