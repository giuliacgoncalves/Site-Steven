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
var gemButton = document.querySelector("#imgChange");
gemButton.addEventListener('click', trocarTema);

function trocarTema(){
    console.log('teste')
    document.querySelector(".caminhoCss").href = themeSteven;
    let aux = themeSteven;
    themeSteven = themeAmetista;
    themeAmetista = aux;
}