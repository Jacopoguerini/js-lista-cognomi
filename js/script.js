// 1. chiedi all'utente il cognome
var cognomeUtente = prompt("Inserisci qui il tuo cognome")
console.log("Il cognome inserito dall'utente è: " + cognomeUtente);
var cognomeMaiusc= cognomeUtente.substring(0, 1).toUpperCase() + cognomeUtente.substring(1);
console.log("Il cognome inserito dall'utente (con la prima lettera maiuscola) è: " + cognomeMaiusc);

// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var cognomeLista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

cognomeLista.push(cognomeMaiusc)

console.log("Lista aggiornata: " + cognomeLista);

// 3. stampa la lista ordinata alfabeticamente
var listaOrdinata = console.log("Lista ordinata alfabeticamente: " + cognomeLista.sort());

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/

for (i = 0; i < cognomeLista.length; i++) {
    console.log((i + 1) + ". " + cognomeLista[i]);
}