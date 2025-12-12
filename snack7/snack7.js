// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
let interval;

function intervallo(avvio, messaggio) {
  interval = setInterval(() => {
    console.log(messaggio);
  }, avvio);
}

function fermaIntervallo(stop) {
  setTimeout(() => {
    clearInterval(interval);
    interval = null;
  }, stop);
}

function eseguiEferma(messaggio, avvio, stop) {
  intervallo(avvio, messaggio);
  fermaIntervallo(stop);
}

console.log(eseguiEferma("ciao", 3000, 1000));
