function isLetter(letra) {
    return /^[A-Za-zÀ-ú\s]+$/.test(letra);
}

//funçao capitalizar texto 
function capitalize(texto) {
    texto = texto.toLowerCase();
    let arrayTexto = texto.split(/\s+/);
    let capitalized;
    let strTratada = [];
    arrayTexto.forEach(str => {
        const regex = /\bd(a|e|i|o|u)[s]?$/i;
        if (!regex.test(str)) {
            capitalized = str.charAt(0).toUpperCase() + str.slice(1);
            strTratada.push(capitalized);
        } else {
            capitalized = str.toLowerCase();
            strTratada.push(capitalized);
        }
    });
    return strTratada.join(" ");
}
