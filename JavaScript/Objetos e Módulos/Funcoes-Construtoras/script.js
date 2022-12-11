 const p1 = {
    name: "Computador",
    price: 3000.00,
    quantity: 2
 };

 const Product = function(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
};

 Product.prototype.total = function() {
    return this.price * this.quantity;
 };

 Product.prototype.add = function(quant) {
    this.quantity += quant;
 };

 Product.prototype.remove = function(quanti) {
    if(this.quantity >= quanti){
        this.quantity -= quanti;
    };
 };

    Product.prototype.label = function() {
        return console.log(`Nome do produto: ${this.name}, Preço: ${this.price.toFixed(2)}, Quantidade: ${this.quantity}`);
    };

 const p2 = new Product("Celular", 2000.00, 3);
 const p3 = new Product("Câmera", 4500.00, 1);

 console.log(p2);

