let amigos = []; //array que armazenará os nomes dos amigos inseridos.
var amigo;
const amigoInput = document.getElementById("amigo");
const campoErro = document.getElementById("validacao");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoLista = document.getElementById("resultado");
const mensagemListaVazia = "Lista minima <br> Insira no minimo dois amigos";
const mensagemInputVazio = "Preencha o campo nome";
const mensagemNomeExiste = ` existe na lista. Altere o nome.`;

amigoInput.setCustomValidity('Preencha este campo corretamente');

function validaInput(inputValue) {
    return !inputValue;
}

amigoInput.addEventListener("focusout", (e) => {
    amigoInput.value = capitalize(amigoInput.value);
    amigo = amigoInput.value;
});

amigoInput.addEventListener("keydown", (event) => {
    var regex = /^[A-Za-zÀ-ú\s]+$/; //([\s]{1}[A-Za-z]{2,})*$/g;
    var str = amigoInput.value;
    if (event.code == "Space" && str.charCodeAt(amigoInput.value.length - 1) == 32) {
        event.preventDefault();
    }
    if (!regex.test(event.key)) {
        // event.preventDefault() = event.key.toUpperCase();// =  String.fromCharCode(event.key).toLowerCase();
        //alert(event.key);
        // event.value = event.key.toUpperCase();
        // } else {
        event.preventDefault();
    }
});

amigoInput.addEventListener("keyup", ({ key }) => {
    campoErro.innerHTML = "";
    amigoInput.classList.toggle("invalidy");
    if (key === "Enter") {
        amigoInput.value = capitalize(amigoInput.value);
        amigo = amigoInput.value;
        adicionarAmigo();
    }
});

function adicionarAmigo() {
    amigo = amigoInput.value;
    if (validaInput(amigo)) {
        mostraErro(mensagemInputVazio);
        amigoInput.focus();
        return;
    } else if (existeAmigo(amigo)) {
        mostraErro(amigo + mensagemNomeExiste);
        amigoInput.select();
    }
    else {
        amigos.push(amigo);
        addAmigoListaHtml();
        amigoInput.value = "";

    }
}

//ETAPA SORTEIO DO NOME

function validaListaAmigos() {
    return amigos.length >= 2;
}
//Gerar um índice aleatório 
function getRandomInt(numeroLimite) {
    return parseInt(Math.random() * numeroLimite + 1);
}

function fogos(div) {
    const divFire = document.createElement("div");
    divFire.innerHTML = "<div class='parent' id='fogos'>"
        + "<div class='pyro'>"
        + " <div class='before'></div>"
        + " <div class='after'></div>"
        + "</div></div>";
    let theFirstChild = div.firstChild;
    div.insertBefore(divFire, theFirstChild);
}

function sortearAmigo() {
    if (validaListaAmigos()) {
        let indiceSorteado = getRandomInt(amigos.length);
        let amigoSorteado = amigos[indiceSorteado];
        document.getElementById(amigoSorteado).classList.add("sorteado");
        exibeSorteado(amigoSorteado);
    } else {
        showModal(mensagemListaVazia);
    }
}

function exibeSorteado(amigoSorteado) {
    var sort = document.getElementById(amigoSorteado);
    removeClose();
    sort.classList.add("blink");
    var span = document.createElement("span");
    span.innerHTML = "<i class='em em-tada' id='spanSorteado' aria-role='presentation' aria-label='PARTY POPPER'></i>";
    fogos(span);
    let theFirstChild = sort.firstChild;
    sort.insertBefore(span, theFirstChild);
    document.getElementById("resultado").innerHTML = "";
    var li = document.createElement("li");
    li.innerHTML = "O amigo sorteado foi : " + capitalize(amigoSorteado);
    li.setAttribute("id", amigos);
    alterButton("reset");
}

let mouseover_function = (event) => {
    event.target.style.background = '#000080';
};

