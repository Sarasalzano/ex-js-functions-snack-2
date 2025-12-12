// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
function eseguiEferma(messaggio, intervallo, durata){
const intervalId = setInterval(()=> {
console.log(messaggio);
},intervallo)

setTimeout(()=>{
clearInterval(intervalId)
}, durata)
};
eseguiEferma("ciao", 2000, 1000);
