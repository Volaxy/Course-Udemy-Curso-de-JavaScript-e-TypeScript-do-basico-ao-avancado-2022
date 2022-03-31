let n1 = [5, 50, 80, 1, 2, 3, 5, 8, 9, 11, 15, 22, 27];
let doubleNumbers = n1.map(value => `Volax -> ${value}`);
console.log(doubleNumbers);



let users = [
    { name: 'Fernando', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduarda', age: 55 },
    { name: 'Letícia', age: 60 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 }
];

let onlyNames = users.map(user => user.name);
console.log(onlyNames);

let newUsers = users.map(user => ({age: user.age}));
console.log(newUsers);

let usersId = users.map(function(user, index) {
    let newUser = { ...user };
    newUser.id = index + 1;
    return newUser;
});
console.log(usersId);