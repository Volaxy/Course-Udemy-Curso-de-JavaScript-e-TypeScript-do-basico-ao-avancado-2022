const person = {
    //name: "Fulano",
    lastName: "Miller",
    age: 20,
    address: {
        number: 210,
        street: "Monny Doon"
    }
};

// When the variable name is the same of the object attribute, just put the variable name in the "{}"
//const { name, lastName } = person;

// The "=" is the default value
const { name = "Not exist", lastName } = person;

// This specified the attribute name
const { lastName: test = "Not exist", age } = person;

console.log(person);

console.log(test, lastName);