/** Primitive values are imutables Ex.:
 * string, number, boolean, undefined, null - Value
 * 
 * Reference (mutables) - array, object, function
 */ 
// Primitive
let nome = "Luiz";
nome[0] = "R";
console.log(nome[0]);

let a = "A";
let b = a; // Copy of the value
console.log(a, b);

// Reference
let x = [1, 2, 3];
let y = x; // Both the "x" or "y" point to the same place in the memory
console.log(x, y);

x.push(4);
console.log(x, y);

y = [...x]; // In this case, the values of "x" were copied to "y"
x.pop();
x.pop();
console.log(x, y);