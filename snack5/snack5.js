// Crea una funzione stampaOgniSecondo con setInterval.
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
let intervalId;

function stampaOgniSecondo(messaggio) {
   intervalId = setInterval(() => {
    console.log(messaggio);
  }, 1000);
}

function stopMessage() {
  clearInterval(intervalId);
  intervalId = null;
}
