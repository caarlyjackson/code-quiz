const startButton = document.querySelector("#start-btn");
var highScoreButton = document.querySelector(".high-score-btn"); // Goes to log of past high scores (with initials and inorder).
var timerCount = document.querySelector(".time");
var scoreButton = document.querySelector(".score");
var resetButton = document.querySelector("#reset-btn");
var gameOverMessage = document.querySelector("#game-over-message");
const myQuestions = document.querySelector("#question");
const answers = document.querySelector("#answer-options");

var score;
var scoreCount;
var timerCount;
var answers = [""];
var correctAnswer = "";

// Questions with Answers and Correct Answer Array
const myQuestions = [
    {
        question: "____",
        answers: {
            a: "<____>",
            b: "<____>",
            c: "<____>",
            d: "<____>"
        },
        correctAnswer: '__'
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
        question: "____",
        answers: {
            a: "<____>",
            b: "<____>",
            c: "<____>",
            d: "<____>"
        },
        correctAnswer: '__'
    },
];

// Init
function init() {
    getScore();
}

// Game begins.
startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Started");
    startButton.classList.add("hide")
    timerCount = 60;

    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}


// If the user gets the correct answer
function correctAnswer() {
    if (correctAnswer === true)
                                            // Add in sound affect and alert to correct answer

// If the user gets the wrong answer
    } else {
    // Lose 10 seconds from timeCount
    timeCount--;
    // Add in obnoxious sound affect and alert to wrong answer

}

}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
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
        resetButton.addEventListener("click", resetGame);
