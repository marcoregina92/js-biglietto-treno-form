const ratekm = 0.21

let nameInput = document.querySelector("#name");
let kmInput = document.querySelector("#kilometres");
let ageInput = document.querySelector("age");
let buttonInput = document.querySelector("generates");
let offerInput = document.querySelector("offer");
let carriageInput = document.querySelector("carriage");
let codexInpunt = document.querySelector("codex");
let ticketInpunt = document.querySelector("ticket");

buttonInput.addEventListener("click" , function() {

    if (ageInput.value=="senior") {
        document.getElementById("passengerName").innerHTML = nameInput.value;
        offerInput.innerHTML = "Hai diritto ad uno sconto Over-65";
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