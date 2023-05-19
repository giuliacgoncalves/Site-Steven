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
      console.log("cliquei no steven");
      caminho.href = themeSteven;
      changeHistorySteven();
      localStorage.setItem("theme", themeSteven);
    } else if (idAlvoClicado == "pearl" && temaAtual != themePearl) {
      console.log("cliquei na pearl");
      caminho.href = themePearl;
      changeHistoryPerola();
      localStorage.setItem("theme", themePearl);
    } else if (idAlvoClicado == "ametista" && temaAtual != themeAmetista) {
      console.log("cliquei na ametista");
      caminho.href = themeAmetista;
      changeHistoryAmetista();
      localStorage.setItem("theme", themeAmetista);
    } else if (idAlvoClicado == "garnet" && temaAtual != themeGarnet) {
      console.log("cliquei na garnet");
      caminho.href = themeGarnet;
      changeHistoryGarnet();
      localStorage.setItem("theme", themeGarnet);
    } else if (idAlvoClicado == "lapis" && temaAtual != themeLapis) {
      console.log("cliquei na lapis");
      caminho.href = themeLapis;
      changeHistoryLapis()
      localStorage.setItem("theme", themeLapis);
    }
}

function changeHistorySteven(){
    var firstImg = document.getElementById('rightImg');
    var secondImg = document.getElementById('leftImg');
    var firstParagraph = document.getElementById('firstParagraph');
    var secondParagraph = document.getElementById('secondParagraph');
    var link = document.getElementById("link");

    firstImg.src = characters.steven.firstImg;

    secondImg.src = characters.steven.secondImg;

    firstParagraph.innerHTML = characters.steven.firstParagraph;

    secondParagraph.innerHTML = characters.steven.secondParagraph;

    link.href = characters.steven.link;

    // var img = document.createElement('img');
    // img.src = '../Images/stevenContent.png';
    // document.getElementById('imgParagraph').appendChild(img);
}

function changeHistoryAmetista(){
    var firstImg = document.getElementById('rightImg');
    var secondImg = document.getElementById('leftImg');
    var firstParagraph = document.getElementById('firstParagraph');
    var secondParagraph = document.getElementById('secondParagraph');
    var link = document.getElementById("link");

    firstImg.src = characters.ametista.firstImg;

    secondImg.src = characters.ametista.secondImg;

    firstParagraph.innerHTML = characters.ametista.firstParagraph;

    secondParagraph.innerHTML = characters.ametista.secondParagraph;

    link.href = characters.ametista.link;
}

function changeHistoryPerola(){
    var firstImg = document.getElementById('rightImg');
    var secondImg = document.getElementById('leftImg');
    var firstParagraph = document.getElementById('firstParagraph');
    var secondParagraph = document.getElementById('secondParagraph');
    var link = document.getElementById("link");

    firstImg.src = characters.pearl.firstImg;

    secondImg.src = characters.pearl.secondImg;

    firstParagraph.innerHTML = characters.pearl.firstParagraph;

    secondParagraph.innerHTML = characters.pearl.secondParagraph;

    link.href = characters.pearl.link;
}

function changeHistoryGarnet(){
  var firstImg = document.getElementById('rightImg');
  var secondImg = document.getElementById('leftImg');
  var firstParagraph = document.getElementById('firstParagraph');
  var secondParagraph = document.getElementById('secondParagraph');
  var link = document.getElementById("link");

  firstImg.src = characters.garnet.firstImg;

  secondImg.src = characters.garnet.secondImg;

  firstParagraph.innerHTML = characters.garnet.firstParagraph;

  secondParagraph.innerHTML = characters.garnet.secondParagraph;

  link.href = characters.garnet.link;
}

function changeHistoryLapis(){
  var firstImg = document.getElementById('rightImg');
  var secondImg = document.getElementById('leftImg');
  var firstParagraph = document.getElementById('firstParagraph');
  var secondParagraph = document.getElementById('secondParagraph');
  var link = document.getElementById("link");

  firstImg.src = characters.lapis.firstImg;

  secondImg.src = characters.lapis.secondImg;

  firstParagraph.innerHTML = characters.lapis.firstParagraph;

  secondParagraph.innerHTML = characters.lapis.secondParagraph;

  link.href = characters.lapis.link;
}