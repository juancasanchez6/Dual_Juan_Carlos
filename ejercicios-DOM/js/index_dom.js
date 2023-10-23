import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalReloj, alarmaSonora } from "./reloj_digital.js";
import { moveBall, shortCuts } from "./teclado.js";
import countDown from "./cuenta_regresiva.js";
import scrollTopBtn from "./boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalReloj("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarmaSonora(
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countDown("countDown", "Oct 23, 2023 11:03:20", "Ejercicio hecho correctamente");

  scrollTopBtn(".scroll-top-btn")
});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});
