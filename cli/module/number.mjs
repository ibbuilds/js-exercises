// * Numbers

// 1. Generate a number from a range of numbers.

export const generateNumber = (min, max) => {
  if (!(min || max)) return 'Parameter/s missing, numbers needed!';
  if (isNaN(min) || isNaN(max))
    return 'There is an invalid data type, numbers needed!';

  return Math.floor(
    Math.random() * (parseInt(max) - parseInt(min)) + parseInt(min)
  );
};

// 2. Check if a given number is a palindromic number.

export const checkPalindromicNumber = (n) => {
  if (!n) return 'Parameter/s missing, number needed!';
  if (isNaN(n)) return 'There is an invalid data type, number needed!';
  n = n.toString().toLowerCase();
  return n !== n.split('').reverse().join('') ? false : true;
};

// 3. Return factorial of a given number.

export const checkFactorial = (n) => {
  if (!n) return 'Parameter/s missing, number needed!';
  if (isNaN(n)) return 'There is an invalid data type, number needed!';
  let res = 1;
  for (let i = Math.abs(n); i > 1; i--) {
    res *= i;
  }
  return res;
};

// 4. Check if a given number is a valid odd.

export const isOdd = (n) => {
  if (!n) return 'Parameter/s missing, number needed!';
  if (isNaN(n)) return 'There is an invalid data type, number needed!';
  if (Math.sign(n) !== 1) return 'The number must be positive!';
  let divisors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) divisors++;
  }
  return divisors != 2 ? false : true;
};

// 5. Check if a given number is even or odd.

export const evenOrOdd = (n) => {
  if (n === 0) return 'even';
  if (!n) return 'Parameter/s missing, number needed!';
  if (isNaN(n)) return 'There is an invalid data type, number needed!';
  if (Math.sign(n) === -1) return 'The number must be positive!';
  return n % 2 == 0 ? 'even' : 'odd';
};

// 6. Convert degrees from type ('t') to other type.

export const celciusToFahrenheitAndViceVersa = (n, t) => {
  if (!(n || t)) return 'Parameter/s missing, number and string needed!';
  if (isNaN(n) || typeof t != 'string')
    return 'There is an invalid data type, number and string needed!';
  if (t != 'C' && t != 'F') return 'Type of degrees needed (C/F)!';
  return t === 'F'
    ? `${Math.fround((n - 32) * (5 / 9)).toFixed(2)}°C`
    : `${Math.fround(n * (9 / 5) + 32).toFixed(2)}°F`;
};

// 7. Convert number from numeric basis ('b') to other type.

export const binaryToDecimalAndViceVersa = (n, b) => {
  if (!(n || b)) return 'Parameter/s missing, number and string needed!';
  if (isNaN(n) || isNaN(b))
    return 'There is an invalid data type, number and string needed!';
  if (Math.sign(n) !== 1) return 'The number must be positive!';
  if (n === 0 || n === 1) return n;
  n = parseInt(n);
  b = parseInt(b);
  if (b !== 2 && b !== 10) return 'Base must be decimal(10) or binary(2)!';
  let res;
  if (b === 2) {
    n = n.toString().split('').reverse();
    res = 0;
    for (let i = n.length - 1; i >= 0; i--) {
      res += parseInt(n[i]) * Math.pow(2, i);
    }
    return res;
  } else {
    res = '';
    while (n > 0.5) {
      res += (n % 2).toString();
      n = Math.floor(n / 2);
    }
    res = res.split('').reverse().join('');
    return res;
  }
};

// 8. Apply discount to a quantity.

export const quantityAfterDiscount = (q, d) => {
  if (!(q || d)) return 'Parameter/s missing, numbers needed!';
  if (isNaN(q) || isNaN(d))
    return 'There is an invalid data type, numbers needed!';
  if (Math.sign(d) === 0 && Math.sign(d) === 1) return q;
  if (Math.sign(q) !== 1 || Math.sign(d) !== 1)
    return 'The numbers must be positive!';
  return q - q * (0.01 * d);
};
