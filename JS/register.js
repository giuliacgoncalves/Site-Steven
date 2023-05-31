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

/* ↓ menu ↓ */

var themeSteven = "../Style/styleRegisterSteven.css";
var themeAmetista = "../Style/styleRegisterAmetista.css";
var themePearl = "../Style/styleRegisterPearl.css";
var themeGarnet = "../Style/styleRegisterGarnet.css";
var themeLapis = "../Style/styleRegisterLapis.css";
var buttonMenu = document.querySelector(".star");
var gemButtons = document.querySelectorAll(".gemBtn");

buttonMenu.addEventListener("click", () => {
  let menu = document.querySelector(".containerRocks");
  menu.classList.toggle("active");
});

gemButtons.forEach((gemBtn) => {
  gemBtn.addEventListener("click", trocarTema);
});

/* ↓ Função de troca do tema ↓ */

function trocarTema(evt) {
  let alvoClicado = evt.target.parentNode;
  let idAlvoClicado = alvoClicado.getAttribute("id");
  let caminho = document.querySelector(".caminhoCss");
  let temaAtual = caminho.getAttribute("href");
  // parentNode  
    if (idAlvoClicado == "steven" && temaAtual != themeSteven) {
      // alvoClicado.classList.add("selecionado")
      caminho.href = themeSteven;
      localStorage.setItem("theme", themeSteven);
    } else if (idAlvoClicado == "pearl" && temaAtual != themePearl) {
      caminho.href = themePearl;
      localStorage.setItem("theme", themePearl);
    } else if (idAlvoClicado == "ametista" && temaAtual != themeAmetista) {
      caminho.href = themeAmetista;
      localStorage.setItem("theme", themeAmetista);
    } else if (idAlvoClicado == "garnet" && temaAtual != themeGarnet) {
      caminho.href = themeGarnet;
      localStorage.setItem("theme", themeGarnet);
    } else if (idAlvoClicado == "lapis" && temaAtual != themeLapis) {
      caminho.href = themeLapis;
      localStorage.setItem("theme", themeLapis);
    }

  // document.querySelector(".caminhoCss").href = themeSteven;
}