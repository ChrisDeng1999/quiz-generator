var timeCounter = document.querySelector(".timer-count");
var timeSecond = 100;
var timer;
var startButton = document.querySelector(".start-button");



function startGame () {
    startTimer();
}

startButton.addEventListener("click", startGame);


function startTimer () {
    timer = setInterval(() => {
        timeSecond--;
        timeCounter.innerHTML = timeSecond;
        if (timeSecond === 0 ) {
            clearInterval(timer);
            // endGame() Needs to be added
        }
    }, 1000);
}


// function endGame () {

// }









//Global Variable references
//--------------------------------
//questions div
//list items of answers
//end game div
//timer

//General Variable references
//-----------------------------
//score
//time or timer
//questions left (referencing the indexes) var questionIndex = 0
//feedback varaible or correct/incorrect



//event listener for start button
//reference the button
//add event listener and function

//on start button clickl startGame function

//start game function
//hide the intro start screen
//first question rendered (call a function)
//show question answers

//timer starts    timer = setInterval(function, 1000)
//time displays and countsdown

//Render question function
//change hidden value of questions div
//set variable with array of objects to hold questions

// var questions = [
//     {
//         titles: "javascript question",
//         answerChoices: [1, 2, 3,4],
//         correctAnswer: "answer",
//     }
// ]

//reference the index of the question to display on screen
//increment the question index variable

//Grab html reference to header append question[0].title
//grab html reference push question answers to an array and then loop through answers and create list/button and then append to the div or Unordered list

//add event listener to the answer choices (on click) or div that holds the answer choices event.target matches the correctAnswer

// var selectedAns = event.target

// if(selectedAns === question[0].correctAnswer) {
//     //provide coorect feedback
//     //DOM add an element
// } else {
//     //incorrect
//     //penalize timer/ global time variable subtract time

// }

//start timer function
//time--
//rerender time on screen

//warning
//Check timer if statement
// if (time===0) {
//    quiz end
//} else{
//  keep function running
//}

//clearInterval


//End quiz function

//hide questions and display initials score page

//on sumbitbtn
//send initials and final score to localstorage  setItem(key, value)
//store scores in array and stringify to put in local storage
//to pull out use getItem JSON.parse to take out
//pull out scores from local put them in an array push the most recent score to array and sttore again JSON.stringify to put in
//display final score


//Highscore page
//pull items out of storage and display on screen
//go back btbn anchor that references index.html
//clear btn find method to clear local storage






// we need to hold what the questions are, what the possible answers are, and what the correct answers is

//we'll need a timer
//hold a count variable

//will need button and event listener for that button

//display question with current questions possible answers as buttons


//event listeners on possible answers button

//wrong/right answer display message "wrong/right" in a div underneath the buttons

//then move on to next question
//wrong answer will deduct time from timercount variable
//right answer just moves on to next question


//no more questions left end the game
//end game with show current time as score and a text box to ender initials

//the text box should have button with listener so when you submit it saves the score and initials to local storage

//create question variable with array of question objects

var question1 = [
    {
        question: "What does the fox say?",
        possibleAnswers: ["Ring-ding-ding-ding-dingeringeding!", "Sing-ding-ding-ding-dingeringeding!", "Screech","Scream", "Shriek"],
        correctAnswer: ["Ring-ding-ding-ding-dingeringeding!"]
    }
]
var question2 = [
    {
        question: "Which of these are not an Explorer class in MapleStory",
        possibleAnswers: ["Warrior", "Archer", "Magician","Thief", "Pirate"],
        correctAnswer: ["Archer"]
    }
]
var question3 = [
    {
        question: "How many licks does it take to get to the center of a tootsie pop",
        possibleAnswers: ["The world will forever know.", "You may never know.", "The world may never know.","You will forever know.", "None of these"],
        correctAnswer: ["The world may never know."]
    }
]
var question4 = [
    {
        question: "Why did the monkey fall off the branch?",
        possibleAnswers: ["Because it fell asleep", "Because it fell", "Because it was told to do flexbox", "Because it died", "Because it slipped"],
        correctAnswer: ["Because it died"]
    }
]
var question5 = [
    {
        question: "What do cows drink?",
        possibleAnswers: ["Milk", "Water", "The blood of an orphan", "The blood of a baby", "The blood of a cow"],
        correctAnswer: ["Water"]
    }
]

var questionsArray = ["question1", "question2", "question3", "question4", "question5"]



var questionsCounter = 0


// Start Button hides welcome message and displays first question
//   function startGame() {
//   set attribute of welcome div to hide
//   set attribute of question div to visible
//   
//   update h1 textcontent with questions[questionsCounter].question
//   loop through and create possible answer buttons with the values of the buttons being each of the questions[questionsCounter].possibleAnswers
//   add listener to possibleAnswers button
    // possibleAnswerBtn.addEventListener("click", function(event) {
    //     var selectedAnswer = event.target
//      get value of the target
//compare the value to questions[questionsCounter].correctAnswer
//   if(questions[questionsCounter].correctAnswer !== selectedAnswer.value) {
//    deduct 10 from timerCounter -10 questionsCounter ++
//  return startGame() 

// }
//check to see if time is <= 0 lose game or if time is >0 and there are no more questions left, you win the game
// })
// var initialsInputVal = document.querySelector("#initlasInput").value


// save the current timeCounter to localStorage and the initials from the forms element
// save initals and score as a stringified object into local storage
//}
// on game load pull localStorage and update text content with current high scires already in localStorage
