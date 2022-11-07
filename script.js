totalStreak = 0;

//let Words = [{ word: "Rouge", translation: "röd" }];
let word;
let rn;
let WordlistChoice;

function getRandomWord(wordlist) {
  console.log(wordlist);
  let rn = wordlist[Math.floor(Math.random() * wordlist.length)];
  console.log(rn.word);
  document.querySelector("#cardWordID").innerHTML = rn.word;
  return rn;
}

function setWordlistChoiceTo1() {
  WordlistChoice = 1;
  console.log(WordlistChoice);
  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function setWordlistChoiceTo2() {
  WordlistChoice = 2;
  console.log(WordlistChoice);
  console.log(wordlist);
  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function chooseWordlist(WordlistChoice) {
  if ((WordlistChoice = 1)) {
    wordlist = chooseWeekdays();
  } else if ((WordlistChoice = 2)) {
    wordlist = chooseAnimals();
  }
  getRandomWord(wordlist);
  return wordlist;
}

let rnWord = getRandomWord(chooseWordlist());

console.log(rnWord);
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

function chooseAnimals() {
  wordlist = [
    { word: "Chien", translation: "hund" },
    { word: "Chat", translation: "katt" },
    { word: "Poisson", translation: "fisk" },
    { word: "Oiseau", translation: "fågel" },
    { word: "Lapin", translation: "kanin" },
    { word: "Vache", translation: "ko" },
    { word: "Cheval", translation: "häst" },
  ];
  return wordlist;
}

const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", function (e) {
  console.log("test123");
  e.preventDefault();

  inputValue = inputForm.querySelector("input").value;
  console.log(inputValue);

  console.log(inputValue);
  document.querySelector("#input").value = "";
  checkTranslation(inputValue);
  rnWord = getRandomWord(chooseWeekdays());
});

function checkTranslation(inputValue) {
  if (inputValue == rnWord.translation) {
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
    document.querySelector(".card").style.transform = "translateY(50%)";
    document.querySelector(".card").style.backgroundColor = "#FF0000";
    setTimeout(function () {
      document.querySelector(".card").style.color = "white";
      document.querySelector(".card").style.transform = "translateY(0)";
      document.querySelector(".card").style.backgroundColor = "#6c11c8";
    }, 300);

    ResetStreak();
  }
}

const AddOneToStreak = () => {
  totalStreak++;

  document.querySelector("#StreakCounterID").innerHTML = totalStreak;
  if (totalStreak > 5) {
  }
};

const ResetStreak = () => {
  totalStreak = 0;
  document.querySelector("#StreakCounterID").innerHTML = totalStreak;
};
