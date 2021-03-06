const startButton = document.getElementById("startBtn");
const beginQuizWindow = document.getElementById("begin-quiz-window");
const questionHolder = document.getElementById("question");
const gameWindow = document.getElementById("game-window");
const scoreEntryWindow = document.getElementById("score-entry-window");
const highScoreButton = document.getElementById("high-score-btn");
const questionEl = document.getElementById("question");
const answersEl = document.getElementsByClassName("answer-btn");
const submitButton = document.getElementById("submit-btn");
var timerElement = document.getElementsByClassName("time");
var timerCount = 60;
var question;
var setQuestion = question;
var scoreCount;

var intervalReference;

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
// user clicks button to start quiz
function beginQuiz() {
    console.log("Started");
    // hide start screen
    beginQuizWindow.setAttribute("class", "hide");
    // un-hide questions section
    gameWindow.setAttribute("class", "show");
    // show starting time // start timer (see TIME)
    intervalReference = setInterval(startCountdown, 1000);
    // intervalReference.textContent = "Time: " + timerCount;
    console.log("This is our count", timerCount);
    // setNextQuestion();
    showAnswers();

    if (timerCount <= 0) {
        return beginQuiz;
    }
}

//GETTING QUESTIONS
// get current question object from array -
function setNextQuestion() {
    showQuestion(questionEl);
}

// update title with current question
// let currentQuestion = 3;
let currentQuestion = questionEl.length - 1;


function showQuestion() {
    questionEl.textContent = questions[currentQuestion].question;
}

function showAnswers() {
    console.log(questions[0].answers[0].text)
    answersEl.textContent = questions[0].answers[0].text;
}

// loop over choices
for (let i = 0; i < questions.length; i++) {
    console.log(questions[i]);
}

let time;
// start timer(see TIME)
function startCountdown() {
    console.log(timerCount)
    timerCount--;
    timerElement.textContent = "Time: " + timerCount;

    // Time runs out
    if (timerCount <= 0) {
        clearTimer();
        // scoreEntryWindow.setAttribute("class", "show");
    }
}

// Time runs out
if (timerCount <= 0) {
    console.log("We are in the time log if statement");
    // textContent.scoreCount;
    clearTimer();
    // scoreEntryWindow.setAttribute("class", "show");
}


function clearTimer() {
    clearInterval(intervalReference);
}

//submit score listener
function endScore() {
    timerCount() = scoreCount();

}

// variables to keep track of quiz state
// variables to reference DOM elements
// import sound effects (optional)


//GETTING QUESTIONS
// get current question object from array /
// update title with current question /
// clear out any old question choices /
// loop over choices /
// create new button for each choice


// attach click event listener to each choice


// clear out any old question choices
function disableQuestions() {
    questions[i].disabled;
}

// display on the page


//CLICKING ON QUESTIONS
var correct = document.getElementsByClassName("correct");
var wrong = document.getElementsByClassName("wrong");
// answersEl.on('click', function () {
// check if user guessed wrong -
// if (answers.value === false) {
//     // penalize time
//     timerCount--;
//     // play "wrong" sound effect

// }

// display new time on page -
// document.getElementById("result").innerHTML = timerCount;

// play "wrong" sound effect -
// wrong.setAttribute("class", "wrong");

// play "right" sound effect -
// correct.setAttribute("class", "correct");

// flash right/wrong feedback on page for half a second -
// $("correct").stop().css("display", "block")
//     .animate({ dispay: "block" }, 500);

// move to next question

// check if we've run out of questions

// });


//------------------------------------
//ENDING QUIZ - either when question ends or time ends
var newScore = document.getElementById("new-score");
function endQuiz() {
    newScore = timerCount.valueOf();
    // check if user ran out of time
    if (timerCount <= 0) {
        $('.alert').alert()
        alert.setAttribute("class", "show");
        beginQuiz.return;
        // hide questions section
        gameWindow.setAttribute("class", "hide");
        // show end screen
        scoreEntryWindow.setAttribute("class", "show");
        // show final score
        newScore.textContent = "Your final score is " + scoreCount;
        // stop timer
        clearTimer();
    }
}


//------------------------------------
// SAVING SCORE
// get value of input box
newScore = localStorage.getItem("scoreCount");

// format new score object for current user
var userInitialsInput = document.getElementById("initials-input");
var userInfo = {
    userInitialsInput: value = initials,
    timerCount: value = scoreCount
}

// user clicks button to submit initials???
submitButton.onclick = handleFormSubmit;
var handleFormSubmit = function (event) {
    event.preventDefault();

    // make sure value wasn't empty
    if (!nameInput) {
        console.log('You need to fill out your initials!');
        alert('You need to fill out your initials!')
        return;
    }

    // save to localstorage
    printSkills(userInfo);
};

localStorage.setItem("userInfo", JSON.stringify(userInfo));


// get saved scores from localstorage, or if not any, set to empty array


// format new score object for current user


// user clicks button to submit initials
formEl.on('submit', handleFormSubmit);

// redirect to next page


// "13" represents the enter key
document.addEventListener(function (event) {
    console.log(event.which, 13);
})
