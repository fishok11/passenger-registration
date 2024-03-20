import React from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import Stepper from './components/stepper/Stepper';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Stepper />
    </div>
  );
}

export default App;
