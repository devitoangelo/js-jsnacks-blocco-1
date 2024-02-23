console.log("ciao");

let number1 = prompt("inserisci un nmero")
let number2 = prompt("inserisci un secondo numero")

console.log(number1, number2);

number1 = parseInt(number1);
number1 = parseInt(number2);


if (number1 > number2) {
    console.log("il nuero maggiore è il primo");
}else if (number1 < number2) {

    console.log("il numero maggiore è il secondo");

} else {
    console.log("i numeri sono uguali");
}
