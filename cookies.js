let today;
let tomorrow;
let tomorrowComparable;

function setNewCookieDate() {
  today = new Date();
  today.setDate(today.getDate() + 1);

  localStorage.setItem("chipDay", today);
}

function setLastPlayDate() {
  if (localStorage.getItem("chipDay") == null) {
    today = new Date();
    today.setDate(today.getDate() + 1);

    localStorage.setItem("chipDay", today);
  } else {
    today = new Date();
    tomorrow = localStorage.getItem("chipDay");
    tomorrowComparable = new Date(tomorrow);
    if (today.getDate() >= tomorrowComparable.getDate()) {
      document.getElementById("get-more-coins").disabled = false;
    } else {
      document.getElementById("get-more-coins").disabled = true;
      document.getElementById(
        "get-more-coins"
      ).innerHTML = `Gana monedas aquí, regresa el: ${new Date(
        tomorrow
      ).getDate()}/${new Date(tomorrow).getMonth()}/${new Date(
        tomorrow
      ).getFullYear()}`;
    }
  }
}
