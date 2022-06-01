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

var selectedAns = event.target

if(selectedAns === question[0].correctAnswer) {
    //provide coorect feedback
    //DOM add an element
} else {
    //incorrect
    //penalize timer/ global time variable subtract time

}

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

