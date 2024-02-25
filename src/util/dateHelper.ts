export const getMessageTimeFromDateString = (date: Date): string => {
  const dateTime = new Date(date);
  return `${dateTime.getUTCHours()}:${dateTime.getUTCMinutes()}`;
};