let mouseleave_function = (event) => {
    event.target.style.background = '#4169e1';
};

function removeClose() {
    const iconesClose = document.getElementsByClassName('closeIcon');
    amigos.forEach(element => {
        const item = document.getElementById(element);
        item.removeEventListener('mouseover', mouseover_function, false);
        item.removeEventListener('mouseleave', mouseleave_function, false);
        const child = item.lastChild;
        if (item.hasChildNodes()) {
            item.removeChild(item.children[0]);
        }
    });
}

function alterButton(acao) {
    var element = document.getElementById("button-draw");
    var img = document.getElementById("imgButton");
    var txtButton = document.getElementById("txtButton");
    var btAdd = document.getElementById("button-add");
    if (acao == "reset") {
        element.classList.replace("sorteio", "reset");
        element.setAttribute("onClick", "restart()");
        element.setAttribute("aria-label", "Sortear amigo secreto");
        img.setAttribute("src", "assets/refresh20.png")
        btAdd.disabled = true;
        amigoInput.disabled = true;
        txtButton.innerHTML = "Reiniciar";
    } else {
        element.classList.replace("reset", "sorteio")
        element.setAttribute("onClick", "sortearAmigo()");
        element.setAttribute("aria-label", "Reiniciar sorteio");
        img.setAttribute("src", "assets/play_circle_outline.png")
        btAdd.disabled = false;
        amigoInput.disabled = false;
        txtButton.innerHTML = "Sortear Amigo";
    }
}

function existeAmigo(amigo) {
    return amigos.includes(amigo);
}

function restart() {
    alterButton("sorteio");
    listaAmigos.innerHTML = "";
    resultadoLista.innerHTML = "";
    amigos = [];
    amigo = "";
}

function mostraErro(mensagem) {
    document.getElementById("validacao").innerHTML = "";
    document.getElementById("validacao").innerHTML = mensagem;
}

function addAmigoListaHtml() {
    var nome = amigo;
    var li = document.createElement("li");
    li.setAttribute("id", nome);
    li.textContent = nome;
    if (nome === '') {
        mostraErro(mensagemInputVazio);
    } else {
        document.getElementById("listaAmigos").appendChild(li);
    }
    document.getElementById("amigo").value = "";
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "closeIcon";
    span.appendChild(txt);
    li.appendChild(span);
}

const confirmDialog = document.getElementById('confirm-dialog');
const deleteBtns = [...document.querySelectorAll('.btnDelete')];
const deleteIcons = [...document.querySelectorAll('.closeIcon')];

function removeFromList(item) {
    const filter = (element) => element == item;
    const indexToRemove = amigos.findIndex(filter);
    amigos.splice(indexToRemove, 1);
}

document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'closeIcon') {
        evt.preventDefault();
        confirmDialog.showModal();
/*
        confirmDialog.addEventListener('click', () => {
            window.onclick = function (event) {
                if (event.target == confirmDialog) {
                    confirmDialog.style.display = "none";
                    confirmDialog.returnValue = null;
                    confirmDialog.close();
                }
            }

        })
        */
        confirmDialog.addEventListener('close', () => {

            if (confirmDialog.returnValue) {
                var div = evt.target.parentElement;
                div.style.display = "none";
                var amigoList = evt.target.parentElement.id;
                removeFromList(amigoList);
            } else {
                console.log('Do nothing')
            }
        }, { once: true })
    }
}, false);
/*
function sorteioDuplo(){
    let clone = Array.from(amigos);
    amigos.forEach(amigo => {
        let sorteado = clone[getRandomInt(clone.length-1)];
            if(amigo==sorteado){
                sorteado = amigos[getRandomInt(clone.length-1)];
            }else{
                const indexSorteado = (element) => element === sorteado;
              //  const result = clone.find(({ name }) => name === sorteado);
                clone.splice(indexSorteado);
                alert(amigo +" tirou "+sorteado);
            }
        });
}
*/
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