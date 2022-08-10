let monedasRojas = parseInt(localStorage.getItem("monedasRojas"));
let monedasNaranjas = parseInt(localStorage.getItem("monedasNaranjas"));
let monedasAmarillas = parseInt(localStorage.getItem("monedasAmarillas"));
let monedasVerdes = parseInt(localStorage.getItem("monedasVerdes"));
let monedasAzules = parseInt(localStorage.getItem("monedasAzules"));
let monedasMoradas = parseInt(localStorage.getItem("monedasMoradas"));

let apuestaMonedasRojas = 0;
let apuestaMonedasNaranjas = 0;
let apuestaMonedasAmarillas = 0;
let apuestaMonedasVerdes = 0;
let apuestaMonedasAzules = 0;
let apuestasMonedasMoradas = 0;

let allMonedas = [
  monedasRojas,
  monedasNaranjas,
  monedasAmarillas,
  monedasVerdes,
  monedasAzules,
  monedasMoradas,
];

let dineroDelJugador = 0;
let apuestaDelJuego = 0;

function valoresMonedas() {
  document.getElementById(
    "listado-de-monedas"
  ).innerHTML = `<li>🔴: ${monedasRojas}</li>
    <li>🟠: ${monedasNaranjas}</li>
    <li>🟡: ${monedasAmarillas}</li>
    <li>🟢: ${monedasVerdes}</li>
    <li>🔵: ${monedasAzules}</li>
    <li>🟣: ${monedasMoradas}</li>`;
}

function setInitialChips() {
  if (localStorage.getItem("monedasRojas") == null) {
    localStorage.setItem("monedasRojas", "20");
    localStorage.setItem("monedasNaranjas", "20");
    localStorage.setItem("monedasAmarillas", "10");
    localStorage.setItem("monedasVerdes", "10");
    localStorage.setItem("monedasAzules", "2");
    localStorage.setItem("monedasMoradas", "1");
  }
}

function setNewChips() {
  localStorage.setItem("monedasRojas", String(monedasRojas));
  localStorage.setItem("monedasNaranjas", String(monedasNaranjas));
  localStorage.setItem("monedasAmarillas", String(monedasAmarillas));
  localStorage.setItem("monedasVerdes", String(monedasVerdes));
  localStorage.setItem("monedasAzules", String(monedasAzules));
  localStorage.setItem("monedasMoradas", String(monedasMoradas));
  calcularDinero();
}

function getMoreChips() {
  if (localStorage.getItem("monedasRojas") == null) {
    localStorage.setItem("monedasRojas", "20");
    localStorage.setItem("monedasNaranjas", "20");
    localStorage.setItem("monedasAmarillas", "10");
    localStorage.setItem("monedasVerdes", "10");
    localStorage.setItem("monedasAzules", "2");
    localStorage.setItem("monedasMoradas", "1");
  } else {
    monedasRojas = parseInt(localStorage.getItem("monedasRojas")) + 20;
    monedasNaranjas = parseInt(localStorage.getItem("monedasNaranjas")) + 20;
    monedasAmarillas = parseInt(localStorage.getItem("monedasAmarillas")) + 10;
    monedasVerdes = parseInt(localStorage.getItem("monedasVerdes")) + 10;
    monedasAzules = parseInt(localStorage.getItem("monedasAzules")) + 2;
    monedasMoradas = parseInt(localStorage.getItem("monedasMoradas")) + 1;
  }
  setNewCookieDate();
  setNewChips();
}

function moreChipsPlease() {
  getMoreChips();
  window.location.reload();
}

function valoresMonedas() {
  for (i = 0; i < allMonedas.length; i++) {
    if (allMonedas[i] == 0) {
      allMonedas = "0";
    }
  }
  document.getElementById(
    "listado-de-monedas"
  ).innerHTML = `<li>🔴: ${monedasRojas}</li>
    <li>🟠: ${monedasNaranjas}</li>
    <li>🟡: ${monedasAmarillas}</li>
    <li>🟢: ${monedasVerdes}</li>
    <li>🔵: ${monedasAzules}</li>
    <li>🟣: ${monedasMoradas}</li>`;
}

