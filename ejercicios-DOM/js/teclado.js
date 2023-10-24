const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  Math.round(limitsBall);
  Math.round(limitsStage);

  // console.log(e.keyCode);
  // console.log(limitsBall, limitsStage);

  //const move = (direction) => {};

  switch (e.keyCode) {
    //izquierda
    case 37:
      // move("left");
      e.preventDefault();

      if (limitsBall.left >= limitsStage.left) x--;
      break;
    //arriba
    case 38:
      // move("up");

      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    //derecha
    case 39:
      // move("right");
      e.preventDefault();
      if (limitsBall.right < limitsStage.right) x++;
      break;
    //abajo
    case 40:
      // move("down");
      
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++
      };
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortCuts(e) {
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e.ctrlKey);
  // console.log(e.altKey);
  // console.log(e.shiftKey);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("Has lanzado una alerta con el teclado");
  }

  if (e.key === "p" && e.altKey) {
    alert("Has lanzado un aviso con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    alert("Has lanzado una confirmación con el teclado");
  }
}
