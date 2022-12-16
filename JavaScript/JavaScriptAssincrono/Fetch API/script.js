
const cep = '56520000';

const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

fetchResult
    .then(response => {
        console.log("SUCESSO NO FETCH", response);
        const json = response.json();
        json
            .then( result => {
                console.log("SUCESSO JSON", result);
            })
            .catch( error => {
                console.log("ERRO JSON", error);
            });
    })
    .catch(error => {
        console.log("ERRO NO FETCH", error);
    }
);