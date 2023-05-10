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
    let nomeInp = document.getElementById('inpName').value;
    let passwordInp = document.getElementById('inpPassword').value;
    let passConfirmInp = document.getElementById('inpConfirmPassword').value;

    if(nomeInp == '' || emailInp =='' || passwordInp=='' || passConfirmInp==''){
        alert('Preencha os campos')
    }

    for(let i=0; i<data.length;i++){
        if(emailInp == data[i].email){
            alert("O email informado ja possui cadastro");
            return;
        }
    }

    if(passwordInp!=passConfirmInp){
        alert('As senhas não correspondem!')
    }

    alert('Usuário cadastrado!')
    document.getElementById('inpName').value = '';
    document.getElementById('inpEmail').value = '';
    document.getElementById('inpPassword').value = '';
    document.getElementById('inpConfirmPassword').value = '';
}
