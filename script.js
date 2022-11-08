totalStreak = 0;

//let Words = [{ word: "Rouge", translation: "röd" }];
let word;
let rn;
let WordlistChoice;

function getRandomWord(wordlist) {
  console.log(wordlist);
  let rn = wordlist[Math.floor(Math.random() * wordlist.length)];

  document.querySelector("#cardWordID").innerHTML = rn.word;
  console.log(rn);
  return rn;
}

function resetPage() {
  WordlistChoice = 0;
  totalStreak = 0;
}

function setWordlistChoiceTo1() {
  WordlistChoice = 0;
  WordlistChoice = 1;
  console.log(WordlistChoice);
  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function setWordlistChoiceTo2() {
  WordlistChoice = 0;
  WordlistChoice = 2;
  console.log(WordlistChoice);
  console.log(wordlist);
  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function setWordlistChoiceTo3() {
  WordlistChoice = 0;
  WordlistChoice = 3;
  console.log(WordlistChoice);
  console.log(wordlist);
  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function chooseWordlist(WordlistChoice) {
  if (WordlistChoice == 1) {
    wordlist = chooseWeekdays();
  } else if (WordlistChoice == 2) {
    wordlist = chooseAnimals();
  } else if (WordlistChoice == 3) {
    wordlist = chooseMonths();
  } else {
    wordlist = chooseWeekdays();
  }

  getRandomWord(wordlist);
  return wordlist;
}

let rnWord = getRandomWord(chooseWordlist());

let inputValue;

function chooseWeekdays() {
  wordlist = [
    { word: "Lundi", translation: "måndag" },
    { word: "Mardi", translation: "tisdag" },
    { word: "Mercredi", translation: "onsdag" },
    { word: "Jeudi", translation: "torsdag" },
    { word: "Vendredi", translation: "fredag" },
    { word: "Samedi", translation: "lördag" },
    { word: "Dimanche", translation: "söndag" },
  ];
  return wordlist;
}

function chooseMonths() {
  wordlist = [
    { word: "Janvier", translation: "januari" },
    { word: "Février", translation: "februari" },
    { word: "Mars", translation: "mars" },
    { word: "Avril", translation: "april" },
    { word: "Mai", translation: "maj" },
    { word: "Juin", translation: "juni" },
    { word: "Juillet", translation: "juli" },
    { word: "Août", translation: "augusti" },
    { word: "Septembre", translation: "september" },
    { word: "Octobre", translation: "oktober" },
    { word: "Novembre", translation: "november" },
    { word: "Décembre", translation: "december" },
  ];
  return wordlist;
}

function chooseAnimals() {
  wordlist = [
    { word: "Chien", translation: "hund" },
    { word: "Chat", translation: "katt" },
    { word: "Poisson", translation: "fisk" },
    { word: "Oiseau", translation: "fågel" },
    { word: "Lapin", translation: "kanin" },
    { word: "Vache", translation: "ko" },
    { word: "Cheval", translation: "häst" },
    { word: "Poule", translation: "höna" },
    { word: "Poulet", translation: "kyckling" },
  ];
  return wordlist;
}

const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", function (e) {
  console.log("test123");
  e.preventDefault();

  inputValue = inputForm.querySelector("input").value;

  document.querySelector("#input").value = "";
  checkTranslation(inputValue);
  rnWord = getRandomWord(chooseWordlist());
});

function checkTranslation(inputValue) {
  if (inputValue == rnWord.translation) {
    console.log(rnWord.translation);
    var audio = new Audio("Assets/ding.mp3");
    audio.play();
    (document.querySelector(".card").style.transform = "translateY(-50%)"),
      (document.querySelector(".card").style.backgroundColor = "#00ff00"),
      //(document.querySelector(".StreakCounter").style.backgroundColor =
      // "#00ff00");
      setTimeout(function () {
        (document.querySelector(".card").style.transform = "translateY(0)"),
          (document.querySelector(".card").style.backgroundColor = "#6c11c8");
        //(document.querySelector(".StreakCounter").style.backgroundColor =
        //"#6c11c8");
      }, 300);
    AddOneToStreak();
  } else {
    console.log(rnWord.translation);
    var audio = new Audio("Assets/wrong.mp3");
    audio.play();
    document.querySelector(".card").style.transform = "translateX(30%)";

    document.querySelector(".card").style.backgroundColor = "#FF0000";
    setTimeout(function () {
      document.querySelector(".card").style.color = "white";
      document.querySelector(".card").style.transform = "translateX(-30%)";
      document.querySelector(".card").style.backgroundColor = "#FF0000";
    }, 150);

    setTimeout(function () {
      document.querySelector(".card").style.transform = "translateX(30%)";
      document.querySelector(".card").style.backgroundColor = "#FF0000";
    }, 300);

    setTimeout(function () {
      document.querySelector(".card").style.transform = "translateX(-30%)";
      document.querySelector(".card").style.backgroundColor = "#FF0000";
    }, 450);

    setTimeout(function () {
      document.querySelector(".card").style.transform = "translateX(0)";
      document.querySelector(".card").style.backgroundColor = "#6c11c8";
    }, 600);
    ResetStreak();
  }
}

const AddOneToStreak = () => {
  totalStreak++;

  document.querySelector("#StreakCounterID").innerHTML = totalStreak;
  if (totalStreak > 5) {
  }
};

function streakOverTen() {
  if (totalStreak > 10) {
    document.querySelector(".StreakCounter").style.backgroundColor = "#00ff00";
  }
}
const ResetStreak = () => {
  totalStreak = 0;
  document.querySelector("#StreakCounterID").innerHTML = totalStreak;
};
