import { evenOrOdd } from './number.mjs';

// * Arrays
// 1. Return array to squared.

export const squaredNumbers = (numbers) => {
  if (!numbers) return 'Parameter/s missing, numeric array needed!';
  if (!Array.isArray(numbers))
    return 'There is an invalid data type, numeric array needed!';
  for (let n in numbers) {
    if (isNaN(numbers[n])) return 'Each element of array must be a number!';
    if (Math.sign(numbers[n]) === -1)
      return 'Each element of array must be a positive number!';
    numbers[n] *= numbers[n];
  }
  return numbers;
};

// 2. Return limits of array.

export const getArrayLimits = (numbers) => {
  if (!numbers) return 'Parameter/s missing, numeric array needed!';
  if (!Array.isArray(numbers))
    return 'There is an invalid data type, numeric array needed!';
  for (let n in numbers) {
    if (isNaN(numbers[n])) return 'Each element of array must be a number!';
  }
  return `Min: ${Math.min(...numbers)}, max: ${Math.max(...numbers)}`;
};

// 3. From a given array, return an objects with two arrays inside of it, an array of even numbers and another array of odd numbers.

export const evensAndOdds = (numbers) => {
  if (!numbers) return 'Parameter/s missing, numeric array needed!';
  if (!Array.isArray(numbers))
    return 'There is an invalid data type, numeric array needed!';
  const EVENS = [];
  const ODDS = [];
  for (let n in numbers) {
    if (isNaN(numbers[n])) return 'Each element of array must be a number!';
    if (Math.sign(numbers[n]) === -1)
      return 'Each element of array must be a positive number!';

    evenOrOdd(numbers[n]) === 'even'
      ? EVENS.push(numbers[n])
      : ODDS.push(numbers[n]);
  }
  const res = { evens: EVENS, odds: ODDS };
  return JSON.stringify(res);
};

// 4. From a given array, return an  object with two arrays inside of it, an array of ordered numbers of ascendent way and another ordered of descendent way.

export const arrayToAscOrDesc = (numbers) => {
  if (!numbers) return 'Parameter/s missing, numeric array needed!';
  if (!Array.isArray(numbers))
    return 'There is an invalid data type, numeric array needed!';
  for (let n in numbers) {
    if (isNaN(numbers[n])) return 'Each element of array must be a number!';
    if (Math.sign(numbers[n]) === -1)
      return 'Each element of array must be a positive number!';
  }
  const ASC = Array.from(numbers.sort((a, b) => a - b));
  const DESC = Array.from(numbers.sort((a, b) => b - a));
  const RES = { asc: ASC, desc: DESC };
  return JSON.stringify(RES);
};

// 5. Return a given array without duplicates.

export const removeDuplicates = (arr) => {
  if (!arr) return 'Parameter/s missing, numeric array needed!';
  if (!Array.isArray(arr))
    return 'There is an invalid data type, numeric array needed!';
  for (let el in arr) {
    for (let i in arr) {
      if (arr[el] === arr[i] && el !== i) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

// 6. Return average from a given numeric array.

export const getAverage = (numbers) => {
  if (!numbers) return 'Parameter/s missing, numeric array needed!';
  if (!Array.isArray(numbers))
    return 'There is an invalid data type, numeric array needed!';
  let t = 0;
  for (let n in numbers) {
    if (isNaN(numbers[n])) return 'Each element of array must be a number!';
    if (Math.sign(numbers[n]) === -1)
      return 'Each element of array must be a positive number!';
    t += numbers[n];
  }
  return t / numbers.length;
};
