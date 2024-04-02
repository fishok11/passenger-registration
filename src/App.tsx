import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import PassengerRegistrationPage from './pages/passengerRegistrationPage/PassengerRegistrationPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className={styles.app}>
        <div className={styles.bgGradient}></div>
        <Header />
        <PassengerRegistrationPage />
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
