// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

//funzione che avvia setTimeout
function timerFunction(ms) {
  return setTimeout(() => {
    console.log("Tempo Scaduto.");
  }, ms);
}

//generatore di funzioni
function createTimer(ms) {
  return function avviaFunzione() {
    return timerFunction(ms);
  };
}

console.log(createTimer(3000)());
