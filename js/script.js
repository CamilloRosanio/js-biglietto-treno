console.log('DEFAULT CONNECTION TEST')


/**********************************************************
| # TRACCIA ESERCIZIO
**********************************************************/

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/


/**********************************************************
| # ESECUZIONE
**********************************************************/

/*   CORREZIONE TUTOR (MICHELE - 15 Ottobre 2024)
Ciao Camillo, sono Michele. Ho guardato il tuo esercizio e funziona bene, ma ci sono alcune cose che puoi migliorare. Ad esempio, nella validazione dell'età e dei chilometri c'è un errore: "userAge != isNaN" e "kmTratta != isNaN" non funzionano come ti aspetti, dovresti usare "!isNaN(userAge)" e "!isNaN(kmTratta)" per verificare correttamente. Inoltre, nell'"else if" per l'età tra 18 e 65, la condizione "(18 <= userAge <= 65)" non è corretta in JavaScript, dovresti usare "userAge >= 18 && userAge <= 65". */



// # RACCOLTA DATI

// chiedo all'utente il numero di km che vuole percorrere
const kmTratta = parseInt(prompt('Indica il numero di Km della tua tratta'));
console.log(`Km dichiarati: ` + kmTratta);

// Criterio di validazione Km.
const isValid_kmTratta = !isNaN(kmTratta) && (kmTratta > 0);

// valido l'input dei Km.
if (isValid_kmTratta) {
    console.log('Valore Km valido.')
} else {
    alert('Valore Km inserito errato.')
}


// chiedo l'età del passeggero
const userAge = parseInt(prompt(`Dichiara l'età del passeggero`));
console.log(`Età passeggero dichiarata: ` + userAge);

// Criterio di validazione Età .
const isValid_userAge = !isNaN(userAge) && (userAge > 0) && (userAge >= 0);

// valido l'input dell'età.
if (isValid_userAge) {
    console.log('Valore Età valido.')
} else {
    alert('Valore Età inserito errato.')
}

// dichiaro il dato conosciuto della Tariffa/Km
let tariffaTratta = 0.21;
console.log(`Tariffa Tratta: ${tariffaTratta}€ / Km`);



// # ELABORAZIONE DATI

let tariffaFinale;

// SE l'età del passeggero è COMPRESA TRA 1 e 17
if (userAge < 18) {
    // applico lo sconto del 20%
    tariffaFinale = (tariffaTratta * kmTratta) - ((tariffaTratta * kmTratta) / 100) * 20;
}
// ALTRIMENTI SE età del passeggero COMPRESA TRA 19 e 65
else if ((userAge >= 18 && userAge <= 65)) {
    // applico la tariffa piena
    tariffaFinale = (tariffaTratta * kmTratta);
}
// ALTRIMENTI SE età del passeggero è MAGGIORE DI 65
else if (userAge > 65) {
    //applico lo sconto del 40%
    tariffaFinale = (tariffaTratta * kmTratta) - ((tariffaTratta * kmTratta) / 100) * 40;
}


// a questo punto elaboro la tariffa finale riducendola a massimo 2 cifre decimali e la pubblico in un Alert.

console.log(`Tariffa finale arrotondata a 2 decimali: ${parseFloat(tariffaFinale).toFixed(2)}€`);
console.log(`Tariffa finale NON arrotondata: ${tariffaFinale} €`);

alert(`Il tuo biglietto costerà in tutto ${parseFloat(tariffaFinale).toFixed(2)}€.`)
