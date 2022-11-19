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

function callNewCard() {
  let obj = document.querySelector(".card");
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
    { word: "Monday", translation: "lundi" },
    { word: "Tuesday", translation: "mardi" },
    { word: "Wednesday", translation: "mercredi" },
    { word: "Thursday", translation: "jeudi" },
    { word: "Friday", translation: "vendredi" },
    { word: "Saturday", translation: "samedi" },
    { word: "Sunday", translation: "dimanche" },
  ];
  return wordlist;
}

function chooseMonths() {
  wordlist = [
    { word: "January", translation: "janvier" },
    { word: "February", translation: "février" },
    { word: "Mars", translation: "mars" },
    { word: "April", translation: "avril" },
    { word: "May", translation: "mai" },
    { word: "June", translation: "juin" },
    { word: "July", translation: "juillet" },
    { word: "August", translation: "août" },
    { word: "September", translation: "septembre" },
    { word: "October", translation: "octobre" },
    { word: "November", translation: "novembre" },
    { word: "December", translation: "décembre" },
  ];
  return wordlist;
}

function chooseAnimals() {
  wordlist = [
    { word: "Dog", translation: "chien" },
    { word: "Cat", translation: "chat" },
    { word: "Fish", translation: "poisson" },
    { word: "Bird", translation: "oiseau" },
    { word: "Rabbit", translation: "lapin" },
    { word: "Cow", translation: "vache" },
    { word: "Horse", translation: "cheval" },
    { word: "Hen", translation: "poule" },
    { word: "Chicken", translation: "poulet" },
    { word: "Pig", translation: "cochon" },
    { word: "Sheep", translation: "mouton" },
    { word: "Goat", translation: "chèvre" },
    { word: "Lion", translation: "lion" },
    { word: "Tiger", translation: "tigre" },
    { word: "Elephant", translation: "éléphant" },
    { word: "Monkey", translation: "singe" },
    { word: "Bear", translation: "ours" },
    { word: "Deer", translation: "cerf" },
    { word: "Wolf", translation: "loup" },
    { word: "Fox", translation: "renard" },
    { word: "Raccoon", translation: "raton laveur" },
    { word: "Rat", translation: "rat" },
    { word: "Mouse", translation: "souris" },
    { word: "Snake", translation: "serpent" },
    { word: "Frog", translation: "grenouille" },
    { word: "Turtle", translation: "tortue" },
    { word: "Duck", translation: "canard" },
    { word: "Penguin", translation: "pingouin" },
    { word: "Owl", translation: "chouette" },
    { word: "Eagle", translation: "aigle" },
    { word: "Hawk", translation: "faucon" },
    { word: "Seagull", translation: "goéland" },
    { word: "Dolphin", translation: "dauphin" },
    { word: "Whale", translation: "baleine" },
    { word: "Shark", translation: "requin" },
    { word: "Octopus", translation: "pieuvre" },
    { word: "Crab", translation: "crabe" },
    { word: "Shrimp", translation: "crevette" },
    { word: "Lobster", translation: "homard" },
    { word: "Butterfly", translation: "papillon" },
    { word: "Spider", translation: "araignée" },
    { word: "Ant", translation: "fourmi" },
    { word: "Bee", translation: "abeille" },
    { word: "Ladybug", translation: "coccinelle" },
  ];
  return wordlist;
}

function chooseRandomWords() {
  //wordlist =
}
const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();

  inputValue = inputForm.querySelector("input").value;

  document.querySelector("#input").value = "";
  checkTranslation(inputValue);
  rnWord = getRandomWord(chooseWordlist());
});

function toggleLightDarkmode() {
  let body = document.body;
  let topBar = document.querySelector(".topBar");
  body.classList.toggle("darkmode");
  topBar.classList.toggle("darkmode");
}

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
    (document.querySelector(".card").style.transform = "translateX(150%)"),
      (document.querySelector(".card").style.backgroundColor = "#00ff00"),
      (document.querySelector(".wrongWordTranslation").style.color = "#111111"),
      setTimeout(function () {
        //(document.querySelector(".card").style.transform = "translateY(0)"),
        //document.querySelector(".card").style.backgroundColor = "#6c11c8";
      }, 300);
    AddOneToStreak();
  } else {
    var audio = new Audio("Assets/wrong.mp3");
    audio.play();
    //document.querySelector(".card").style.transform = "translateX(30%)";
    document.querySelector(".card").style.transform = "translateX(-150%)";
    document.querySelector(".wrongWordTranslation").innerHTML =
      rnWord.translation;

    document.querySelector(".card").style.backgroundColor = "#FF0000";
    setTimeout(function () {
      document.querySelector(".card").style.color = "white";
      //document.querySelector(".card").style.transform = "translateX(-30%)";
      //document.querySelector(".card").style.borderColor = "#FF0000";

      document.querySelector(".wrongWordTranslation").style.color = "red";
    }, 150);

    setTimeout(function () {
      //document.querySelector(".card").style.transform = "translateX(30%)";
      //document.querySelector(".card").style.backgroundColor = "#FF0000";
    }, 300);

    setTimeout(function () {
      //document.querySelector(".card").style.transform = "translateX(-30%)";
      //document.querySelector(".card").style.backgroundColor = "#FF0000";
    }, 450);

    setTimeout(function () {
      //document.querySelector(".card").style.transform = "translateX(0)";
      //document.querySelector(".card").style.backgroundColor = "#6c11c8";
      document.querySelector(".card").style.borderColor = "#FFFFFF";
    }, 600);

    setTimeout(function () {
      document.querySelector(".wrongWordTranslation").innerHTML = "";
    }, 3200);
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
