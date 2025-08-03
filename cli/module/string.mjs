// * Strings

// 1. Get length of string and validate.

export const getLength = (str) => {
  return !str
    ? 'Parameter/s missing, string needed!'
    : typeof str !== 'string'
    ? `'${str}' is not a valid type, string needed!`
    : str.length;
};

// 2. Cut 'n' characters of string.

export const cutString = (str, n) => {
  return !(str || n)
    ? 'Parameter/s missing, string and number needed!'
    : typeof str !== 'string' || isNaN(n)
    ? 'There is an invalid data type, string and number needed!'
    : str.substring(n, 0);
};

// 3. Return a string array separated by a character.

export const separateString = (str, char = ' ') => {
  return !(str || char)
    ? 'Parameter/s missing, string needed!'
    : typeof str !== 'string' || typeof char !== 'string'
    ? 'There is an invalid data type, strings needed!'
    : str.split(char);
};

// 4. Repeat a string 'n' times.

export const repeatString = (str, n = 2) => {
  if (!(str || n)) return 'Parameter/s missing, string needed!';
  if (typeof str !== 'string' || isNaN(n))
    return 'There is an invalid data type, string and number needed!';
  if (Math.sign(n) !== 1) return 'The number must be positive!';

  let arr = '';
  for (let i = 0; i < n; i++) {
    arr += [str.concat(' ')].join();
  }
  return arr;
};

// 5. Invert a string.

export const invertString = (str) => {
  return !str
    ? 'Parameter/s missing, string needed!'
    : typeof str !== 'string'
    ? 'There is an invalid data type, string needed!'
    : str.split('').reverse().join('');
};

// 6. Search coincidences of 'w' in string.

export const searchInString = (str, w) => {
  return !(str || w)
    ? 'Parameter/s missing, strings needed!'
    : typeof str !== 'string' || typeof w !== 'string'
    ? 'There is an invalid data type, strings needed!'
    : str.match(new RegExp(w, 'g')).length;
};

// 7. Check if a string is palindrome.

export const isPalindromic = (str) => {
  if (!str) return 'Parameter/s missing, string needed!';
  if (typeof str !== 'string')
    return 'There is an invalid data type, string needed!';
  str = str.toLowerCase();
  return str !== str.split('').reverse().join('') ? false : true;
};

// 8. Remove pattern ('p') from string.

export const removePatternFromString = (str, p) => {
  return !(str || p)
    ? 'Parameter/s missing, strings needed!'
    : typeof str !== 'string' || typeof p !== 'string'
    ? 'There is an invalid data type, strings needed!'
    : str.replace(new RegExp(p, 'g'), '').trim();
};

// 9. Show vowels and consonants of a given string.

export const vowelsAndConsonants = (str) => {
  if (!str) return 'Parameter/s missing, string needed!';
  if (typeof str !== 'string')
    return 'There is an invalid data type, string needed!';
  const vowels = /[aeiou]/gi;
  const consonants = /[bcdfghjklmnñpqrstvwxyz]/gi;
  return `${str.match(vowels).length} vowels, ${
    str.match(consonants).length
  } consonants`;
};
