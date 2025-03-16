function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function showModal(mensagem) {
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-body");
    modalContent.innerHTML = "<p>" + mensagem + "</p>";
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

var modalConfirm = document.getElementById('confirm-dialog');
var closeConfirm = document.getElementById('closeConfirm');

closeConfirm.addEventListener("click", function () {
    modalConfirm.close();
});
modalConfirm.addEventListener("click", function (event) {

    if (event.target.id == 'confirm-dialog') {
        modalConfirm.close();
    }
});

/*
window.onclick = function (event) {
    
    if (event.target == confirmDialog) {
        alert(event.target);
        confirmDialog.style.display = "none";
    }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modalConfirm.style.display = "none";
        }
}
*/
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

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        // document.getElementById("header").style.fontSize = "30px";
        // document.getElementById("header").style.backgroundColor = "green";
        document.getElementById("img-header").classList.add("sticky");
    } else {
        document.getElementById("header").style.fontSize = "90px";
    }
}