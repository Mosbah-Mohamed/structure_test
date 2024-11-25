export default (date: string | number | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Convert date to a Date object if it's not already
  const dateObj =
    typeof date === "string" || typeof date === "number"
      ? new Date(date)
      : date;

  return dateObj.toLocaleDateString(undefined, options);
};
