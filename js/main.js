 let nameInput = document.querySelector("#name");
 let kmInput = document.querySelector("#kilometres");
 let ageInput = document.querySelector("#age");
 let btn = document.querySelector("#generates");

 btn.addEventListener("click", function() {
     console.log("L'utente ha scritto: " + nameInput.value);
     console.log("L'utente ha scritto: " + kmInput.value);
     console.log("L'utente ha scritto: " + ageInput.value);
 });