class DispositivoEletronico {
    constructor(name) {
        this.name = name;
    }

    turnOn() {
        console.log("Ligou!");
    }
    
    turnOff() {
        console.log("Desligou!");
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(name, cor) {
        super(name);
        this.cor = cor;
    }

    turnOn() {
        console.log("Ligou no Smartphone!");
    }
}

let d1 = new Smartphone("Smartphone");

d1.turnOn();
console.log(d1);