var timeCounter = document.querySelector(".timer-count");
var timeSecond = 100;
var timer;
var wrongTime = 15;
var correct;
var startButton = document.querySelector(".start-btn");
var nextButton = document.querySelector(".next-btn");
var hideTitle = document.querySelector(".title");
var hideIntro = document.querySelector(".intro");
var questionContainerEl = document.getElementById("quiz-questions")
var randomQuestions, currentQuestionIndex
var questionEl = document.getElementById("question")
var answerButtonEl = document.getElementById("answer-buttons")
var questions = [
    {
        question: "What does the fox say?",
        answers: [
            { text: "Sing-ding-ding-ding-dingeringeding!", correct: false },
            { text: "Ring-ding-ding-ding-dingeringeding!", correct: true },
            { text: "Screech", correct: false },
            { text: "Scream", correct: false },
            { text: "Shriek", correct: false } 
        ], 
    },
    {
        question: "Which of these are not an Explorer class in MapleStory",
        answers: [
            { text: "Archer", correct: true },
            { text: "Warrior", correct: false },
            { text: "Magician", correct: false },
            { text: "Thief", correct: false },
            { text: "Pirate", correct: false } 
        ], 
    },
    {
        question: "How many licks does it take to get to the center of a tootsie pop",
        answers: [
            { text: "The world will forever know.", correct: false },
            { text: "You may never know.", correct: false },
            { text: "The world may never know.", correct: true },
            { text: "You will forever know.", correct: false },
            { text: "You can never know.", correct: false } 
        ], 
    },
    {
        question: "Why did the monkey fall off the branch?",
        answers: [
            { text: "Because it fell asleep", correct: false },
            { text: "Because it slipped", correct: false },
            { text: "Because it fell", correct: false },
            { text: "Because it was told to do flexbox", correct: false },
            { text: "Because it died", correct: true } 
        ], 
    },
    {
        question: "What do cows drink?",
        answers: [
            { text: "Milk", correct: false },
            { text: "The blood of a baby", correct: false },
            { text: "The blood of an orphan", correct: false },
            { text: "Water", correct: true },
            { text: "The blood of a cow", correct: false } 
        ], 
    }
]


function startGame () {
    startButton.classList.add("hide")
    hideTitle.classList.add("hide")
    hideIntro.classList.add("hide")
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove("hide")
    showNextQuestion()
    startTimer()
}

function showNextQuestion () {
    resetQuestions()
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion (question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonEl.appendChild(button)
        
    });
}

function resetQuestions() {
    nextButton.classList.add("hide")
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild(answerButtonEl.firstChild)
    }
}

function selectAnswer (e) {
    var selectedBtn = e.target
    var correctQ = selectedBtn.dataset.correct
    if (correctQ !== true) {
        timeSecond -= wrongTime
    }
    Array.from(answerButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    }   else {
        // Need to change restart 
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    console.log(correctQ);
}



function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass (element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    showNextQuestion()
})


function startTimer () {
    timer = setInterval(() => {
        timeSecond--;
        timeCounter.innerText = timeSecond;
        if (timeSecond <= 0 || currentQuestionIndex >= questionEl.length) {
            clearInterval(timer);
        }
    }, 1000);
}

