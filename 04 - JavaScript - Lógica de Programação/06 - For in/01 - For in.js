const fruits = ["Pera", "Maçã", "Uva"];

for (const i in fruits) {
    console.log(fruits[i]);
}



let user = {
    nome: "Volax",
    age: 21
};

for (let key in user) {
    console.log(key, user[key]);
}

console.log(user["nome"]);