const parola1 = (prompt("Inserisci una parola"))
const parola2 = (prompt("Inserisci una seconda parola"))


if (parola1.length > parola2.length) {
    console.log("la prima parola è piu lunga");

} else if(parola1.length < parola2.length) {
    console.log("la seconda parola è piu lunga");


} else {
    console.log("le parole sono uguali");
}
