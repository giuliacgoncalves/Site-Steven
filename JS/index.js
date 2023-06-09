import data from "../Mockaroo/mackdata.js";

// Seleção do botao
let btnLogin = document.querySelector("#buttonLogin");

// Adicionando evento ao botão
btnLogin.addEventListener("click", logar);

// Função do evento
function logar() {
  let emailInp = document.getElementById("inpEmail").value;
  let passwordInp = document.getElementById("inpPassword").value;

  if (emailInp == "" || passwordInp == "") {
    alert("Preencha os campos");
  }

  //forEach não funciona nesse tipo de situação
  for (let i = 0; i < data.length; i++) {
    if (emailInp == data[i].email && passwordInp == data[i].password) {
      alert("obrigado por logar!");
      return;
    }
  }

  acessarHomePage();
}

/* ↓ Funçaõ para acessar a página principal ↓ */

function acessarHomePage() {
  btnLogin.addEventListener("click", () => {
    location.href = "../Pages/home-page.html";
  });
}

/* ↓ Ir para página de Registro ↓ */

const btnSignUp = document.querySelector("#buttonSignUp");
btnSignUp.addEventListener("click", () => {
  location.href = "../Pages/register.html";
});

/* ↓ menu ↓ */

var themeSteven = "../Style/styleIndex.css";
var themeAmetista = "../Style/styleIndexAmetista.css";
var themePearl = "../Style/styleIndexPearl.css";
var themeGarnet = "../Style/styleIndexGarnet.css";
var themeLapis = "../Style/styleIndexLapis.css";
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