import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalReloj, alarmaSonora } from "./reloj_digital.js";
import { moveBall, shortCuts } from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopBtn from "./boton_scroll.js";
import { darkTheme } from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import filtrosBusqueda from "./filtro_busquedas.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalReloj("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarmaSonora("#activar-alarma", "#desactivar-alarma");
  countDown(
    "countDown",
    "Oct 23, 2024 11:03:20",
    "Ejercicio hecho correctamente"
  );

  scrollTopBtn(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href= "https://www.youtube.com/watch?v=fBJbQbuICrY&ab_channel=MemoriasdelF%C3%BAtbol"
    target = "_blank" rel = "noopener"> Ver vídeo </a>`,
    `<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/fBJbQbuICrY?si=8Btjpuef3bX-Hg5h" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
    clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
    web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href= "https://maps.app.goo.gl/1epoBPYfUBEz7YnZ9"
    target = "_blank" rel = "noopener"> Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3296499319645!2d-3.723615723470115!3d40.40154745656251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227c329c41757%3A0x25b4cf6085a7157e!2sEstadio%20Vicente%20Calder%C3%B3n!5e0!3m2!1ses!2ses!4v1698136561257!5m2!1ses!2ses"
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  filtrosBusqueda(".card-filter",".card")
});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
