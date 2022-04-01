function Product(name, price, stock) {
    this.name = name;
    this.price = price;

    let privateStock = stock;
    
    Object.defineProperty(this, "stock", {
        enumerable: true,
        configurable: true,

        get: function() {
            return stock;
        },

        set: function(value) {
            if (typeof value !== "number") {
                throw new TypeError("Message");
            } 

            privateStock = value;
        }
    });
}

function createProduct() {
    return {
        get nome() {
            return this.nome;
        },

        set nome(value) {
            nome = value;
        }
    };
}

let p1 = new Product("T-shirt", 20, 3);
console.log(p1);
console.log(p1.stock);
p1.stock = "The value which I want";
console.log(p1.stock);

let p2 = createProduct("Short");
p2.nome = "Something";
console.log(p2.nome);