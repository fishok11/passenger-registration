import React, { FC } from 'react';
import { usePaymentPage } from './usePaymentPage';

const PaymentPage: FC = () => {
  const { mainState, registrationProcessState } = usePaymentPage();
  
  return <></>;
};

export default PaymentPage;
