function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Create a new function in the prototype
Person.prototype.imHere = "Hello!";
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

let p1 = new Person("Volax", "O.");
let date = new Date();

console.log(p1);
console.log(date);