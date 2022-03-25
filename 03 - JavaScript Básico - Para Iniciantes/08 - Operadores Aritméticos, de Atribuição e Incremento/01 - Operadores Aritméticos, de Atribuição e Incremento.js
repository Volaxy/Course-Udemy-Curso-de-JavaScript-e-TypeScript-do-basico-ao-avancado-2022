const num1 = "1";
const num2 = 10;
console.log(num1 + num2); // The "+" between the "String" and "Number" is the union of both (without sum)

const x = 1;
const y = 10;
console.log(x + y); // The "+" between the "Number" and "Number" is the sum of both

console.log(3 ** 2); // The "**" is the exponentiation

let a = 10;
let b = "Gustavo";
console.log(a * b); // The "NaN" means is not a number

a = 10;
b = "5";
console.log(a * b); // When the contains only numbers, the JS fix the problem transforms the "string" to "number"

// To transform a string to number, we have three ways:
// 1º
let number = parseInt("5");
console.log(number);

// 2º
number = parseFloat("10.5");
console.log(number);

// 3º
number = Number("10");
console.log(number);