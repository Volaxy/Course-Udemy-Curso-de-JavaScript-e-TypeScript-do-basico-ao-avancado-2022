class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    get fullName() {
        return this.name + " " + this.lastName;
    }

    set fullName(value) {
        value = value.split(" ");
        this.name = value.shift();
    }
}

let p1 = new Person("Luiz", "Miranda");
console.log(p1.fullName);