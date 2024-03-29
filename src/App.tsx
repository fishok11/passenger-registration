import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import PassengerRegistrationPage from './pages/passengerRegistrationPage/PassengerRegistrationPage';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.bgGradient}></div>
      <Header />
      <PassengerRegistrationPage />
    </div>
  );
}

export default App;
