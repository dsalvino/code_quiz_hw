// create a var for answer button, timer, highscore  
var startBtn = document.getElementById("startQuiz");
var questionEl = document.getElementById("quizQuestions");


startBtn.addEventListener("click", startGame);

function startGame () { //this starts the quiz
    alert("I've been clicked"); 
}



























var questions = [
    {
        question: "what does HTML stand for?",
        answers: {
            a: "Home Tool Markup Language",
            b: "Hyper Text Markup Language",
            c: "Hyperlinks and Text Markup Language"
        },
        correctAnswer: "a"
    },
    {
        question: "Who is making the Web Standards?",
        answers: {
            a: "Google",
            b: "Microsoft",
            c: "The World Wide Web Consortium",
            d: "Mozilla"
        },
        correctAnswer: "c"
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answers: {
            a: "<h6>",
            b: "<head>",
            c: "<h1>",
            d: "<heading>"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct HTML element for inserting a line Break?",
        answers: {
            a: "<br>",
            b: "<break>",
            c: "<lb>"
    },
        correctAnswer: "a"
    },
    {
        question: "Choose the correct HTML element to define emhpasized text",
        answers: {
            a: "<em>",
            b: "<italic>",
            c: "<i>"
        },
        correctAnswer: "c"
    }
];

