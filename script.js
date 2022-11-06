totalStreak = 0;

let Words = [];
let word;
let rn;

const getRandomWord = () => {
  let rn = Words[Math.floor(Math.random() * Words.length)];
  console.log(rn.word);
  document.getElementById("cardWordID").innerHTML = rn.word;
  return rn;
};

let rnWord = getRandomWord();

console.log(rnWord);
let inputValue;

const weekdaySelect = document.querySelector("#weekDaysID");
weekdaySelect.addEventListener("click", function () {
  chooseWeekdays();
});

function chooseWeekdays() {
  Words = [
    { word: "Lundi", translation: "måndag" },
    { word: "Mardi", translation: "tisdag" },
    { word: "Mercredi", translation: "onsdag" },
    { word: "Jeudi", translation: "torsdag" },
    { word: "Vendredi", translation: "fredag" },
    { word: "Samedi", translation: "lördag" },
    { word: "Dimanche", translation: "söndag" },
  ];
  getRandomWord();
}

const inputForm = document.querySelector("#inputForm");
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("test");
  inputValue = inputForm.querySelector("input").value;
  console.log(inputValue);

  console.log(inputValue);
  document.querySelector("#input").value = "";
  checkTranslation(inputValue);
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
