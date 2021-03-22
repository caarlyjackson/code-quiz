const startButton = document.getElementById("start-btn");
var highScoreButton = document.getElementsByClassName("high-score-btn"); // Goes to log of past high scores (with initials and inorder).
var timerCount = document.getElementsByClassName("time");
var scoreButton = document.getElementsByClassName("score");
var resetButton = document.getElementById("reset-btn");
var gameOverMessage = document.getElementById("game-over-message");
// const myQuestions = document.getElementById("question");
const answers = document.getElementById("answer-options");
const answeButtonsEl = document.getElementById("answer-btn");

var score;
var scoreCount;
var timerCount = [""];
var correctAnswer = "";

// Questions with Answers and Correct Answer Array
const myQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<scripting>",
            b: "<script>",
            c: "<javascript>",
            d: "<js>"
        },
        correctAnswer: 'b'
    },
    {
        question: "Which of the following is the largest HTML heading?",
        answers: {
            a: "<head>",
            b: "<h6>",
            c: "<h1>",
            d: "<header>"
        },
        correctAnswer: 'c'
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function myFunction()",
            b: "function = myFunction()",
            c: "function:myFunction()"
        },
        correctAnswer: 'a'
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: "if i = 6",
            b: "if i == 6 then",
            c: "if i = 6 then",
            d: "if (i == 6)"
        },
        correctAnswer: 'd'
    },
];

// Init
function init() {
    getScore();
}

// Game begins.
startButton.addEventListener("click", startGame == true); {
    function startGame() {
        console.log("Started");
        startButton.classList.add("hide")
        timerCount = 60;

        // Prevents start button from being clicked when round is in progress
        startButton.disabled = true;
        renderBlanks()
        startTimer()
    }
}

startGame();

function showQuestion(question) {

}


// // If the user gets the correct answer
// function correctAnswer() {
//     if (correctAnswer === true)
//                                             // Add in sound affect and alert to correct answer

// // If the user gets the wrong answer
//     } else {
//     // Lose 10 seconds from timeCount
//     timeCount--;
//     // Add in obnoxious sound affect and alert to wrong answer

// }

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval()
    timerCount = 60;
    timeEl.textContent = secondsLeft;
}

// If timeCount === 0
document.addEventListener(function (event) {
    if (timeCount === 0) {
        function myFunction() { // Declare a function
            document.getElementById("gameOverMessage").innerHTML = "Game Over!";
        }
        myFunction(); // Call the function
        return;
    }

    // Local Storage Of Previous Scores
    var scoreCount = localStorage.getItem("count");
    console.log(scoreCount);



    // Attach event listener to start button to call startGame function on click
    startButton.addEventListener("click", startGame);

    // Calls init() so that it fires when page opened
    init();

    // Reset button
    var resetButton = document.querySelector(".reset-button");
    function resetGame() {
        // Resets score and loss counts
        scoreCount = 0;
        // Renders win and loss counts and sets them into client storage
        setWins()
        setLosses()
    }

    // Attaches event listener to button
    resetButton.addEventListener("click", resetGame)
});