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

window.onclick = function (event) {
    if (event.target == modalConfirm) {
        modalConfirm.style.display = "none";
    }
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function () {
            modalConfirm.style.display = "none";
        }
}

function isLetter(letra) {
    return /^[A-Za-zÀ-ú\s]+$/.test(letra);
}

//funçao capitalizar texto 
function capitalize(texto) {
    texto=texto.toLowerCase();
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
