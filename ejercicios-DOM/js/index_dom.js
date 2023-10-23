import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalReloj, alarmaSonora } from "./dom/reloj_digital.js";
import { moveBall, shortCuts } from "./dom/teclado.js";
import countDown from "./dom/cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalReloj("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarmaSonora(
    "../../assets/soundAlarma.mp3",
    "#activar-alarma",
    "#desactivar-alarma"
  );
  countDown("countDown", "Oct 23, 2023 11:03:20", "Ejercicio hecho correctamente");
});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});
