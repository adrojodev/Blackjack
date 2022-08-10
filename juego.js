let cartasCorazones = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "♥️",
];
let cartasPicas = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "♠︎",
];
let cartasTreboles = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "♣︎",
];
let cartasDiamantes = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "♦️",
];

let mazos = [cartasCorazones, cartasPicas, cartasTreboles, cartasDiamantes];

let mazoElegido = [];
let cartaElegida;
let cartaAleatoria;
let mazoAleatorio;

let cartasJugador = [];
let cartasBot = [];

let mensajeCartasJugador = "";

let blackJack = false;

function disableAllButtons() {
  document.getElementById("start-button").disabled = true;
  document.getElementById("pide-mas").disabled = true;
  document.getElementById("quedarse").disabled = true;
  document.getElementById("jugar-de-nuevo").disabled = true;
}

function resetValores() {
  cartasCorazones = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "♥️",
  ];
  let cartasPicas = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "♠️",
  ];
  cartasTreboles = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "♣️",
  ];
  cartasDiamantes = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "♦️",
  ];
  mazos = [cartasCorazones, cartasPicas, cartasTreboles, cartasDiamantes];
  mazoAleatorio = Math.floor(Math.random() * mazos.length);
}

function eligeUnMazo() {
  mazoAleatorio = Math.floor(Math.random() * mazos.length);
  if (mazos[mazoAleatorio].length <= 1) {
    mazos.splice(mazoAleatorio, 1);
    mazoAleatorio = Math.floor(Math.random() * mazos.length);

    if (mazos.length == 0) {
      resetValores();
    }
  }

  mazoElegido = mazoAleatorio;
}

function eligeUnaCarta() {
  eligeUnMazo();
  let cartaAleatoria = Math.floor(
    Math.random() * (mazos[mazoElegido].length - 1)
  );

  cartaElegida = `${mazos[mazoElegido][cartaAleatoria]} de ${
    mazos[mazoElegido][mazos[mazoElegido].length - 1]
  }`;

  mazos[mazoElegido].splice(cartaAleatoria, 1);

  return cartaElegida;
}

function imprimeMensaje(mensaje) {
  let terminalDeMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = mensaje;
  terminalDeMensajes.appendChild(parrafo);
}

function imprimeTitular(mensaje) {
  let terminalDeMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("h2");
  parrafo.innerHTML = mensaje;
  terminalDeMensajes.appendChild(parrafo);
}

function sumaDeCartas(cartasASumar) {
  let sumaDeCarta = 0;
  for (i = 0; i < cartasASumar.length; i++) {
    if (
      cartasASumar[i].charAt(0) == "J" ||
      cartasASumar[i].charAt(0) == "Q" ||
      cartasASumar[i].charAt(0) == "K" ||
      cartasASumar[i].charAt(1) == "0"
    ) {
      sumaDeCarta = sumaDeCarta + 10;
    } else if (cartasASumar[i].charAt(0) == "A") {
      if (sumaDeCarta + 11 > 21) {
        sumaDeCarta = sumaDeCarta + 1;
      } else if (sumaDeCarta + 11 == 21) {
        blackJack = true;
        sumaDeCarta = 21;
      } else {
        sumaDeCarta = sumaDeCarta + 11;
      }
    } else {
      sumaDeCarta = sumaDeCarta + parseInt(cartasASumar[i].charAt(0));
    }
  }

  return sumaDeCarta;
}

function reparticionDeCartas() {
  cartasJugador = [eligeUnaCarta(), eligeUnaCarta()];
  cartasBot = [eligeUnaCarta(), eligeUnaCarta()];

  imprimeMensaje(`Tus cartas son: ${cartasJugador[0]} y ${cartasJugador[1]}`);
  imprimeMensaje(`La suma de tus cartas son: ${sumaDeCartas(cartasJugador)}`);

  if (sumaDeCartas(cartasJugador) == 21) {
    blackJackWin();
  }
}

function imprimeCartasDeJugador(cartasAImprimir) {
  mensajeCartasJugador = "";
  for (i = 0; i < cartasAImprimir.length; i++) {
    if (i == cartasAImprimir.length - 2) {
      mensajeCartasJugador = mensajeCartasJugador + cartasAImprimir[i];
    } else if (i == cartasAImprimir.length - 1) {
      mensajeCartasJugador = mensajeCartasJugador + " y " + cartasAImprimir[i];
    } else {
      mensajeCartasJugador = mensajeCartasJugador + cartasAImprimir[i] + ", ";
    }
  }
  if (cartasAImprimir == cartasJugador) {
    imprimeMensaje("Tus cartas son: " + mensajeCartasJugador);
  } else {
    imprimeMensaje("Las cartas del bot son: " + mensajeCartasJugador);
  }
}

function pedirOtraCarta(jugador) {
  imprimeMensaje("🙎 Pediste otra carta");
  jugador.push(eligeUnaCarta());
  imprimeCartasDeJugador(jugador);
  imprimeMensaje("La suma de tus cartas es: " + sumaDeCartas(jugador));
  checkCartasJugador(sumaDeCartas(jugador));
}

function logicaBot() {
  imprimeMensaje("<------------------->");
  imprimeMensaje("🤖 Turno de Bot");
  imprimeCartasDeJugador(cartasBot);
  imprimeMensaje(`La suma de las cartas de Bot es: ${sumaDeCartas(cartasBot)}`);

  if (sumaDeCartas(cartasBot) > sumaDeCartas(cartasJugador)) {
    checkCombate();
  } else if (sumaDeCartas(cartasBot) == 21) {
    checkCombate();
  } else if (
    sumaDeCartas(cartasBot) >= 17 &&
    sumaDeCartas(cartasBot) == sumaDeCartas(cartasJugador)
  ) {
    checkCombate();
  } else if (sumaDeCartas(cartasBot) >= 18 && sumaDeCartas(cartasBot) <= 20) {
    let intentarDeNuevo = Math.floor(Math.random() * 2);
    if (intentarDeNuevo == 0) {
      checkCombate();
    } else {
      imprimeMensaje("🤖 Bot pide otra carta");
      cartasBot.push(eligeUnaCarta());
      imprimeCartasDeJugador(cartasBot);
      imprimeMensaje(
        `La suma de las cartas de Bot es: ${sumaDeCartas(cartasBot)}`
      );
      checkCombate();
    }
  } else {
    while (sumaDeCartas(cartasBot) < 18) {
      imprimeMensaje("🤖 Bot pide otra carta");
      cartasBot.push(eligeUnaCarta());
      imprimeCartasDeJugador(cartasBot);
      imprimeMensaje(
        `La suma de las cartas de Bot es: ${sumaDeCartas(cartasBot)}`
      );
    }
    checkCombate();
  }
}

function quedarse() {
  imprimeMensaje("🙎 Te quedaste");
  logicaBot();
}

function iniciarJuego() {
  arrancarApuesta();
  document.getElementById("pide-mas").disabled = false;
  document.getElementById("quedarse").disabled = false;
  document.getElementById("apuesta-container").style.display = "none";
  document.getElementById("button-container").style.display = "flex";
  reparticionDeCartas();
  setNewChips();
  document.getElementById("start-button").setAttribute("disabled", "true");
}

function reiniciarJuego() {
  window.location.reload();
}

function cargarJuego() {
  setLastPlayDate();
  setInitialChips();
  disableAllButtons();
  valoresMonedas();
  calcularDinero();
  if (isNaN(monedasRojas)) {
    window.location.reload();
  }
}
