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
// chiedo l'età del passeggero
// dichiaro i dati conosciuti


// # VALIDAZIONE DATI

// valido il dato sul numero di km selezionato dall'utente in questo modo:

// SE
    // il valore NON E' NaN
    // il valore è MAGGIORE DI ZERO
    // ALTRIMENTI --> ALERT

// valido l'età del passeggero in questo modo:
    // il valore NON E' NaN
    // il valore è MAGGIORE DI ZERO
    // il valore è COMPRESO TRA 1 e 120
    // ALTRIMENTI --> ALERT


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
