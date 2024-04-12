export type Traveller = {
  id: string;
  name: string;
  surname: string;
  gender: string;
  nationality: string;
  passport: string;
  expireDatePasport: Date | null,
};

export type AddTraveller = Omit<Traveller, 'id'>;

export type BaggageVariant = {
  id: string;
  title: string;
  description: string | null;
  additionalInformation: string | null;
  price: number | null;
};

export type DataBaggageVariants = {
  [key: string]: BaggageVariant[];
};

export type Insurance = {
  id: string;
  title: string;
  description: string[] | null;
  price: number | null;
};

export type DataInsurances = {
  [key: string]: Insurance[];
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
