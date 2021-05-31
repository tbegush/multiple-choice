
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var time = 100;
var qCounter = 5;
var timer;

var correctAnswer = allQuestions[qCounter].correctAnswer;

function makeQuestion(){

    //create a div to hold the question and the possible answers.
    var questionAnswerEl = document.createElement("div");
    //create a div to hold all the possible answers
    var answersEl = document.createElement("div");
    //create a <p> to hold the question
    var questionParaEl = document.createElement("p");
    //get the question from the questions.js array
    var question = allQuestions[qCounter].question;
    //paint the question on the <p> element
        questionParaEl.textContent = question;
        questionAnswerEl
    .append(questionParaEl);
    var answers = allQuestions[qCounter].answers;

    for (var i = 0; i < answers.length; i++){
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answers[i];
    answersEl.append(buttonEl);
    }
    
    questionAnswerEl.append(answersEl)

    results.append(questionAnswerEl)

}

function startTimer() {
timer = setInterval(function(){
time--;
}, 1000)
}

function stopTimer() {
clearInterval(timer);
}

var timerEl = document.createElement("timer")

// function showResults(){


// }

// display quiz on page load. 
makeQuestion();

// on submit, show results
submitButton.addEventListener('click', showResults);