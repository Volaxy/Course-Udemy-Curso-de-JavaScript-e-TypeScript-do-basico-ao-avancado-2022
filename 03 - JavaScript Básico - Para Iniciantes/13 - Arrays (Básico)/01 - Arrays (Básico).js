const students = ["Gustavo", "João", "Maria"]; // The JS allows any types of variables inside the list, but it's a bad practical

console.log(students);

console.log(typeof students);
console.log(students instanceof Array); // The "instanceof" return if type of the variable is an instance of a type

console.log(students[1]);

console.log(students.slice(0, 2)); // The "slice()" split the list into another list
console.log(students.slice(0, -1)); // The "slice()" split the list into another list, if the 2nd number is negative the array ends in the at the end of the list -n

delete students[1]; // The "delete" remove an element

students.push("Fabiano"); // The push add some data in the array
students.unshift("Luiz"); // The push add some data in the start of the array

let removed = students.pop(); // The "pop()" exclude the last element of the list
let removedFirst = students.shift(); // The "shift()" exclude the first element of the list
console.log(students);
console.log(removed);
console.log(removedFirst);