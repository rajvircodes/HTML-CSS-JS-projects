// put the questions inside an array in object with its answers 

const questions = [
    {
        question: "Which is Largest animal in the world ?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
     {
        question: "which is the smallest coutry in the world ?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shrilanka", correct: false}
        ]
    },
    {
        question: "which is the largest desert in the world ?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true}
        ]
    },
    {
        question: "Which is the smallest continent in the world ?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false}
        ]
    }
];

// Get the element reference 

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('asnswer-buttons');
const nextButton = document.getElementById('next-btn');

let currebtQuestionIndex = 0;
let score = 0;


  function startQuiz(){
    currebtQuestionIndex = 0;
    
  }