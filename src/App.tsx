import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import PassengerRegistrationPage from './pages/passengerRegistrationPage/PassengerRegistrationPage';
import { Toaster } from 'react-hot-toast';
import PaymentPage from './pages/paymentPage/PaymentPage';
import { useAppSelector } from './app/hooks';
import { stateMainSlice } from './app/mainSlice';
import FinalPage from './pages/finalPage/FinalPage';
import { motion } from 'framer-motion';

function App() {
  const mainState = useAppSelector(stateMainSlice);

  return (
    <>
      <div className={styles.app}>
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
