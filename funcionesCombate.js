function imprimirMarcador() {
  imprimeCartasDeJugador(cartasBot);
  imprimeMensaje(`Y suman: ${sumaDeCartas(cartasBot)}`);
  imprimeCartasDeJugador(cartasJugador);
  imprimeMensaje(`Y suman: ${sumaDeCartas(cartasJugador)}`);
}

function checkCombate() {
  document.getElementById("jugar-de-nuevo").disabled = false;
  document.getElementById("pide-mas").disabled = true;
  document.getElementById("quedarse").disabled = true;
  imprimeMensaje("<br>");
  if (sumaDeCartas(cartasJugador) == sumaDeCartas(cartasBot)) {
    imprimeTitular("¡Empate! 🤝");
    imprimirMarcador();
    sumarJuegoMonedas();
  } else if (
    sumaDeCartas(cartasJugador) > sumaDeCartas(cartasBot) &&
    sumaDeCartas(cartasJugador) <= 21
  ) {
    imprimeTitular("¡Ganaste! 🏆");
    imprimirMarcador();
    sumarMonedasAlGanar();
  } else if (sumaDeCartas(cartasBot) > 21) {
    imprimeTitular("¡Ganaste! 🏆");
    imprimirMarcador();
    sumarMonedasAlGanar();
  } else {
    imprimeTitular("¡Perdiste! 😢");
    imprimirMarcador();
  }
}

function blackJackWin() {
  document.getElementById("jugar-de-nuevo").disabled = false;
  document.getElementById("pide-mas").disabled = true;
  document.getElementById("quedarse").disabled = true;
  imprimeMensaje("<br>");
  imprimeTitular("¡Blackjack! 😎");
  imprimeMensaje("Ganaste, obtuviste 21 al repartir cartas.");
  sumarMonedasAlGanar();
}

function checkCartasJugador(sumatoriaDeJugador) {
  if (sumatoriaDeJugador == 21) {
    document.getElementById("pide-mas").disabled = true;
    document.getElementById("quedarse").disabled = true;
    logicaBot();
  } else if (sumatoriaDeJugador > 21) {
    document.getElementById("jugar-de-nuevo").disabled = false;
    document.getElementById("pide-mas").disabled = true;
    document.getElementById("quedarse").disabled = true;
    imprimeMensaje("<br>");
    imprimeTitular("¡Perdiste! 😢");
    imprimeMensaje("Te pasaste de 21");
  }
}
