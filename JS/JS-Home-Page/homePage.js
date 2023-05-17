// ParentNode: Get the node name of the parent node of propertie
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_parentnode

let btnTemas = document.querySelectorAll('.buttonNav');

btnTemas.forEach((btnTema)=>{
    btnTema.addEventListener('click', trocarTema);
})

var themeSteven = "../Style/Style-Home-Page/styleHomeSteven.css";
var themeAmetista = "../Style/Style-Home-Page/styleHomeAmetista.css";
var themePearl = "../Style/Style-Home-Page/styleHomePearl.css";
var themeGarnet = "../Style/Style-Home-Page/styleHomeGarnet.css";
var themeLapis = "../Style/Style-Home-Page/styleHomeLapis.css";

function trocarTema(evt) {
    let alvoClicado = evt.target;
    let idAlvoClicado = alvoClicado.getAttribute("id");
    let caminho = document.querySelector(".caminhoCSS");
    let temaAtual = caminho.getAttribute("href");
  
    if (idAlvoClicado == "steven" && temaAtual != themeSteven) {
      console.log("cliquei no steven");
      caminho.href = themeSteven;
      localStorage.setItem("theme", themeSteven);
    } else if (idAlvoClicado == "pearl" && temaAtual != themePearl) {
      console.log("cliquei na pearl");
      caminho.href = themePearl;
      localStorage.setItem("theme", themePearl);
    } else if (idAlvoClicado == "ametista" && temaAtual != themeAmetista) {
      console.log("cliquei na ametista");
      caminho.href = themeAmetista;
      localStorage.setItem("theme", themeAmetista);
    } else if (idAlvoClicado == "garnet" && temaAtual != themeGarnet) {
      console.log("cliquei na garnet");
      caminho.href = themeGarnet;
      localStorage.setItem("theme", themeGarnet);
    } else if (idAlvoClicado == "lapis" && temaAtual != themeLapis) {
      console.log("cliquei na lapis");
      caminho.href = themeLapis;
      localStorage.setItem("theme", themeLapis);
    }
  }