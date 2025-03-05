console.log('Andrea');
// Descrizione:
//Scrivere un programma che chieda all’utente:
//- Il numero di chilometri da percorrere
//    - Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//- il prezzo del biglietto è definito in base ai km(0.21 € al km)
//    - va applicato uno sconto del 20 % per i minorenni
//        - va applicato uno sconto del 40 % per gli over 65.
//MILESTONE 1:
//Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra.La risposta finale(o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
//Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const inputKm = document.getElementById("input-km");
const inputAge = document.getElementById("input-age");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', function (){
    const km = inputKm.value;
    console.log('Quanti chilometri devi percorrere?' + ' ' + km);
    const age = inputAge.value;
    console.log('Quanti anni hai?' + ' ' + age);
    const price = 0.21;
    let finalPrice = price * km;
    if (age < 18) {
        finalPrice = finalPrice - (finalPrice * 20 / 100);
    } else if (age > 65) {
        finalPrice = finalPrice - (finalPrice * 40 / 100);
    }
    console.log(`Il prezzo finale del tuo biglietto è ${finalPrice.toFixed(2)}€`);
    const result = finalPrice.toFixed(2);
    document.getElementById("result").innerHTML = `Il prezzo finale del tuo biglietto è ${result}€`;
})

// const result = document.getElementById("result");

// result.innerHTML = `Il prezzo finale del tuo biglietto è ${finalPrice.toFixed(2)}€`;


const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
})