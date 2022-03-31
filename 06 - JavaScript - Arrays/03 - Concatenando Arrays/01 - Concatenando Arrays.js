let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
// let a3 = a1.concat(a2);
// let a3 = a1.concat(a2, [7, 8, 9], "Fulano");
let a3 = [...a1, "Fulano", ...a2, ...[7, 8, 9]];

console.log(a3);
