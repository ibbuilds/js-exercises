import * as s from './module/string.mjs';
import * as n from './module/number.mjs';
import * as d from './module/date.mjs';
import * as v from './module/validation.mjs';
import * as a from './module/array.mjs';
import * as p from './module/poo.mjs';

// * Strings
console.log(`Exercise 1: ${s.getLength('Hola mundo')}`);
console.log(`Exercise 2: ${s.cutString('Hola mundo', '4')}`);
console.log(`Exercise 3: ${s.separateString('hola que tal', ' ')}`);
console.log(`Exercise 4: ${s.repeatString('Hola Mundo', 3)}`);
console.log(`Exercise 5: ${s.invertString('Hola Mundo')}`);
console.log(
  `Exercise 6: ${s.searchInString('hola mundo adios mundo', 'mundo')}`
);
console.log(`Exercise 7: ${s.isPalindromic('Salas')}`);
console.log(
  `Exercise 8: ${s.removePatternFromString(
    'xyz1, xyz2, xyz3, xyz4 y xyz5',
    'xyz'
  )}`
);
console.log(`Exercise 9: ${s.vowelsAndConsonants('Hola mundo')}`);

// * Numbers
console.log(`Exercise 10: ${n.generateNumber(501, 600)}`);
console.log(`Exercise 11: ${n.checkPalindromicNumber('2002')}`);
console.log(`Exercise 12: ${n.checkFactorial('5')}`);
console.log(`Exercise 13: ${n.isOdd('7')}`);
console.log(`Exercise 14: ${n.evenOrOdd('29')}`);
console.log(`Exercise 15: ${n.celciusToFahrenheitAndViceVersa(0, 'C')}`);
console.log(`Exercise 16: ${n.binaryToDecimalAndViceVersa(4, 10)}`);
console.log(`Exercise 17: ${n.quantityAfterDiscount(1000, 20)}`);

// * Dates
console.log(`Exercise 18: ${d.timeBetweenDates('1984-4-23')}`);

// * Validations
console.log(`Exercise 19: ${v.nameValidation('Jonathan MirCha')}`);
console.log(`Exercise 20: ${v.emailValidation('jonmircha@gmail.com')}`);

// * Arrays
console.log(`Exercise 21: ${a.squaredNumbers([1, 4, 5])}`);
console.log(`Exercise 22: ${a.getArrayLimits([1, 4, 5, 99, -60])}`);
console.log(`Exercise 23: ${a.evensAndOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])}`);
console.log(`Exercise 24: ${a.arrayToAscOrDesc([7, 5, 7, 8, 6])}`);
console.log(
  `Exercise 25: ${a.removeDuplicates(['x', 10, 'x', 2, '10', 10, true, true])}`
);
console.log(`Exercise 26: ${a.getAverage([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])}`);
console.log(`Exercise 27: ${p.dataCall()}`);
