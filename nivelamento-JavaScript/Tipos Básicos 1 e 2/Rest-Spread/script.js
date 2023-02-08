// REST: valores passados com virgula => array

function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

let array1 = sum(1,2,3,4,5);
console.log(`Resultado da soma usand o Rest(...): ${array1}`);

const result1 = Math.max(2, 3, 10, 5);

console.log(`Resultado do Math.max que exibe o maior número de um array ou coleção de números: ${result1}`);

// SPREAD: array => valores separados por virgula

let array2 = [1, 2, 3, 4, 5];

/*
O REST E SPREAD SÃO PARECIDOS, A DIFERENÇA É QUE O REST TU USA NA FUNÇÃO COMO PARÂMETRO QUE VAI RECEBE UMA COLEÇÃO DE NÚMEROS,]
JÁ O SPREAD TU VAI ADICIONAR OS 3 PONTOS (...) PARA PODE USAR UM ARRAY SEM QUE HAJA PROBLEMAS. 
let calc = sum(...array2);
console.log(calc);
*/

function sum2(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}


const result2 = Math.max(...array2);

console.log(`Resultado do Spread usando o Rest(...) para poder calcular no Max que só aceita Rest: ${result2}`);

// SPREAD: objeto => membros separados por virgula

const item = {
    description: "Celular",
    price: 1499.99,
    quantity: 1
};

const cloneItem = { ...item };

console.log("Clone do Objeto");
console.log(cloneItem);
console.log("Original");
console.log(item);

const cloneItemPlus = { ...item, weigth: 10 };

console.log("Adição ao Objeto");
console.log(cloneItemPlus);

// TESTE PÓS APRENDIZADO

function arraySoma (...numeros) {
    var estic = [];
    for(i = 0; i < numeros.length; i++){
        estic[i] = numeros[i]; 
    }
    return estic;
};




