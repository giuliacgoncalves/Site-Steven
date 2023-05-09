import data from '../Mockaroo/mackdata.js';

// Seleção do botao
let btnLogin = document.querySelector("#buttonLogin");

// Adicionando evento ao botão
btnLogin.addEventListener('click', logar);

// Função do evento
function logar(){
    let emailInp = document.getElementById("inpEmail").value;
    let passwordInp = document.getElementById("inpPassword").value;

    console.log(emailInp,passwordInp)

    //forEach não funciona nesse tipo de situação
    data.every(usuario => {
        //console.log(usuario.email)
        if(emailInp == usuario.email && passwordInp == usuario.password){
            alert("obrigado por logar!")
            return false;
        }else{
            // alert("email ou senha invalidos"); -> causa loop até o 1000
            return true;
        }
    })
}

const btnSignUp = document.querySelector("#buttonSignUp");
btnSignUp.addEventListener('click', ()=>{
    location.href = '../Pages/register.html'
})