// * Validations

// 1. Name validation.

export const nameValidation = (str) => {
  if (!str) return `Parameter/s missing, string needed!`;
  if (typeof str !== 'string')
    return 'There is an invalid data type, string needed!';
  const pat = /^[a-zA-Z ]+$/;
  return !pat.test(str) ? false : true;
};

// 2. Email validation.

export const emailValidation = (str) => {
  if (!str) return 'Parameter/s missing, string needed!';
  if (typeof str !== 'string')
    return 'There is an invalid data type, string needed!';
  const pat =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return !pat.test(str) ? false : true;
};
