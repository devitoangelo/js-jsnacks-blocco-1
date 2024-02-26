//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let somma = 0
let numero = (prompt("inserisci un numeri di 4 cifre"))

for (let i = 0; i < numero.length; i++) {
    let element = numero[i];
    element = Number(element)
    somma +=element

    
}

console.log(somma);