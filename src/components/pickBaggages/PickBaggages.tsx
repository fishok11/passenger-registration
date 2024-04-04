import React from 'react';
import styles from './PickBaggages.module.scss';
import RadioCard from '../radioCard/RadioCard';
import { usePickBaggages } from './usePickBaggages';
import Box from '../../UI/box/Box';

const PickBaggages = () => {
  const {
    mainState,
    registrationProcessState,
    handleSelectCabinBag,
    handleSelectCheckedBag,
  } = usePickBaggages();

  return (
    <Box isVisible={mainState.step === 2}>
      <div className={styles.container}>
        <form className={styles.element}>
          <div>
            <h3 className={styles.sectionTitle}>Cabin bag</h3>
            <p className={styles.sectionDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {mainState.cabinBaggageVariants.map((variant) => (
            <RadioCard
              key={variant.id}
              id={variant.id}
              name={'cabinBaggageVariants'}
              label={variant.title}
              onChange={() => handleSelectCabinBag(variant)}
              checked={variant === registrationProcessState.selectedCabinBag}
            >
              <div className={styles.variantDescription}>
                {variant.description && <p>{variant.description}</p>}
                {variant.price !== null && (
                  <>
                    {variant.price !== 0 && (
                      <div className={styles.price}>USD {variant.price}</div>
                    )}
                    {variant.price === 0 && (
                      <div className={styles.priceFree}>Free</div>
                    )}
                  </>
                )}
              </div>
            </RadioCard>
          ))}
        </form>
        <form className={styles.element}>
          <div>
            <h3 className={styles.sectionTitle}>Checked baggages</h3>
            <p className={styles.sectionDescription}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {mainState.checkedBaggageVariants.map((variant) => (
            <RadioCard
              key={variant.id}
              id={variant.id}
              name={'checkedBaggageVariants'}
              label={variant.title}
              onChange={() => handleSelectCheckedBag(variant)}
              checked={variant === registrationProcessState.selectedCheckedBag}
            >
              <div className={styles.variantDescription}>
                {variant.description && <p>{variant.description}</p>}
                {variant.price !== null && (
                  <>
                    {variant.price !== 0 && (
                      <div className={styles.price}>USD {variant.price}</div>
                    )}
                    {variant.price === 0 && (
                      <div className={styles.priceFree}>Free</div>
                    )}
                  </>
                )}
              </div>
            </RadioCard>
          ))}
        </form>
      </div>
    </Box>
  );
};

export default PickBaggages;