function agregarMoneda(moneda) {
  document.getElementById("start-button").disabled = false;
  if (moneda == "🔴" && monedasRojas >= 1) {
    monedasRojas--;
    apuestaMonedasRojas++;
    document.getElementById("texto-apuesta").innerHTML =
      document.getElementById("texto-apuesta").innerHTML + moneda;
    apuestaDelJuego = apuestaDelJuego + 5;
    valoresMonedas();
    arrancarApuesta();
  } else if (moneda == "🟠" && monedasNaranjas >= 1) {
    monedasNaranjas--;
    apuestaMonedasNaranjas++;
    document.getElementById("texto-apuesta").innerHTML =
      document.getElementById("texto-apuesta").innerHTML + moneda;
    valoresMonedas();
    apuestaDelJuego = apuestaDelJuego + 10;
    arrancarApuesta();
  } else if (moneda == "🟡" && monedasAmarillas >= 1) {
    monedasAmarillas--;
    apuestaMonedasAmarillas++;
    document.getElementById("texto-apuesta").innerHTML =
      document.getElementById("texto-apuesta").innerHTML + moneda;
    valoresMonedas();
    apuestaDelJuego = apuestaDelJuego + 20;
    arrancarApuesta();
  } else if (moneda == "🟢" && monedasVerdes >= 1) {
    monedasVerdes--;
    apuestaMonedasVerdes++;
    document.getElementById("texto-apuesta").innerHTML =
      document.getElementById("texto-apuesta").innerHTML + moneda;
    valoresMonedas();
    apuestaDelJuego = apuestaDelJuego + 20;
    arrancarApuesta();
  } else if (moneda == "🔵" && monedasAzules >= 1) {
    monedasAzules--;
    apuestaMonedasAzules++;
    document.getElementById("texto-apuesta").innerHTML =
      document.getElementById("texto-apuesta").innerHTML + moneda;
    valoresMonedas();
    apuestaDelJuego = apuestaDelJuego + 100;
    arrancarApuesta();
  } else if (moneda == "🟣" && monedasMoradas >= 1) {
    monedasMoradas--;
    apuestasMonedasMoradas++;
    document.getElementById("texto-apuesta").innerHTML =
      document.getElementById("texto-apuesta").innerHTML + moneda;
    valoresMonedas();
    apuestaDelJuego = apuestaDelJuego + 200;
    arrancarApuesta();
  }
  calcularDinero();
}

function sumarMonedasAlGanar() {
  monedasRojas = monedasRojas + apuestaMonedasRojas * 2;
  monedasNaranjas = monedasNaranjas + apuestaMonedasNaranjas * 2;
  monedasAmarillas = monedasAmarillas + apuestaMonedasAmarillas * 2;
  monedasVerdes = monedasVerdes + apuestaMonedasVerdes * 2;
  monedasAzules = monedasAzules + apuestaMonedasAzules * 2;
  monedasMoradas = monedasMoradas + apuestasMonedasMoradas * 2;

  setNewChips();
  valoresMonedas();
  calcularDinero();
}

function sumarJuegoMonedas() {
  monedasRojas = monedasRojas + apuestaMonedasRojas;
  monedasNaranjas = monedasNaranjas + apuestaMonedasNaranjas;
  monedasAmarillas = monedasAmarillas + apuestaMonedasAmarillas;
  monedasVerdes = monedasVerdes + apuestaMonedasVerdes;
  monedasAzules = monedasAzules + apuestaMonedasAzules;
  monedasMoradas = monedasMoradas + apuestasMonedasMoradas;

  setNewChips();
  valoresMonedas();
  calcularDinero();
}

function borrarMonedas() {
  document.getElementById("texto-apuesta").innerHTML = "";
  document.getElementById("start-button").disabled = true;
  valoresMonedas();
  apuestaDelJuego = 0;
  arrancarApuesta();
  monedasRojas = monedasRojas + apuestaMonedasRojas;
  monedasNaranjas = monedasNaranjas + apuestaMonedasNaranjas;
  monedasAmarillas = monedasAmarillas + apuestaMonedasAmarillas;
  monedasVerdes = monedasVerdes + apuestaMonedasVerdes;
  monedasAzules = monedasAzules + apuestaMonedasAzules;
  monedasMoradas = monedasMoradas + apuestasMonedasMoradas;

  apuestaMonedasRojas = 0;
  apuestaMonedasNaranjas = 0;
  apuestaMonedasAmarillas = 0;
  apuestaMonedasVerdes = 0;
  apuestaMonedasAzules = 0;
  apuestasMonedasMoradas = 0;

  setNewChips();
  valoresMonedas();
  calcularDinero();
}

function arrancarApuesta() {
  document.getElementById("apuesta-indicator").innerHTML =
    "Apuesta: $" + apuestaDelJuego;
}

function calcularDinero() {
  dineroDelJugador =
    monedasRojas * 5 +
    monedasNaranjas * 10 +
    monedasAmarillas * 20 +
    monedasVerdes * 20 +
    monedasAzules * 100 +
    monedasMoradas * 200;

  document.getElementById("dinero-del-jugador").innerHTML =
    "Tu efectivo es: $" + dineroDelJugador;
}

function apostarTodo() {
  let repeticiones = 0;
  for (x = 0; x < allMonedas.length; x++) {
    if (x == 0) {
      while (repeticiones < allMonedas[x]) {
        document.getElementById("red-chip").click();
        repeticiones++;
      }
      repeticiones = 0;
    } else if (x == 1) {
      while (repeticiones < allMonedas[x]) {
        document.getElementById("orange-chip").click();
        repeticiones++;
      }
      repeticiones = 0;
    } else if (x == 2) {
      while (repeticiones < allMonedas[x]) {
        document.getElementById("yellow-chip").click();
        repeticiones++;
      }
      repeticiones = 0;
    } else if (x == 3) {
      while (repeticiones < allMonedas[x]) {
        document.getElementById("green-chip").click();
        repeticiones++;
      }
      repeticiones = 0;
    } else if (x == 4) {
      while (repeticiones < allMonedas[x]) {
        document.getElementById("blue-chip").click();
        repeticiones++;
      }
      repeticiones = 0;
    } else if (x == 5) {
      while (repeticiones < allMonedas[x]) {
        document.getElementById("purple-chip").click();
        repeticiones++;
      }
      repeticiones = 0;
    }
  }
}
