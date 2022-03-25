let name1 = "Fulano";
const lastName1 = "Kuilo";
const age1 = 19;

let name2 = "Beltrano";
const lastName2 = "Jilkk";
const age2 = 58;

const person1 = {
    name: "Fulano",
    lastName: "Kuilo",
    age: 19
};

const person2 = {
    name: "Beltrano",
    lastName: "Jill",
    age: 45
};

function createPerson(name, lastName, age) {
    return {
        name, // If the parameters are the same as the class attributes, it is not necessary to put "name:name"
        lastName,
        age
    }
};

console.log(person1.name);
console.log(person1.lastName);
console.log(person1.age);

const person = {
    name: "Beltrano",
    lastName: "Jill",
    age: 45,

    talk() {
        console.log(`Hello, ${this.name}, you age is ${this.age}!`); // The "this" represents an object in which it is used
    },

    increaseAge() {
        this.age++;
    }
};

person.talk();
person.increaseAge();
person.talk();
person.increaseAge();
person.talk();