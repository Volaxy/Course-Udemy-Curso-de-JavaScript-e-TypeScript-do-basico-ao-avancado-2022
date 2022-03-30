function Person(name, lastName) {
    // Private attributes and methods
    const ID = 12345;
    const internalMethod = function() {

    };

    // Public attributes and methods
    this.name = name;
    this.lastName = lastName;

    this.method = function() {
        console.log(this.name + ": I'm a method");
    }
}

const p1 = new Person("Volax", "Mar");
const p2 = new Person("Hulg", "Kliis");

console.log(p1.name);
console.log(p2.name);