import React from 'react';
import styles from './PickBaggages.module.scss';
import RadioCard from '../radioCard/RadioCard';
import { usePickBaggages } from './usePickBaggages';

const PickBaggages = () => {
  const { state } = usePickBaggages();

  return (
    <div className={styles.container}>
      {state.baggageCategories.map((category) => (
        <div className={styles.element} key={category.id}>
          <>
            <div>
              <h3 className={styles.sectionTitle}>{category.title}</h3>
              <p className={styles.sectionDescription}>
                {category.description}
              </p>
            </div>
            {state.baggageVariants
              .filter((variant) => variant.categoryId == category.id)
              .map((variant) => (
                <RadioCard
                  key={variant.id}
                  id={variant.id}
                  label={variant.title}
                >
                  <div className={styles.variantDescription}>
                    <p>{variant.description}</p>
                    {variant.price !== 0 && (
                      <div className={styles.price}>{variant.price}</div>
                    )}
                    {variant.price === 0 && (
                      <div className={styles.priceFree}>Free</div>
                    )}
                  </div>
                </RadioCard>
              ))}
          </>
        </div>
      ))}
    </div>
  );
};

export default PickBaggages;
