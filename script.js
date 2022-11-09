totalStreak = 0;

let word;
let rn;
let WordlistChoice = 1;
let rnWord;

rnWord = getRandomWord(chooseWordlist(WordlistChoice));

function getRandomWord(wordlist) {
  console.log(wordlist);
  let rn = wordlist[Math.floor(Math.random() * wordlist.length)];
  console.log(rn);
  document.querySelector("#cardWordID").innerHTML = rn.word;
  return rn;
}

function resetPage() {
  WordlistChoice = 0;
  totalStreak = 0;
}

function setWordlistChoiceTo1() {
  WordlistChoice = 1;

  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function setWordlistChoiceTo2() {
  WordlistChoice = 2;

  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function setWordlistChoiceTo3() {
  WordlistChoice = 3;

  chooseWordlist(WordlistChoice);
  return WordlistChoice;
}

function chooseWordlist(WordlistChoice) {
  console.log(WordlistChoice);
  if (WordlistChoice == 1) {
    wordlist = chooseWeekdays();
  } else if (WordlistChoice == 2) {
    wordlist = chooseAnimals();
  } else if (WordlistChoice == 3) {
    wordlist = chooseMonths();
  }
  rnWord = getRandomWord(wordlist);
  return wordlist;
}

let inputValue;

function chooseWeekdays() {
  wordlist = [
    { word: "Måndag", translation: "lundi" },
    { word: "Tisdag", translation: "mardi" },
    { word: "Onsdag", translation: "mercredi" },
    { word: "Torsdag", translation: "jeudi" },
    { word: "Fredag", translation: "vendredi" },
    { word: "Lördag", translation: "samedi" },
    { word: "söndag", translation: "dimanche" },
  ];
  return wordlist;
}

function chooseMonths() {
  wordlist = [
    { word: "Januari", translation: "janvier" },
    { word: "Februari", translation: "février" },
    { word: "Mars", translation: "mars" },
    { word: "April", translation: "avril" },
    { word: "Maj", translation: "mai" },
    { word: "Juni", translation: "juin" },
    { word: "Juli", translation: "juillet" },
    { word: "Augusti", translation: "août" },
    { word: "September", translation: "septembre" },
    { word: "Oktober", translation: "octobre" },
    { word: "November", translation: "novembre" },
    { word: "December", translation: "décembre" },
  ];
  return wordlist;
}

function chooseAnimals() {
  wordlist = [
    { word: "Hund", translation: "chien" },
    { word: "Katt", translation: "chat" },
    { word: "Fisk", translation: "poisson" },
    { word: "Fågel", translation: "oiseau" },
    { word: "Kanin", translation: "lapin" },
    { word: "Ko", translation: "vache" },
    { word: "Häst", translation: "cheval" },
    { word: "Höna", translation: "poule" },
    { word: "Kyckling", translation: "poulet" },
  ];
  return wordlist;
}

const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();

  inputValue = inputForm.querySelector("input").value;

  document.querySelector("#input").value = "";
  checkTranslation(inputValue);
  rnWord = getRandomWord(chooseWordlist());
});

function moveMenuItem1() {
  document.querySelector(".menuitem1").style.transform = "translateY(-20%)";
}

function moveMenuItem1Back() {
  document.querySelector(".menuitem1").style.transform = "translateY(0%)";
}

function moveMenuItem2() {
  document.querySelector(".menuitem2").style.transform = "translateY(-20%)";
}

function moveMenuItem2Back() {
  document.querySelector(".menuitem2").style.transform = "translateY(0%)";
}

function moveMenuItem3() {
  document.querySelector(".menuitem3").style.transform = "translateY(-20%)";
}

function moveMenuItem3Back() {
  document.querySelector(".menuitem3").style.transform = "translateY(0%)";
}

function checkTranslation(inputValue) {
  if (inputValue == rnWord.translation) {
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
  rnWord = getRandomWord(chooseWordlist());
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

function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;

  document.querySelector(".timeCounter").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
