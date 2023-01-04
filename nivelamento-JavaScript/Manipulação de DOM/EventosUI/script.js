// RESGATANDO O NOME PASSADO NO CAMPO NAME NO HTML

const inputName = document.forms.cadastro.name;

// EXISTE A BOA PRÁTICA DE QUANDO SE LIDAR COM RESGASTE DE INFORMAÇÃOES OU TRATAMENTO DE ALGO QUE ESTEJA NO DOM USAR-SE O NOME "HANDLE" QUE A SUA TRADUÇÃO É LIDAR/TRATAR ALGO, DAÍ EM DIANTE É COLOCADO O NOME DA VARIÁVEL QUE ARMAZENA O DADO E TAMBÉM O NOME DO EVENTO.

// TODA VEZ QUE LEVANTO O DEDO DA TECLA O LOG RETORNA O VALOR DA TECLA
inputName.addEventListener('keyup', handleInputNameKeyUp);

function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

// EVENTO CHANGE ( MUDANÇA/TROCA ) 

const inputEmail = document.forms.cadastro.email;

// TODA VEZ QUE EU DIGITAR NO CAMPO E NÃO FIZER NADA, NADA APARECER COMO RESPOSTA, MAS SE EU CLICAR EM QUALQUER COISAR OU SAIR DAQUELE CAMPO, É RETORNADO ALGUMA COISA EM TELA OU NO BACKEND
inputEmail.addEventListener('change', handleInputEmailChange);

function handleInputEmailChange(event) {
    if (validateEmail(event.target.value)) {
        console.log("DEU CERTO!");
        event.target.classList.remove("input-error");
        event.target.classList.add("input-correct");
    }else{
        console.log("DEU ERRADO");
        event.target.classList.remove("input-correct");
        event.target.classList.add("input-error");
    }
}

/* ABAIXO É UMA FUNÇÃO PARA VALIDAÇÃO DE EMAIL */
// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

// EVENTO PARA CONTROLAR O QUE ACONTECE QUANDO SE CLICAR NO BOTÃO

// PRIMEIRA FORMA DE RESGATAR OS DADOS const inputButton = document.forms.cadastro.button;
// SEGUNDA FORMA DE RESGATAR OS DADOS  const inputButton = document.querySelector('[type="submit"]'); obs: po querySelector sempre pega o primeiro do adjetivo passado como parâmetro.

const inputButton = document.querySelector('[type="submit"]');

inputButton.addEventListener('click', handleinputButtonClick);

function handleinputButtonClick(event) {
    // PREVENT = PREVINIR/EVITAR. NESTE CASO É EVITAR A ROTINA COMUM QUE SERIA AO CLICAR NO SUBMIT, TUDO SUMIR E NÃO MOSTRAR NADA!
    event.preventDefault();
    console.log(`Dados: ${inputName.value}, ${inputEmail.value}`);
}

/* 
    EVENTOS EM FUNÇÃO LAMBDA!

    inputName.addEventListener('keyup', (event) => {console.log(event.target.value);});
    inputEmail.addEventListener('change', (event) => {console.log(event.target.value);});

    */