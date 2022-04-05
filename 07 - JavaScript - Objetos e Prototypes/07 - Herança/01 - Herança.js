// Product -> increase, discount
// Pants = Color, Cup: Material
function Product(nome, price) {
    this.nome = nome;
    this.price = price;
}

Product.prototype.increase = function(amount) {
    this.price += amount;
};

Product.prototype.discount = function(amount) {
    this.price -= amount;
};

// ***

function Pants(nome, price, color) {
    Product.call(this, nome, price);
    this.color = color;
}
Pants.prototype = Object.create(Product.prototype);
Pants.prototype.constructor = Pants;

let p1 = new Pants("Regata", 7.5, "Black");
console.log(p1);
p1.increase(10);
console.log(p1);

// ***

function Cup(nome, price, material) {
    Product.call(this, nome, price);
    this.material = material;
}

Cup.prototype = Object.create(Product.prototype);
Cup.prototype.constructor = Cup;

let c1 = new Cup("Caneca", 10.0, "Vidro");
console.log(c1);
c1.increase(50);
console.log(c1);