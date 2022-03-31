let n1 = [5, 50, 80, 1, 2, 3, 5, 8, 9, 11, 15, 22, 27];

let filteredNumbers = n1.filter(value => value > 10);
console.log(filteredNumbers);



let users = [
    { name: 'Fernando', age: 62 },
    { name: 'Maria', age: 23 },
    { name: 'Eduarda', age: 55 },
    { name: 'Letícia', age: 60 },
    { name: 'Rosana', age: 32 },
    { name: 'Wallace', age: 47 }
];

let filteredUsersWithGreaterName = users.filter(user => user.name.length > 6);
let filteredUsersWithAgeGreaterThan50 = users.filter(user => user.age > 50);
let filteredUsersWithNameEndsWithA = users.filter(user => user.name.endsWith("a"));
console.log(filteredUsersWithGreaterName);
console.log(filteredUsersWithAgeGreaterThan50);
console.log(filteredUsersWithNameEndsWithA);