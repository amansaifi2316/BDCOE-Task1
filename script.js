const questions = [
    {
        question: "What is the basic unit of life?",
        options: [
            "Tissue",
            "Organ",
            "Cell",
            "Organ system"
        ],
        answer: 2
    },

    {
        question: "Which gas is released during photosynthesis?",
        options: [
            "Carbon dioxide",
            "Oxygen",
            "Nitrogen",
            "Hydrogen"
        ],
        answer: 1
    },

    {
        question: "What is the SI unit of electric current?",
        options: [
            "Volt",
            "Ohm",
            "Watt",
            "Ampere"
        ],
        answer: 3
    },

    {
        question: "Which part of the human brain controls balance and coordination?",
        options: [
            "Cerebrum",
            "Cerebellum",
            "Medulla",
            "Spinal cord"
        ],
        answer: 1
    },

    {
        question: "Which lens is used to correct myopia?",
        options: [
            "Convex lens",
            "Concave lens",
            "Cylindrical lens",
            "Bifocal lens"
        ],
        answer: 1
    },

    {
        question: "What is the pH value of a neutral solution?",
        options: [
            "0",
            "5",
            "7",
            "14"
        ],
        answer: 2
    },

    {
        question: "Which metal is liquid at room temperature?",
        options: [
            "Iron",
            "Copper",
            "Mercury",
            "Aluminium"
        ],
        answer: 2
    },

    {
        question: "Which organ filters waste from the blood?",
        options: [
            "Heart",
            "Lungs",
            "Kidneys",
            "Stomach"
        ],
        answer: 2
    },

    {
        question: "What is the process by which green plants make their food?",
        options: [
            "Respiration",
            "Photosynthesis",
            "Transpiration",
            "Digestion"
        ],
        answer: 1
    },

    {
        question: "Which force keeps planets in orbit around the Sun?",
        options: [
            "Magnetic force",
            "Frictional force",
            "Gravitational force",
            "Electrostatic force"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const progressBar = document.getElementById("progress-bar");





function showQuestion() {

    selectedAnswer = null;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    optionsElement.innerHTML = "";






    current.options.forEach((option, index) => {

        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");


        button.addEventListener("click", () => {

            selectedAnswer = index;
            document.querySelectorAll(".option").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

        });


        optionsElement.appendChild(button);

    });

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish Quiz";
    } else {
        nextButton.textContent = "Next →";
    }
}
function nextQuestion() {

    if (selectedAnswer === null) {
        alert("Please select an answer first.");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();
    } else {

        showResult();
    }
}



function showResult() {


    questionElement.textContent = "Quiz Complete!";

    questionNumber.textContent = "Quiz Finished";
    optionsElement.innerHTML = `
        <div class="result">
            <p>Your Score</p>
            <h2>${score} / ${questions.length}</h2>
        </div>
    `;
    progressBar.style.width = "100%";
    nextButton.textContent = "Try Again";
}




function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    showQuestion();
}

nextButton.addEventListener("click", () => {
    if (currentQuestion >= questions.length) {
        restartQuiz();
    } else {
        nextQuestion();
    }
});
showQuestion();

const startQuizButtons = document.querySelectorAll(".start-quiz, .start-button"); 
const quizContainer = document.querySelector(".quiz-container"); 

startQuizButtons.forEach(button => { 
    button.addEventListener("click", () => {
         quizContainer.scrollIntoView({ 
            
            behavior: "smooth", block: "start" 
        }); 
    }); 
});
