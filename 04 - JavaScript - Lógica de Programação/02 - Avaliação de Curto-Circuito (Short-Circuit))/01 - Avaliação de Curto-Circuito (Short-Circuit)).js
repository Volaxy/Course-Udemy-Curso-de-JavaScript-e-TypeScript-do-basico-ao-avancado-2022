/**
 * && -> All expression must be true to return true
 * || -> Need only 1 true to return true
 * 
 * FALSY VALUES:
 * - false;
 * - 0;
 * - '', "", ``;
 * - null, undefined;
 * - NaN;
 * 
 * Any value other than this will be true
 */

// When JavaScript evaluates an expression, and finds a value that evaluates to false, it returns the value
console.log("Gustavo" && 0 && "Martins");
console.log("Gustavo" && true && "Martins");
console.log("Gustavo" && true && NaN);

console.log("Luiz" && "Maria");
console.log("Luiz" && "" && "Maria");


function sayHi() {
    return "Hi!";
}

let willRun = "hello";

console.log(willRun && sayHi());


console.log(0 || false || null || "Gustavo" || true);

const userColor = null;
const defaultColor = userColor || "Black";

console.log(defaultColor);