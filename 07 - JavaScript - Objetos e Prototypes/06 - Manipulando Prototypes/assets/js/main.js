// new Object -> Object.prototype
let objA = {
    keyA: "A"
    // __proto__: Object.prototype
};

let objB = {
    keyB: "B"
    // __proto__: objA
};

// Set the "prototype" of the object B based on the 2nd argument
Object.setPrototypeOf(objB, objA);
console.log(objB.keyA);

let objC = Object.create(Object.prototype);
console.log(objC);