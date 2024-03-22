export type Tarveller = {
  id: string;
  name: string;
  surname: string;
  gender: string;
  nationality: string;
  passport: string;
  // expireDatePasport: expireDatePasport,
};

export type AddTarveller = Omit<Tarveller, 'id'>;