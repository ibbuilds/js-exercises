// * Dates

// 1. Show difference between two dates.

export const timeBetweenDates = (start) => {
  if (!start) return 'Parameter/s missing, string needed!';
  if (typeof start !== 'string')
    return 'There is an invalid data type, string needed!';
  start = new Date(start);
  let end = new Date();
  const res = end - start;
  return `${Math.floor(res / 3.154e10)} years`;
};
