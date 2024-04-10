import React from 'react';
import styles from './PickBaggages.module.scss';
import RadioCard from '../../UI/radioCard/RadioCard';
import { usePickBaggages } from './usePickBaggages';
import Box from '../../UI/box/Box';
import { BaggageVariant } from '../../app/types';

const PickBaggages = () => {
  const {
    mainState,
    registrationProcessState,
    handleSelectCabinBag,
    handleSelectCheckedBag,
    t,
    i18n,
  } = usePickBaggages();

  const cabinBags: BaggageVariant[] =
    mainState.cabinBaggageVariants[i18n.language];

  const checkedBags: BaggageVariant[] =
    mainState.checkedBaggageVariants[i18n.language];

  return (
    <Box isVisible={mainState.step === 2}>
      <div className={styles.container}>
        <form className={styles.element}>
          <div>
            <h3 className={styles.sectionTitle}>
              {t('pickBaggages.cabinBag.title')}
            </h3>
            <p className={styles.sectionDescription}>
              {t('pickBaggages.cabinBag.description')}
            </p>
          </div>
          {cabinBags.map((variant) => (
            <RadioCard
              key={variant.id}
              id={variant.id}
              name={'cabinBaggageVariants'}
              label={variant.title}
              onChange={() => handleSelectCabinBag(variant)}
              checked={
                variant.id === registrationProcessState.selectedCabinBag?.id
              }
            >
              <div className={styles.variantDescription}>
                {variant.description && <p>{variant.description}</p>}
                {variant.price !== null && (
                  <>
                    {variant.price !== 0 && (
                      <div className={styles.price}>USD {variant.price}</div>
                    )}
                    {variant.price === 0 && (
                      <div className={styles.priceFree}>
                        {t('pickBaggages.free')}
                      </div>
                    )}
                  </>
                )}
              </div>
            </RadioCard>
          ))}
        </form>
        <form className={styles.element}>
          <div>
            <h3 className={styles.sectionTitle}>
              {t('pickBaggages.checkedBag.title')}
            </h3>
            <p className={styles.sectionDescription}>
              {t('pickBaggages.checkedBag.description')}
            </p>
          </div>
          {checkedBags.map((variant) => (
            <RadioCard
              key={variant.id}
              id={variant.id}
              name={'checkedBaggageVariants'}
              label={variant.title}
              onChange={() => handleSelectCheckedBag(variant)}
              checked={
                variant.id === registrationProcessState.selectedCheckedBag?.id
              }
            >
              <div className={styles.variantDescription}>
                {variant.description && <p>{variant.description}</p>}
                {variant.price !== null && (
                  <>
                    {variant.price !== 0 && (
                      <div className={styles.price}>USD {variant.price}</div>
                    )}
                    {variant.price === 0 && (
                      <div className={styles.priceFree}>
                        {t('pickBaggages.free')}
                      </div>
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
