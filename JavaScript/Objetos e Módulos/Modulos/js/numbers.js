function somar (a, b) {
    return a+b;
}

function exp (base, expoente){
    return base ** expoente;
}

function round(value, precision){
    let multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export { somar, exp, round };