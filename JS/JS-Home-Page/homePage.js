// ParentNode: Get the node name of the parent node of propertie
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_parentnode

const characters = {
    steven: {
        firstImg: "../Images/stevenContent.png",
        secondImg: "../Images/ToddlerSteven.png",
        firstParagraph: '*Steven Quartzo Universo* é o personagem principal da série. Steven é o filho de Rose Quartz (Diamante Rosa), a ex-líder das Crystal Gems, e passa a viver com elas. Ao mesmo tempo que convive com sua vida humana em Beach City, também convive com o mundo Gem, indo atrás de artefatos Gems, derrotando Gems Corrompidas e descobrindo sobre o passado das Gems do Planeta Natal, que tentaram colonizar a Terra.',
        secondParagraph: 'Steven tem uma personalidade amigável, sendo sempre carinhoso e solidário, apoiando e sempre tentando ajudar ao máximo os outros, um traço apreciado pelos moradores de Beach City. Ele ama aventuras e quer salvar o universo junto com as Crystal Gems, mesmo que ainda não tenha controlado totalmente os poderes de sua pedra, mas ele está sempre disposto a tentar dominá-los. Durante as missões, Steven é bastante agitado e ansioso, tentando sempre encarar o maior problema, mesmo que não consiga vencê-lo realmente. Mas isso pode ser contornado devido a seu jeito único de resolver problemas, eventualmente fazendo-os piores para, então, resolvê-los.'
    },
    ametista:{
        firstImg: "../Images/AmetistaAntiga.png",
        secondImg: "../Images/miniAmetista.png",
        firstParagraph: 'Ametista, é um dos membros das Crystal Gems e uma das protagonistas da série. Ela foi a última Gem conhecida a ser fabricada na Terra como parte do projeto do Jardim de Infância. Após a Rebelião, Ametista se tornou uma Crystal Gem e passou a ajudar seus companheiros a proteger a Terra.',
        secondParagraph:'Ametista é alegre e despreocupada. Barulhenta, bagunceira e quase nunca se importa com as coisas que os outros falam dela, ela acha tudo divertido e quase sempre age por impulso. Ela gosta de fazer brincadeiras e piadas com as Crystal Gems, principalmente Steven e Peridot.'
    },
    pearl{

    },
    garnet{

    },
    lapis{

    }
}



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
      changeHistorySteven();
    } else if (idAlvoClicado == "pearl" && temaAtual != themePearl) {
      console.log("cliquei na pearl");
      caminho.href = themePearl;
      localStorage.setItem("theme", themePearl);
    } else if (idAlvoClicado == "ametista" && temaAtual != themeAmetista) {
      console.log("cliquei na ametista");
      caminho.href = themeAmetista;
      localStorage.setItem("theme", themeAmetista);
      changeHistoryAmetista();
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

function changeHistorySteven(){
    var firstImg = document.getElementById('rightImg');
    var secondImg = document.getElementById('leftImg');
    var firstParagraph = document.getElementById('firstParagraph');
    var secondParagraph = document.getElementById('secondParagraph')

    firstImg.src = characters.steven.firstImg;

    secondImg.src = characters.steven.secondImg;

    firstParagraph.innerHTML = characters.steven.firstParagraph;

    secondParagraph.innerHTML = characters.steven.secondParagraph;

    // var img = document.createElement('img');
    // img.src = '../Images/stevenContent.png';
    // document.getElementById('imgParagraph').appendChild(img);
}

function changeHistoryAmetista(){
    var firstImg = document.getElementById('rightImg');
    var secondImg = document.getElementById('leftImg');
    var firstParagraph = document.getElementById('firstParagraph');
    var secondParagraph = document.getElementById('secondParagraph')

    firstImg.src = characters.ametista.firstImg;

    secondImg.src = characters.ametista.secondImg;

    firstParagraph.innerHTML = characters.ametista.firstParagraph;

    secondParagraph.innerHTML = characters.ametista.secondParagraph;
}