class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentar() {
        this.volume += 2;
    }

    diminuir() {
        this.volume -= 2;
    }

    static trocaPilha() {
        console.log("Trocou pilha");
    }
}

let c1 = new ControleRemoto("LG");
c1.aumentar();
c1.aumentar();
c1.diminuir();

ControleRemoto.trocaPilha();

console.log(c1);