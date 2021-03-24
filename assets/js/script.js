const startButton = document.getElementById("startBtn");
const beginQuizWindow = document.getElementById("begin-quiz-window");
const questionHolder = document.getElementById("question");
const gameWindow = document.getElementById("game-window");
const scoreEntryWindow = document.getElementById("score-entry-window");
const highScoreButton = document.getElementById("high-score-btn");
const questionEl = document.getElementById("question");
var timerElement = document.getElementById("time");
var timerCount = 10;
var question;
var answer;
var setQuestion = (question);
var scoreCount;

//------------------------------------
//QUESTIONS
// list of all questions, choices, and answers (could use separate js file)
var questions = [
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

//------------------------------------
//GAME LOGIC
//EVENT LISTENERS
//start event listenter
startButton.onclick = beginQuiz;
function beginQuiz() {
    console.log("Started");
    // Hide start screen
    beginQuizWindow.setAttribute("class", "hide");
    gameWindow.setAttribute("class", "show");
    // show starting time
    // startTime();
    let time = setInterval(startTime, 1000);
    console.log("This is our count", timerCount);
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(questionEl);
}

function showQuestion() {
    questionEl.textContent = questions[0].question;
}

function startTime() {
    // timer = setInterval;
    // timerCount = 60;
    console.log(timerCount);
    timerCount--;
    timerElement.textContent = "Time: " + timerCount;

    // Time runs out
    if (timerCount <= 0) {
        console.log("We are in the time log if statement");
        // textContent.scoreCount;
        clearTimer();
        // scoreEntryWindow.setAttribute("class", "show");
    }
}

function clearTimer() {
    clearInterval(startTime);
}

//submit score listener



//EVENT LISTENERS
//start event listenter
//submit score listener
function endScore() {
    timerCount.nodeValue() = scoreCount.nodeValue();

}


// variables to keep track of quiz state
// variables to reference DOM elements
// import sound effects (optional)

//STARTING QUIZ
// hide start screen
// un-hide questions section
// start timer (see TIME)
// show starting time

//GETTING QUESTIONS
// get current question object from array
// update title with current question
// clear out any old question choices
// loop over choices
// create new button for each choice
// attach click event listener to each choice
// display on the page


//CLICKING ON QUESTIONS
// check if user guessed wrong
// penalize time
// display new time on page
// play "wrong" sound effect
// play "right" sound effect
// flash right/wrong feedback on page for half a second
// move to next question
// check if we've run out of questions


//ENDING QUIZ - either when question ends or time endss
// stop timer
// show end screen
// show final score
// hide questions section


// TIME
// update time
// check if user ran out of time


// SAVING SCORE
// get value of input box
var score = localStorage.getItem("scoreCount");

	// make sure value wasn't empty
	// get saved scores from localstorage, or if not any, set to empty array
	// format new score object for current user
	// save to localstorage
	// redirect to next page
	// "13" represents the enter key
	// user clicks button to submit initials
	// user clicks button to start quiz


//------------------------------------
//HIGHSCORES LOGIC
//------------------------------------


//HIGH SCORE LOGIC (separate script for separate html page)
	// either get scores from localstorage or set to empty array
	// sort highscores by score property in descending order
	// create li tag for each high score
	// display on page
	// run function when page loads
