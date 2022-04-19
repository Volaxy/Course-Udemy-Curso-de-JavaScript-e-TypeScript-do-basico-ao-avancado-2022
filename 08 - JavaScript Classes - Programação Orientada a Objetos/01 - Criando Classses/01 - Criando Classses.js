class Person {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }

    comer() {
        console.log(`${this.nome} está comendo.`);
    }

    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

let p1 = new Person("Fabio", "Junior");
console.log(p1);