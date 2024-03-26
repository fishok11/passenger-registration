import React from 'react';
import styles from './PickBaggages.module.scss';
import RadioCard from '../radioCard/RadioCard';
import { usePickBaggages } from './usePickBaggages';

const PickBaggages = () => {
  const { state } = usePickBaggages();

  return (
    <div className={styles.container}>
      {state.baggageCategories.map((category) => (
        <form className={styles.element} key={category.id}>
          <div>
            <h3 className={styles.sectionTitle}>{category.title}</h3>
            <p className={styles.sectionDescription}>{category.description}</p>
          </div>
          {state.baggageVariants
            .filter((variant) => variant.categoryId == category.id)
            .map((variant) => (
              <RadioCard key={variant.id} id={variant.id} label={variant.title}>
                <div className={styles.variantDescription}>
                  {variant.description && <p>{variant.description}</p>}
                  {variant.price !== 0 && variant.price !== null && (
                    <div className={styles.price}>USD {variant.price}</div>
                  )}
                  {variant.price === 0 && variant.price !== null && (
                    <div className={styles.priceFree}>Free</div>
                  )}
                </div>
              </RadioCard>
            ))}
        </form>
      ))}
    </div>
  );
};

export default PickBaggages;
