// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri

const sottrazione = (num1, num2) => num1 - num2;
const divisione = (num1, num2) => num1 / num2;
// console.log(sottrazione(10, 4));

const eseguiOperazione = (num1, num2, operazione) => operazione(num1, num2);

console.log(eseguiOperazione(10, 4, sottrazione));
console.log(eseguiOperazione(10, 4, divisione));
