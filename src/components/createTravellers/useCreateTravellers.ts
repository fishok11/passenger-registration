import { useState } from 'react';

export const useCreateTravellers = () => {
  const nationalities = ['Russian', 'Enlish', 'Irish'];
  const [nationality, setNationality] = useState('');

  return { nationalities, nationality, setNationality };
};
