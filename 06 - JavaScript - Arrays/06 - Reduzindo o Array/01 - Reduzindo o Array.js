let n1 = [5, 50, 80, 1, 2, 3, 5, 8, 9, 11, 15, 22, 27];

let sum = n1.reduce(function(acumulator, value) {
    acumulator += value;
    return acumulator;
}, 0);
console.log(sum);

let users = [
    { name: 'Fernando', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduarda', age: 55 },
    { name: 'Letícia', age: 65 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 }
];

let moreLast = users.reduce((acumulator, user) => {
    if (acumulator.age < user.age) return acumulator;
    return user;
}, 0);
console.log(moreLast);