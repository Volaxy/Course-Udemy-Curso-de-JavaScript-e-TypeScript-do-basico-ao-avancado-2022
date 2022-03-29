// "let" is block scope { ... block }
// "var" only have function scope

let nome = "Luiz"; // Creating
var nome2 = "Luiz"; // re-declaring

if (true) {
    let nome = "Otávio"; // Creating
    var nome2 = "Reginaldo"; // re-declaring
    console.log(nome, nome2);

    if (true) {
        let nome = "Other thing"; // Creating
        var nome2 = "Sarnento"; // re-declaring
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);

// ***

console.log(variable);

var variable = "Test";