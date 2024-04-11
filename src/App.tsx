import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import PassengerRegistrationPage from './pages/passengerRegistrationPage/PassengerRegistrationPage';
import { Toaster } from 'react-hot-toast';
import PaymentPage from './pages/paymentPage/PaymentPage';
import { useAppSelector } from './app/hooks';
import { stateMainSlice } from './app/mainSlice';
import FinalPage from './pages/finalPage/FinalPage';
import { motion } from 'framer-motion';
import { stateRegistrationProcessSlice } from './app/registrationProcessSlice';

function App() {
  const mainState = useAppSelector(stateMainSlice);
  const registrationProcessState = useAppSelector(
    stateRegistrationProcessSlice,
  );
  const [appStyles, setAppStyles] = useState<string>();

  useEffect(() => {
    if (
      mainState.visibilityAddTravellerWindow === true ||
      registrationProcessState.visibilityPassangerDetailsWindow === true
    ) {
      setAppStyles(styles.appWithoutScroll);
      return;
    }
    setAppStyles(styles.app);
  }, [
    mainState.visibilityAddTravellerWindow,
    registrationProcessState.visibilityPassangerDetailsWindow,
  ]);

  return (
    <>
      <div className={appStyles}>
        <motion.div
          initial={{ height: 200 }}
          animate={{ height: !mainState.finalPage ? 200 : '100%' }}
          transition={{
            ease: 'easeInOut',
            stiffness: 300,
            damping: 30,
            duration: 1.5,
          }}
          className={styles.bgGradient}
        />
        {mainState.finalPage === false && <Header />}
        {mainState.step < mainState.stepsQuantity &&
          mainState.finalPage === false && <PassengerRegistrationPage />}
        {mainState.step === mainState.stepsQuantity &&
          mainState.finalPage === false && <PaymentPage />}
        {mainState.finalPage && <FinalPage />}
        <Toaster position="top-center" />
      </div>
    </>
  );
}

export default App;
