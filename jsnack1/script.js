// Chiedere all'utente di inserire il primo numero
const input1 = prompt("Inserisci il primo numero:");
const number1 = parseFloat(input1);

// Chiedere all'utente di inserire il secondo numero
const input2 = prompt("Inserisci il secondo numero:");
const number2 = parseFloat(input2);

// Verificare se i valori inseriti sono validi
if (isNaN(number1) || isNaN(number2)) {
  alert("Per favore, inserisci solo numeri validi.");
} else {
  // Determinare e mostrare il numero maggiore
  if (number1 > number2) {
    alert(`Il numero maggiore è: ${number1}`);
  } else if (number1 < number2) {
    alert(`Il numero maggiore è: ${number2}`);
  } else {
    alert("I numeri sono uguali.");
  }
}