const a = 70;
const b = 150;

console.log(a+b);

// função JS (COM RETORNO = FUNCTION + RETURN ou VARIÁVEL - RETURN) , (SEM RETORNO = FUNCTION SEM RETURN ou VARIÁVEL + FUNCTION - RETURN)

function soma1 (num1, num2){
    return num1+num2;
}

let somar2 = (x,y) => {return x+y};

let somar3 = (x,y) => x+y;

const soma4 = function(x, y) {return x +y};


function printar1 (nome){
    console.log(`Hello, ${nome}`);
}

function printar2 (nome){
    return console.log(`Hello, ${nome}`);
}

const printar3 = function (nome) {
    return `Hello ${nome}`;
}

const printar4 = nome => `Hello, ${nome}`;

const printar5 = function (nome) {`Hello, ${nome}`};


// VARIÁVEIS DENTRO DE FUNCTION NÃO VAZAM ESCOPO
// VAR SÓ VAZA ESCOPO EM ESTRUTURA DE CONTROLE EX:(IF, WHILE)

function areaCirculo (raio) {
    var pi = 3.14;
    return pi* (raio**2);
}

// OBS GERAL : A FUNÇÃO MESMO ESCRITA NO FIM DO CÓDIGO PODE SER USADA NO COMEÇO, PORQUE O JAVASCRIPT MOVE TODAS FUNÇÕES PARA O ÍNICIO DO CÓDIGO "EU ACHO QUE ISSO NÃO É INTERESSANTE POR CAUSA DA ORGANIZAÇÃO OUTRAS LINGUAGENS NÃO ACEITAM ISSO"


// PASSANDO FUNÇÃO COMO PARÂMENTRO

function multiplicarPor3 (numero) {
    return numero * 3;
}

function multiplicador (funcao, numero) {
    const result = funcao(numero); 
    return result;
}