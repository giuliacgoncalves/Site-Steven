// ParentNode: Get the node name of the parent node of propertie
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_parentnode

import characters from "./characteres.js";

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
      caminho.href = themeSteven;
      changeHistory("steven");
      localStorage.setItem("theme", themeSteven);
    } else if (idAlvoClicado == "pearl" && temaAtual != themePearl) {
      caminho.href = themePearl;
      changeHistory("pearl");
      localStorage.setItem("theme", themePearl);
    } else if (idAlvoClicado == "ametista" && temaAtual != themeAmetista) {
      caminho.href = themeAmetista;
      changeHistory("ametista");
      localStorage.setItem("theme", themeAmetista);
    } else if (idAlvoClicado == "garnet" && temaAtual != themeGarnet) {
      caminho.href = themeGarnet;
      changeHistory("garnet");
      localStorage.setItem("theme", themeGarnet);
    } else if (idAlvoClicado == "lapis" && temaAtual != themeLapis) {
      caminho.href = themeLapis;
      changeHistory("lapis");
      localStorage.setItem("theme", themeLapis);
    }
}

function changeHistory(caracter){
    var firstImg = document.getElementById('rightImg');
    var secondImg = document.getElementById('leftImg');
    var firstParagraph = document.getElementById('firstParagraph');
    var secondParagraph = document.getElementById('secondParagraph');
    var link = document.getElementById("link");

    firstImg.src = characters[caracter].firstImg;

    secondImg.src = characters[caracter].secondImg;

    firstParagraph.innerHTML = characters[caracter].firstParagraph;

    secondParagraph.innerHTML = characters[caracter].secondParagraph;

    link.href = characters[caracter].link;

    // var img = document.createElement('img');
    // img.src = '../Images/stevenContent.png';
    // document.getElementById('imgParagraph').appendChild(img);
}