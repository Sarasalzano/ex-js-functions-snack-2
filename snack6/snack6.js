// Crea un contatore automatico con setInterval
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
let contatore = 0;

function incrementaContatore(intervallo) {
  let interval;
  interval = setInterval(() => {
    contatore++;
    console.log(contatore);
  }, intervallo);
}

function creaContatoreAutomatico(intervallo) {
    return function funzioneAvvio(){
        return incrementaContatore(intervallo)
    }
}
  
console.log(creaContatoreAutomatico(2000)());

