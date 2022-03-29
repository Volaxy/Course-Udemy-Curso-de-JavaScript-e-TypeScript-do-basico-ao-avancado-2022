// Ex.: 1
let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

// This is the destructuring
[a, b, c] = [1, 2, 3]

console.log(a, b, c);

// Ex.: 2
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...rest] = numbers;

console.log(first, second);
console.log(rest);



const [one, , two, , three] = numbers;
console.log(one, two, three);



const numbers3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const [,[,,six]] = numbers3;
console.log(six);