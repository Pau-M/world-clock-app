function updateRomeTime() {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeMoment = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeMoment.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeMoment.format(
    "h:mm:ss [<small>] A[</small>]"
  );
}

setInterval(updateRomeTime, 1000);

function updateHongKongTime() {
  let hongkongElement = document.querySelector("#hong-kong");
  let hongkongDateElement = hongkongElement.querySelector(".date");
  let hongkongTimeElement = hongkongElement.querySelector(".time");
  let hongkongMoment = moment().tz("Asia/Hong_Kong");

  hongkongDateElement.innerHTML = hongkongMoment.format("MMMM Do YYYY");
  hongkongTimeElement.innerHTML = hongkongMoment.format(
    "h:mm:ss [<small>] A[</small>]"
  );
}

setInterval(updateHongKongTime, 1000);

function updatePuertoRicoTime() {
  let puertoricoElement = document.querySelector("#puerto-rico");
  let puertoricoDateElement = puertoricoElement.querySelector(".date");
  let puertoricoTimeElement = puertoricoElement.querySelector(".time");
  let puertoricoMoment = moment().tz("America/Puerto_Rico");

  puertoricoDateElement.innerHTML = puertoricoMoment.format("MMMM Do YYYY");
  puertoricoTimeElement.innerHTML = puertoricoMoment.format(
    "h:mm:ss [<small>] A[</small>]"
  );
}

setInterval(updatePuertoRicoTime, 1000);
