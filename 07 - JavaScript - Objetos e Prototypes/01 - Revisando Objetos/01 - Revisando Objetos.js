// Literal
let user = {
    nome: "Luiz",
    lastName: "Geraldo"
};
console.log(user.nome);
console.log(user.lastName);

console.log(user["nome"]);
console.log(user["lastName"]);

let user2 = new Object();
user2.nome = "André";
user2.lastName = "Scrob";

user2.say = function() {
    console.log("Hi!");
};

console.log(user2);

delete user2.nome;
console.log(user2);

user2.say();

for(let key in user2) {
    console.log(key);
}



// Factory Function
function createPerson(name, lastName) {
    return {
        name,
        lastName,

        get fullName() {
            return `${this.name} ${this.lastName}`;
        }
    }
}

let p1 = createPerson("Volax", "Kouler");
console.log(p1.fullName);



// Constructor function
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName
}

let ps1 = new Person("Luiz", "Marco");
let ps2 = new Person("Juan", "Angel");
console.log(ps1);
console.log(ps2);

let ps3 = new Person("Naian", "Julio");
Object.freeze(ps3);
ps3.lastName = "Hudy";
console.log(ps3);