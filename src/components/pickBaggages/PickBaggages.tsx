import React from 'react';
import styles from './PickBaggages.module.scss';
import RadioCard from '../radioCard/RadioCard';
import { usePickBaggages } from './usePickBaggages';
import Box from '../../UI/box/Box';

const PickBaggages = () => {
  const { mainState, registrationProcessState, handleSelectBag } =
    usePickBaggages();

  return (
    <Box isVisible={mainState.step === 2}>
      <div className={styles.container}>
        {mainState.baggageCategories.map((category) => (
          <form className={styles.element} key={category.id}>
            <div>
              <h3 className={styles.sectionTitle}>{category.title}</h3>
              <p className={styles.sectionDescription}>
                {category.description}
              </p>
            </div>
            {mainState.baggageVariants
              .filter((variant) => variant.categoryId == category.id)
              .map((variant) => (
                <RadioCard
                  key={variant.id}
                  id={variant.id}
                  label={variant.title}
                  onChange={() => handleSelectBag(variant)}
                  checked={registrationProcessState.selectedBaggages.includes(
                    variant,
                  )}
                >
                  <div className={styles.variantDescription}>
                    {variant.description && <p>{variant.description}</p>}
                    {variant.price !== null && (
                      <>
                        {variant.price !== 0 && (
                          <div className={styles.price}>
                            USD {variant.price}
                          </div>
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
        ))}
      </div>
    </Box>
  );
};

export default PickBaggages;
