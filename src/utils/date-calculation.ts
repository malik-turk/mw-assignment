/**
 * Show time elapsed based on given date
 * @param date date to be manipulated
 * @returns 
 */
export const calculateDate = (date: Date) => {
  const today = new Date();
  const yearDiff = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  const dayDiff = today.getDate() - date.getDate();
  const hoursDiff = Math.trunc(Math.abs(today.getTime() - date.getTime()) / 3600000);

  if (hoursDiff < 24 && yearDiff === 0 && monthDiff === 0) {
    return `${hoursDiff} ${hoursDiff > 1 ? 'Hour' : 'Hours'} Ago`;
  }

  if (hoursDiff > 24 && yearDiff === 0 && monthDiff === 0) {
    return `${dayDiff} ${dayDiff > 1 ? 'Days' : 'Day'} Ago`;
  }

  if (hoursDiff > 24 && yearDiff === 0 && monthDiff >= 1) {
    return `${monthDiff} ${monthDiff > 1 ? 'Month' : 'Months'} Ago`;
  }

  return `${yearDiff} ${yearDiff > 1 ? 'Year' : 'Years'} Ago`;
};
