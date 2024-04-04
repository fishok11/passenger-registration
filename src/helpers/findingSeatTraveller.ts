import { InteriorRow } from '../app/types';

export const findingSeatTraveller = (
  interior: InteriorRow[],
  travellerId: string,
) => {
  let seatTraveller = '';

  interior.forEach((rowData) =>
    rowData.row.forEach((seat) => {
      if (seat.travellerId === travellerId) {
        seatTraveller = seat.seatNumber + rowData.rowId;
        return;
      }
      return;
    }),
  );

  return seatTraveller;
};
