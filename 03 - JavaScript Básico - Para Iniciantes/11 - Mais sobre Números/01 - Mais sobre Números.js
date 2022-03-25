let num1 = 1;
let num2 = 2.5;
console.log(num1 + num2);

num2 = 10.23534785463543;
console.log(num2.toFixed(2)); // To fix the number of decimal places, we use the function "toFixed()"

console.log(Number.isInteger(num1));
num1 = 1.5;
console.log(Number.isInteger(num1));
console.log(Number.isInteger(1.00)); // If the decimal places are full 0, the function returns true

console.log(Number.isNaN(num1));