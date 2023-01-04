
const cep = '01001000';

const end = `https://viacep.com.br/ws/${cep}/json/`;

// FUNÇÃO QUE RECEBE UMA URL JÁ COM O CEP E QUE RETURN O JSON, MAS SEM EXIBI-LO!
async function getJsonResponse(url){
    const response = await fetch(url);
    const json = await response.json();
    return(json);
}

console.log("A");
console.log("B");

// EXIBINDO O RESULTADO DA FUNÇÃO GETJSONREPONSE, ELA NÃO TEM UM CONSOLE.LOG ENTÃO AQUI É UTILIZADO O MESMO!
console.log("EXIBIÇÃO 1");
getJsonResponse(end).then( result => {
        console.log(result);
    }
);


// FUNÇÃO RESUMIDA QUE FAZ TODO O TRABALHO, NECESSITANDO APENAS DIGITAR O CEP;
async function showCepData (cep) {
    const end = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(end);
    const json = await response.json();
    console.log(json);
};

console.log("EXIBIÇÃO 2");
ShowCepData2('63240000');


// FUNÇÃO 2.0 DA SHOWCEPDATA, NESSA É USADA OUTRA FUNÇÃO (GETJSONRESPONDE) COMO AUXILIADORA PARA RECEBER E TRATAR APENAS A ULR QUE RETORNA OS DADOS.
async function ShowCepData2 (cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
};

console.log("EXIBIÇÃO 3");
ShowCepData2('01153000');