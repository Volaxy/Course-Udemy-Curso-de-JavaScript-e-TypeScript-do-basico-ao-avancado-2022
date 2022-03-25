// To create a variable in JS, we use the words "let" or "var".
// var variable = "Gustavo"; // The "var" is older.
let nome = "Gustavo"; // The most used is the "let".
let notinstantiated; // This variable is not instantiated, the JS includes a values in the variable which that is not declared, informing that the variable does not contain any value.

console.log("Hello", nome);
console.log("Value of an uninstantiated variable:", notinstantiated);

// If the code contains any error, the code after the error does not excecuting
// let nome;
console.log("Error");

// We not declarate a variable with the reserved words of the JS
// let if;

// ***THE VARIABLES MUST HAVE SIGNIFICANT NAMES***
let n = "João"; // ❌

let clientName = "João" // ✔️

// Do not start the variable name with a number
// let 1nome;

// Do not contains spaces " " or "-"
// let vari able

// The convention is to use camelCase
let fullName;

// The JS is Case-sensitive
let userName = "Luiz";
let username = "Geraldo";

console.log(userName, username);

// We cannot redeclaring variable with "let"
// let username;

// NOT USE VAR, USE LET