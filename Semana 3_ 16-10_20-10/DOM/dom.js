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
*/
