let users = [
    {id: 3, nome: "Fask"},
    {id: 2, nome: "Jokke"},
    {id: 1, nome: "Laine"}
];

let newUsers = new Map();
for(let user of users) {
    let {id} = user;
    newUsers.set(id, {...user});
}

for(let [identifier, {id, nome}] of newUsers) {
    console.log(identifier, id, nome);
}

for(let user of newUsers.keys()) {
    console.log(user);
}

for(let user of newUsers.values()) {
    console.log(user);
}

newUsers.delete(2);

console.log(newUsers);