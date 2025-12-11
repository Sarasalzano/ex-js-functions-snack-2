// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

//funzione dichiarativa
function somma(num1, num2) {
  let result = num1 + num2;
  return result;
}

//funzione anonima
const sommaAnonima = function(num1, num2) {
let result = num1 + num2;
return result;
};

//funzione con arrow function
const sommaArrow = (num1, num2) => {
  let result = num1 + num2;
  return result
};
sommaArrow(5, 5);
