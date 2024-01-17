// Funzione per generare un numero random da 1 a 5
function generaNumeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

// Funzione per verificare se un numero è pari
function isPari(numero) {
  return numero % 2 === 0;
}

// Chiedi all'utente di scegliere pari o dispari
let userChoise = prompt("Scegli pari o dispari:");

// Chiedi all'utente di inserire un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5:"));

// Genera un numero random per il computer
let computerNumber = generaNumeroRandom();

// Calcola la somma dei due numeri
let somma = userNumber + computerNumber;

// Determina se la somma è pari o dispari
let result = isPari(somma) ? "pari" : "dispari";

// Dichiarazione del vincitore
if (userChoise.toLowerCase() === result) {
  alert("Complimenti, hai vinto!");
} else {
  alert("Mi dispiace, hai perso. Il computer ha scelto " + result + ".");
}

// Output dei risultati
console.log("Scelta utente: " + userChoise);
console.log("Numero utente: " + userNumber);
console.log("Numero computer: " + computerNumber);
console.log("Somma: " + somma);
console.log("Risultato: " + result);
