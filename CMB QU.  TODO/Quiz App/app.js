const firebaseConfig = {
    apiKey: "AIzaSyCZ2a-7GTZKZFSdSkKTV71OYSKE46zW25s",
    authDomain: "tyapp-92166.firebaseapp.com",
    databaseURL: "https://tyapp-92166-default-rtdb.firebaseio.com",
    projectId: "tyapp-92166",
    storageBucket: "tyapp-92166.appspot.com",
    messagingSenderId: "1523304666",
    appId: "1:1523304666:web:f0b1bfa050ae1cfdffbde3"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var db =firebase.database
 
 console.log(firebase)
 

const quizData = [
    {
        question: "HTML stands for?",
        options: ["Hyper Text markup language", "Hyper Link markup language", "Hyper Text makeup language"],
        correctAnswer: "Hyper Text markup language"
    },
    {
        question: "CSS stands for?",
        options: ["Cascading Style sheet","Cascading Styling sheet","Cascading super sheet"], 
        correctAnswer: "Cascading Style sheet"
    },
    {
        question: "In how many ways can CSS be written in?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3"
    },
    {
        question: "how many data types in js?",
        options: ["6", "5", "7", "8"],
        correctAnswer: "8"
    }
];

let currentQuestionIndex = 0;
let userScore = 0;
let timer; 0
const timeLimitInSeconds = 10; 

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").innerHTML = currentQuestion.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerHTML = option;
        optionElement.onclick = () => checkAnswer(option, currentQuestion.correctAnswer);
        optionsContainer.appendChild(optionElement);
    });

    document.getElementById("result").innerHTML = "";
    updateTimerDisplay(timeLimitInSeconds);
    startTimer();10
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        userScore++;
    }

        clearTimeout(timer);

}
function startTimer() {
    let timeLeft = timeLimitInSeconds;
    updateTimerDisplay(timeLeft);

    timer = setInterval(function () {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer("", ""); // If time runs out, treat it as if no answer was selected
        }
    }, 1000);
}
function updateTimerDisplay(timeLeft) {
    const timerDisplay = document.getElementById("timer");
    if (timerDisplay) {
        timerDisplay.innerHTML = `Time Left: ${timeLeft} seconds`;
    }
}



function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score is: ${userScore}/${quizData.length}</p>`;
}

// Initial load
loadQuestion();

