let num1 = 9.53453;
let aux;

aux = Math.floor(num1);
console.log(aux); // The "floor()" round a number down to an integer

aux = Math.ceil(num1);
console.log(aux); // The "floor()" round a number up to an integer

aux = Math.round(num1);
console.log(aux); // The "round()" round a number to an integer, de .49 pra baixo ele arredonda para baixo, e acima de .49 ele arredonda para cima

console.log(Math.max(1, 2, 3, 6, 34.65, 3534, 3)); // The max() returns the highest number in the list
console.log(Math.min(1, 2, 3, 6, 34.65, 3534, 3)); // The min() returns the lowest number in the list

console.log(Math.random()); // The "random()" returns a number between 0 and 1
console.log(Math.random() * (10 - 5) + 5); // The "random()" returns a number between 5 and 10

console.log(Math.pow(2, 10)); // The "pow()" exponentiates some number

console.log(9 ** (1/2)); // Calculation to check the square root of a number

console.log(100 / 0); // Other data type is the "Infinity", when the number can't have more decimal places to show

console.log(!!(100 / 0));