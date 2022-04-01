function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    Object.defineProperty(this, stock, {
        enumerable: true, // Show the key
        value: stock, // Value
        writable: false, // Can alter
        configurable: true // Is Configurable
    });

    Object.defineProperties(this, {
        name: {
            enumerable: true, // Show the key
            value: name, // Value
            writable: false, // Can alter
            configurable: true // Is Configurable
        },

        price: {enumerable: true, // Show the key
            value: price, // Value
            writable: true, // Can alter
            configurable: false // Is Configurable}
        }
    });
}

let p1 = new Product("T-shirt", 20, 3);
console.log(p1);