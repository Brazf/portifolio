function dizerOla () {
    console.log("Olá!");
}

//setTimeout(dizerOla, 2000);


function tudoBem (nome) {
    console.log("Tudo bem, " + nome + "?");
}

setTimeout(() => {
   tudoBem("Fábio");
   setTimeout(() => {
    tudoBem("João");
    setTimeout(() => {
        tudoBem("Maria");
    }, 2000);
   }, 2000);
}, 2000);


