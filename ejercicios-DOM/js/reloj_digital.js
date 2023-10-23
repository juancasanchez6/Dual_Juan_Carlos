const d = document;

export function digitalReloj(reloj, btnIniciar, btnParar) {
  let relojTiempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnIniciar)) {
      relojTiempo = setInterval(() => {
        let tiempo = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `<h3> ${tiempo} </h3>`;
      }, 1000);

      e.target.disabled = true;
    }

    if (e.target.matches(btnParar)) {
      clearInterval(relojTiempo);
      d.querySelector(reloj).innerHTML = null;
      d.querySelector(btnIniciar).disabled = false;
    }
  });
}

export function alarmaSonora( alarmaSi, alarmaNo) {
  let alarmaTempo;
  const $alarma = d.createElement("audio");
  //$alarma.src = sound;

  d.addEventListener("click", (e) => {
    if (e.target.matches(alarmaSi)) {
      alarmaTempo = setTimeout(() => {
        $alarma.play();
      }, 2000);

      e.target.disabled = true;
    }

    if (e.target.matches(alarmaNo)) {
        clearTimeout(alarmaTempo)
        $alarma.pause()
        $alarma.currentTime = 0
        d.querySelector(alarmaNo).disabled = false;
    }
  });
}
