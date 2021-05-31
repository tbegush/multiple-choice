
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
//stick the question, which is inside a <p>, into the QandA element
     questionAnswerEl.append(questionParaEl);
//take all the actual answers and throw them in a variable called answers
    var answers = allQuestions[qCounter].answers;

    //Loop through each answer, put it in a button
    for (var i = 0; i < answers.length; i++){
    var buttonEl = document.createElement("button");
    buttonEl.textContent = answers[i];
    answersEl.append(buttonEl);
    }
    //Take all the buttons and paint them on the page
    questionAnswerEl.append(answersEl)

    quiz.append(questionAnswerEl)

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

//     if (selected answer = correctAnswer) {
//         window.alert("You're right!")
//         time += 10;
//     }

// }

// display quiz on page load. 
makeQuestion();
startTimer();

// on submit, show results
// submitButton.addEventListener('click', xxxxxxxxxxx);