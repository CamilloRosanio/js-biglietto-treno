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
| # PSEUDO-CODICE
**********************************************************/

// # RACCOLTA DATI

// chiedo all'utente il numero di km che vuole percorrere
const kmTratta = parseInt(prompt('Indica il numero di Km della tua tratta'));
console.log(`Km dichiarati: ` + kmTratta);

// chiedo l'età del passeggero
const userAge = parseInt(prompt(`Dichiara l'età del passeggero`));
console.log(`Età passeggero dichiarata: ` + userAge);

// dichiaro i dati conosciuti
const tariffaTratta = 0.21;
console.log(`Tariffa base: ${tariffaTratta}€ / Km`);


// # VALIDAZIONE DATI

// SE
if (
    // il valore dei Km NON E' NaN AND il valore è MAGGIORE DI ZERO
    ((kmTratta != isNaN) && (kmTratta > 0)) &&
    // AND
    // il valore dell'età NON E' NaN AND MAGGIORE DI ZERO AND numero intero AND COMPRESO TRA 1 e 120
    ((userAge != isNaN) && (userAge > 0) && (Number.isInteger(userAge)) && (1 <= userAge <= 120))
 ) 
 {
    console.log('Tutto regolare');
} else {
    alert('Valori inseriti non validi')
}



// # ELABORAZIONE DATI

// SE
    // età del passeggero MINORE DI 18 --> applico lo sconto del 20%
    // Preparo messaggio per aventi diritto allo sconto in questione
    // ALTRIMENTI SE età del passeggero COMPRESA TRA 19 e 65 --> applico la tariffa piena
    // Preparo messaggio che segnala l'applicazione del prezzo pieno
    // ALTRIMENTI SE età del passeggero MAGGIORE DI 65 --> applico lo sconto del 40%
    // Preparo messaggio per aventi diritto allo sconto in questione


// # OUTPUT

// Preparo messaggio che riporta la tariffa finale che sarà applicata
