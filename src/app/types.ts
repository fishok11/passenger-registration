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

export type BaggageCategory = {
  id: string;
  title: string;
  description: string;
};

export type BaggageVariant = {
  id: string;
  title: string;
  description: string | null;
  additionalInformation: string | null;
  price: number | null;
};

export type Insurance = {
  id: string;
  title: string;
  description: string[] | null;
  price: number | null;
};

export type InteriorConfiguration = {
  id: string;
  interior: InteriorRow[];
};

export type InteriorRow = { rowId: string; row: Seat[] };

type Seat = {
  id: string;
  travellerId: string | null;
  seatNumber: number;
};
