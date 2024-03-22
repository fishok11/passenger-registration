export type Traveller = {
  id: string;
  name: string;
  surname: string;
  gender: string;
  nationality: string;
  passport: string;
  // expireDatePasport: expireDatePasport,
};

export type AddTraveller = Omit<Traveller, 'id'>;
