const startButton = document.getElementsByClassName("start-btn");
var highScoreButton = document.getElementsByClassName("high-score-btn"); // Goes to log of past high scores (with initials and inorder).
var timerCount = document.getElementsByClassName("time");
var NewScoreEl = document.getElementsByClassName("enter-new-score");
var resetButton = document.getElementById("reset-btn");
const questionEl = document.getElementById("question");
var question = document.getElementsByClassName("question");
const answers = document.getElementById("answer-options");
const answerButtonsEl = document.getElementById("answer-btn");
var scoreCount;
var timerCount = [""];
var correctAnswer = "";

// Questions with Answers and Correct Answer Array
questionEl = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<scripting>", correct: false },
            { text: "<script>", correct: true },
            { text: "<javascript>", correct: false },
            { text: "<js>", correct: false }
        ]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<head>", correct: false },
            { text: "<h6>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<header>", correct: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function myFunction()", correct: true },
            { text: "function = myFunction()", correct: false },
            { text: "function:myFunction()", correct: false }
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            { text: "if i = 6", correct: false },
            { text: "if i == 6 then", correct: false },
            { text: "if i = 6 then", correct: false },
            { text: "if (i == 6)", correct: true }
        ]
    }

];

// Init
function init() {
    getScore()
}

// Game begins.
startButton.onclick = beginQuiz;


startButton.addEventListener("click", startGame === true); {
    function startGame() {
        console.log("Started");
        startButton.classList.add("hide")
        timerCount = 60;
        setNextQuestion();
        // Start timer
        // Hide the start div
        startGameWindow.setAttribute("class", "hide")
        // Show first question

        // Prevents start button from being clicked when round is in progress
        startButton.disabled = true;
        renderBlanks()
        startTimer()
    }
}
startGame();

function setNextQuestion() {
    resetState()
    showQuestion(questionEl)
}

// Question and Answer
function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.array.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        // If the user gets the correct answer
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    });
}

function selectAnswer() {

}


// Add in sound affect and alert to correct answer
// } else { // If the user gets the wrong answer
// // Lose 10 seconds from timeCount
// timeCount--;
// // Add in obnoxious sound affect and alert to wrong answer
// }

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval()
    timerCount = 60;
    timeEl.textContent = secondsLeft;
}


// Go to Score and Initial
function timeCount() {
    if (timeCount === 0) {
        NewScoreEl.addEventListener("click", startGame === true); {
            function startGame() {
                console.log("Started");
                startButton.classList.add("hide")
                timerCount = 60;
                setNextQuestion();

                // function timeCount.addEventListener(Event) {
                //     if (timeCount === 0) {
                function myFunction() { // Declare a function
                    NewScoreEl.classList.add("hide")
                }
                myFunction(); // Call the function
                return;
            }
        };

        // FINAL SCORE COUNT AND HIGH SCORE
        // Local Storage Of Previous Scores
        // User Info Variable
        var Player = {
            playerInitial: playerInitial.value,
            scoreCount: timeCount.value,
        };
        // var newScore = document.getElementsByClassName("new-score");
        var scoreCount = localStorage.getItem("count");
        console.log(scoreCount);
        scoreCount.textContent = "Your score is " + timeCount;




        // High Score
        highScore.textContent = playerInitial + " - " + scoreCount;

        // View all High Scores page
        function highScoreButton() {
            highScoreButton.addEventListener(click,)

            // Hide
            highScoreButton.classList.add("hide")
        }

        // Reset button
        var resetButton = document.querySelector(".reset-button");
        function resetGame() {
            // Resets score and loss counts
            scoreCount = 0;
            // Renders win and loss counts and sets them into client storage
            setWins()
            setLosses()
        };

        // Attaches event listener to button
        resetButton.addEventListener("click", resetGame === true)