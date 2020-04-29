import { utcToZonedTime, format } from 'date-fns-tz';

const convertDate = (value: Date): string => {
  const timeZone = 'America/Cuiaba';
  const zonedDate = utcToZonedTime(value, timeZone);

  const pattern = 'dd/MM/yyyy';
  const output = format(zonedDate, pattern, { timeZone });
  return output;
};

export default convertDate;
