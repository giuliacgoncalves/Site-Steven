import data from '../Mockaroo/mackdata.js';

// Seleção do botao
let btnLogin = document.querySelector("#buttonLogin");

// Adicionando evento ao botão
btnLogin.addEventListener('click', logar);

// Função do evento
function logar(){
    let emailInp = document.getElementById("inpEmail").value;
    let passwordInp = document.getElementById("inpPassword").value;

    if(emailInp =='' || passwordInp==''){
        alert('Preencha os campos')
    }

    //forEach não funciona nesse tipo de situação
    for(let i=0; i<data.length; i++){
        if(emailInp == data[i].email && passwordInp == data[i].password){
            alert("obrigado por logar!");
            return;
        }
    }

    acessarHomePage();
}

function acessarHomePage(){
    btnLogin.addEventListener('click', ()=>{
        location.href = '../Pages/home-page.html'
    })
}

const btnSignUp = document.querySelector("#buttonSignUp");
btnSignUp.addEventListener('click', ()=>{
    location.href = '../Pages/register.html'
})

var themeSteven = "../Style/styleIndex.css";
var themeAmetista = "../Style/styleIndexAmetista.css";
var themePearl = "../Style/styleIndexPearl.css";
var themeGarnet = "../Style/styleIndexGarnet.css";
var themeLapis = "../Style/styleIndexLapis.css";
var gemButtons = document.querySelectorAll(".gemBtn");
// console.log(gemButtons)

gemButtons.forEach(gemBtn => {
    gemBtn.addEventListener('click', trocarTema);
})


function trocarTema(evt){
    let alvoClicado = evt.target
    let idAlvoClicado = evt.target.getAttribute('id')
    let caminho = document.querySelector(".caminhoCss")
    let temaAtual = 'sda'

    if(idAlvoClicado == 'steven' && temaAtual != 'steven') {
        console.log("cliquei no steven")
        // alvoClicado.classList.add("selecionado")
        caminho.href = themeSteven
    }
    else if(idAlvoClicado == 'pearl' && temaAtual != 'pearl') {
        console.log("cliquei na pearl")
        caminho.href = themePearl
    }
    else if(idAlvoClicado == 'ametista' && temaAtual != 'ametista') {
        console.log("cliquei na ametista")
        caminho.href = themeAmetista
    }
    else if(idAlvoClicado == 'garnet' && temaAtual != 'garnet') {
        console.log("cliquei na garnet")
        caminho.href = themeGarnet
    }
    else if(idAlvoClicado == 'lapis' && temaAtual != 'lapis') {
        console.log("cliquei na lapis")
        caminho.href = themeLapis
    }


    // document.querySelector(".caminhoCss").href = themeSteven;
    console.log(caminho);
}