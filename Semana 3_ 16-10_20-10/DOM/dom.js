/* console.log(window);
 console.log(document);

 let texto = "Hola soy Juan Carlos Sanchez y juego al futbol";
 const hablar = (texto) =>
   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

 hablar(texto); 


console.log("******** Elementos del Documento ********");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola Juanca desde el DOM</h2>")


console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));

//SOLAMENTE VAMOS A USAR ".getElementById()   .querySelector()    .querySelectorAll()"


console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
//$linkDOM.setAttribute("href", "https://twitter.com/juancasanchezr6")
console.log($linkDOM.hasAttribute("rel"));

$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//DATA-ATTRIBUTES

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Document Object Model"
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id")); 
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));


const $linkDOM = document.querySelector(".link-dom");

//ESTILOS DINÁMICOS DE CSS DE JAVASCRIPT

console.log($linkDOM.style);
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(window.getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration", "none");

$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));

//Variables CSS - Custom Properties

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"),
  varClearColor = getComputedStyle($html).getPropertyValue("--clear-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
//$body.style.color = varClearColor;

$html.style.setProperty("--dark-color", "pink");

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);



//MANEJO DE CLASES DE CSS DESDE JAVASCRIPT

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"));
$card.classList.replace("rotate-45","rotate-135")
$card.classList.add("opacity-80","sepia")
$card.classList.remove("opacity-80","sepia")



//MANEJO DE TEXTO Y DE HTML 

const $whatISDOM = document.getElementById("que-es");



let text = `
  <p>
  El Modelo de Objetos del Documento (<b> <i> DOM - Document Object Model </i> </b>) es un API para-
  documentos HTML y XML.
  </p>
  <p>
  Éste proveé una representación estructural del documento, permitiendo modificar su contenido y
  presentación visual mediante código JS.
  </p>
  <p>
  <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores. </
  mark>
  </p>
`;

//$whatISDOM.innerText = text;
$whatISDOM.textContent = text;
$whatISDOM.innerHTML = text;
$whatISDOM.outerHTML = text;


const $cards = document.querySelector(".cards");

//las sentencias las meto dentro de un SetTimeOut para que de tiempo a cargar las imágenes
//aleatorias y asi funcione a consola corrctamente
setTimeout(() => {
  
  console.log($cards);
  console.log($cards.children);
  console.log($cards.children[2]);
  console.log($cards.parentElement); 
  console.log($cards.firstElementChild); 
  console.log($cards.lastElementChild); 
  console.log($cards.previousElementSibling); 
  console.log($cards.nextElementSibling); 
  console.log($cards.closest("div"))
  console.log($cards.children[3].closest("section"))

},1000)


//CREANDO ELEMNTOS Y FRAGMENTOS DINÁMICAMENTE

const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://source.unsplash.com/random/200x200/?animals");
$img.setAttribute("alt", "Animals");
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");

$cards.appendChild($figure);

//NO SE USA
const estaciones = ["Prmavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//NO SE USA
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//ES EL MÁS USADO Y MÁS EFICAZ (FRAGMENTOS) MEJORA EL RENDIMIENTO
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
],
  $ul3 = document.createElement("ul");
  $fragment = document.createDocumentFragment();

meses.forEach(el => {
  const $li = document.createElement("li")
  $li.textContent = el
  $fragment.appendChild($li)
})

document.write("<h3> Meses del año </h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)


const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Animales",
      img: "https://source.unsplash.com/random/200x200/?animals",
    },
    {
      title: "Película",
      img: "https://source.unsplash.com/random/200x200/?film",
    },
    {
      title: "Deportes",
      img: "https://source.unsplash.com/random/200x200/?sports",
    },
    {
      title: "Arquitectura",
      img: "https://source.unsplash.com/random/200x200/?architecture-interior",
    },
    {
      title: "Naturaleza",
      img: "https://source.unsplash.com/random/200x200/?nature",
    },
  ];

cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment);


const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $colneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://source.unsplash.com/random/200x200/?any" alt="Any"/>
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

/*Para reemplazar por cualquier otro nodo

  $cards.replaceChild($newCard, $cards.children[2])


/*Para insertar uhn nodo nuevo justo antes del primero ya existente

    $cards.insertBefore($newCard, $cards.firstElementChild)


/*Para elimar un elemnto concreto, en este caso es el último

    $cards.removeChild($cards.lastElementChild)


document.body.appendChild($colneCards)

*/

/*
.insertAdjacent…
  .insertAdjacentElement(position, el)---> Agrega un elemento
  .insertAdjacentHTML(position, html)---> Agrega un contenido html
  .insertAdjacentText(position, text)---> Agrega un texto


Posiciones:
  beforebegin---> hermano anterior
  afterbegin---> primer hijo
  beforeend---> ultimo hijo
  afterend---> hermano siguiente
*/

/*
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $colneCards = $cards.cloneNode(true);

let $contentCard = `
<img src="https://source.unsplash.com/random/200x200/?any" alt="Any"/>
<figcaption></figcaption>
`;

$newCard.classList.add("card"); 

$newCard.insertAdjacentHTML("beforeend", $contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("beforeend", "Any")
$cards.insertAdjacentElement("afterbegin", $newCard)


function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-s"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de eventos semanticos");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);

$eventoMultiple.addEventListener("click", (e) => {
  alert("Manejador de eventos multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Juanca");
});

const removerDobleClick = (e) => {
  alert(`Borrando el evento tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true; 
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);


const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  //e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //FASE DE BURBUJA
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  
  //FASE DE CAPTURA
  //div.addEventListener("click", flujoEventos, true);
  // div.addEventListener("click", flujoEventos, {
    //   capture: false,
    //   once: true,
    // });
  });
  
  $linkEventos.addEventListener("click", (e) => {
    alert("Hola soy Juan Carlos");
    e.preventDefault();
    e.stopPropagation();
});


//BOM: Propiedades y Eventos
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("********* Evento Resize *********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerHeight);
  console.log(window.outerWidth);
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
});

 window.addEventListener("scroll", (e) => {
   console.clear();
   console.log("********* Evento Scroll *********");
   console.log(window.scrollX);
   console.log(window.scrollY);
   console.log(e);
 });

 //NO se usa
window.addEventListener("load", (e) => {
  console.log("********* Evento Load *********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

//SI se usa
document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********* Evento DOMContentLoaded *********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
  //e.stopPropagation();
});
 */
