/**
 * Print:
 * Gustavo Martins Pereira is 21 years old, weighs 80 Kg, is 1.75 tall and your IMC is from 20.34324342342
 * Gustavo Martins Pereira was born in 2000
 */

const firstName = "Gustavo";
const lastName = "Martins Pereira";
const age = 21;
const weight = 80;
const height = 1.75;

let imc; // weight / (height * height)
let yearOfBirth;

console.log(firstName, lastName, "is", age, "years old, weighs", weight, "Kg, is", height, "tall and your IMC is from", weight / (height * height));
console.log(firstName, lastName, "was born in 2000");

// To union the values, put a "+" between them
console.log("Hi, my name is " + firstName + " " + lastName);

// This declaration is a Template String
// String must be inside ``
// The variable inside the "${}" is replace with the value of her
console.log(`Hi, my name is ${firstName} ${lastName}`);