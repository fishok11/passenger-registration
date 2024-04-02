import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import PassengerRegistrationPage from './pages/passengerRegistrationPage/PassengerRegistrationPage';
import { Toaster } from 'react-hot-toast';
import PaymentPage from './pages/paymentPage/PaymentPage';
import { useAppSelector } from './app/hooks';
import { stateMainSlice } from './app/mainSlice';

function App() {
  const mainState = useAppSelector(stateMainSlice);

  return (
    <>
      <div className={styles.app}>
        <div className={styles.bgGradient}></div>
        <Header />
        {mainState.step < mainState.stepsQuantity && (
          <PassengerRegistrationPage />
        )}
        {mainState.step === mainState.stepsQuantity && <PaymentPage />}
        <Toaster
          position="top-center"
          containerStyle={{
            position: 'absolute',
          }}
        />
      </div>
    </>
  );
}

export default App;
