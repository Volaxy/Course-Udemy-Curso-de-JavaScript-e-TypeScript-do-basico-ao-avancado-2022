const nome = "Volax Kleber";

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log("*************");

for(let i in nome) {
    console.log(nome[i]);
}

console.log("*************");

for(let value of nome) {
    console.log(value);
}

console.log("*************");

let nomes = ["Joana", "Gabriel", "Marcelo", "Rafael"];
nomes.forEach(function(value, index, array) {
    console.log(value, index, array);
});