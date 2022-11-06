Words = ["Valise", "Ordinateur", "Bateau", "Travailler"];

// Path: script.js
function randomWord() {
  var random = Math.floor(Math.random() * Words.length);
  document.getElementById("cardWord").innerHTML = Words[random];
}
randomWord();
