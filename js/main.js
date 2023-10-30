const rateKm = 0.21;

let nameInput = document.querySelector("#name");
let kmInput = document.querySelector("#kilometres");
let ageInput = document.querySelector("#age");
let buttonInput = document.querySelector("#generates");
let offerInput = document.querySelector("#offer");
let carriageInput = document.querySelector("#carriage");
let codexInput = document.querySelector("#codex");
let ticketInput = document.querySelector("#ticket");

buttonInput.addEventListener("click" , function() {

    let randomCarriage = parseInt((Math.random() * 20) + 1);
    let codex = parseInt((Math.random() * 10000));

    if (ageInput.value=="senior") {
        document.getElementById("passengerName").innerHTML = nameInput.value;
        offerInput.innerHTML = "Hai diritto ad uno sconto Over-65";
        carriageInput.innerHTML = randomCarriage;
        codexInput.innerHTML = codex;
        ticketInput.innerHTML = ((Number(kmInput.value) * rateKm) * 0.6).toFixed(2) + " €";
    } else if (ageInput.value=="underage") {
        document.getElementById("passengerName").innerHTML = nameInput.value;
        offerInput.innerHTML = "Hai diritto ad uno sconto Under-18";
        carriageInput.innerHTML = randomCarriage;
        codexInput.innerHTML = codex;
        ticketInput.innerHTML = ((Number(kmInput.value) * rateKm) * 0.8).toFixed(2) + " €";
    } else {
        document.getElementById("passengerName").innerHTML = nameInput.value;
        offerInput.innerHTML = "Biglietto normale";
        carriageInput.innerHTML = randomCarriage;
        codexInput.innerHTML = codex;
        ticketInput.innerHTML = ((Number(kmInput.value) * rateKm)).toFixed(2) + " €";
    }
});


















// btn.addEventListener("click", function() {
//      console.log("L'utente ha scritto: " + nameInput.value);
//      console.log("L'utente ha scritto: " + kmInput.value);
//      console.log("L'utente ha scritto: " + ageInput.value);

//      if (ageInput.value=="senior") {
        
//         console.log("Sei over65");
//      } else if (ageInput.value=="underage") {
//         console.log("Sei minorenne");
//      } else {
//         console.log("Sei adulto");
//      }
// });