const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

const { id, client } = obj;

console.log(id);
console.log(client);

function subTotal ( {price, quantity} ){
    return price * quantity;
}

console.log("Desestrução do Item[1]: ");
console.log(subTotal(obj.items[1]));

function total ( {items} ){
    let soma = 0;
    for (let index = 0; index < items.length; index++) {
        soma += subTotal(items[index]);
    }
    return soma;
}

console.log(total(obj));


const [items1, items2] = obj.items;

console.log(items1);
console.log(items2);
