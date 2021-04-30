

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/
// 1. chiedi all'utente il cognome
var cognomeUtente = prompt("Inserisci qui il tuo cognome");
console.log("Il cognome inserito dall'utente è: ");

// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var cognomeLista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

cognomeLista.push(cognomeUtente)

console.log("Lista aggiornata: " + cognomeLista);

// 3. stampa la lista ordinata alfabeticamente
var listaOrdinata = console.log("Lista ordinata alfabeticamente: " + cognomeLista.sort());

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova*/

for (var i = 0; i < cognomeLista.length; i++) {
    console.log(listaOrdinata[i]);
}