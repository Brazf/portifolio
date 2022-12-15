export default class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    };

    total() {
        return this.price*this.quantity;
    };

    add(amount) {
        this.quantity += amount;
    }

    remove(amount) {
        if(amount <= this.quantity){
            this.quantity -= amount;
        }
    }

    label() {
        return "Nome do Produto: " + this.name + "Valor do Produto: " + this.price.toFixed(2);
    }
}