import data from '../Mockaroo/mackdata.js';

// Seleção do botao
let btnLogin = document.querySelector("#buttonLogin");

// Adicionando evento ao botão
btnLogin.addEventListener('click', logar);

// Função do evento
function logar(){
    let emailInp = document.getElementById("inpEmail").value;
    let passwordInp = document.getElementById("inpPassword").value;

    //forEach não funciona nesse tipo de situação
    for(let i=0; i<data.length; i++){
        if(emailInp == data[i].email && passwordInp == data[i].password){
            alert("obrigado por logar!");
            return;
        }
    }
}

const btnSignUp = document.querySelector("#buttonSignUp");
btnSignUp.addEventListener('click', ()=>{
    location.href = '../Pages/register.html'
})