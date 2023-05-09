import data from '../Mockaroo/mackdata.js';

const backToLogin = document.querySelector("#backLogin");
backToLogin.addEventListener('click', ()=>{
    location.href = '../Pages/index.html'
})

//iniciando botao de verificacao
let btnVerificarEmail = document.querySelector("#btnVerifySignUp");
btnVerificarEmail.addEventListener("click", verificarEmailCadastrado);

// Funçao de verificaçao de email do cadastro do register.html
function verificarEmailCadastrado(){
    let emailInp = document.getElementById("inpEmail").value;

    for(let i=0; i<data.length;i++){
        if(emailInp == data[i].email){
            alert("O email informado ja possui cadastro");
            return;
        }
    }
}
