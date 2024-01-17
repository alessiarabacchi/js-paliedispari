// Chiedi all'utente di inserire una parola
let userWord = prompt("Inserisci una parola:");

// Chiamata alla funzione per verificare se la parola è palindroma
if (isPalindroma(userWord)) {
  alert("La parola è palindroma!");
} else {
  alert("La parola non è palindroma.");
}

// Definizione della funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
  // Confronta la parola originale con la sua versione invertita
  return parola === parola.split("").reverse().join("");
}
