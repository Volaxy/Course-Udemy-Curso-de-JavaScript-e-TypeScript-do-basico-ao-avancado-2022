function func() {
    console.log(arguments);
}
func("value", 1, 2, 3, 4, 5, 6, 7, 8, 9);



// Undefined arguments
function nullArguments(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
nullArguments(1, 2, 3);



// Default arguments
function defaultArguments(a, b, c = 6) {
    b = b || 4;
    console.log(a + b + c);
}
defaultArguments(1, undefined);



// Destructuring
function destructuringObj({ nome, lastName, age }) {
    console.log(nome, lastName, age);
}
destructuringObj({ nome: "Luiz", lastName: "Walle", age: 21 });

function destructuringArray([ nome, lastName, age ]) {
    console.log(nome, lastName, age);
}
destructuringArray(["Luiz", "Walle", 21]);



function operator(operator, accumulator, ...numbers) {
    console.log(operator, accumulator, numbers);
    for(let number of numbers) {
        accumulator += number;
    }

    console.log(accumulator);
}
operator("+", 0, 20, 30, 40);