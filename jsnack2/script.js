// Array dei nomi degli invitati
const guestList = ["Andrea", "Manuel", "Luca", "Gabriele", "Martino", "Giorgio", "Jack", "Gatsby"];

// Chiedere il nome all'utente
const userName = prompt("Qual è il tuo nome?");

// Variabile per tracciare se l'utente è invitato
let isInvited = false;

// Controllare manualmente se il nome è nell'array
for (let i = 0; i < guestList.length; i++) {
  if (guestList[i].toLowerCase() === userName.toLowerCase()) {
    isInvited = true;
    break;
  }
}

// Comunicare all'utente se può partecipare
if (isInvited) {
  alert(`Benvenuto alla festa, ${userName}!`);
} else {
  alert(`Mi dispiace, ${userName}, non sei invitato alla festa.`);
}