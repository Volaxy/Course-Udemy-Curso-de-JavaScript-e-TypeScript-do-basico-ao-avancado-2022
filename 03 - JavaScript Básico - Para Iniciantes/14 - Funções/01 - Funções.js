function greeting(nome) {
    return `Good Morning ${nome}!`;
}

result = greeting("Volax");
console.log(result); // By default, the result of any function created in JS by default returns "undefined", if no return type is specified

function sum(x = 1, y = 1) {
    return x + y;
}

result = sum(); // If none value is informed, the default values be are the values after the "=" in the method
console.log(result);

result = sum(4);
console.log(result);

result = sum(5, 3);
console.log(result);


// It creates a function in the variable
const root = function (n) {
    return n ** 0.5;
}; // If the expression contains "=", is nedeed the ";" in the final of the function

console.log(root(3));

const source = n => n ** 0.5; // If the function contains only 1 argument, the "()" is not necessary, if the function contains only one line, the "{}" is also not necessary
console.log(source(9));