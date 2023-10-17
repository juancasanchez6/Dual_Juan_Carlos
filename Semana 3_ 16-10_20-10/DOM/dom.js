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
*/
