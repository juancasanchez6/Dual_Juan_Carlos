import hamburgerMenu from "./dom/menu_hamburguesa.js";
import {digitalReloj, alarmaSonora} from "./dom/reloj_digital.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel",".menu a");
  digitalReloj("#reloj", "#activar-reloj", "#desactivar-reloj")
  alarmaSonora("../../assets/soundAlarma.mp3", "#activar-alarma", "#desactivar-alarma")
});
