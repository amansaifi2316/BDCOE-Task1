const questions = [
    {
        category: "Science",
        question: "What is the basic unit of life?",
        options: ["Tissue", "Organ", "Cell", "Organ system"],
        answer: 2
    },

    {
        category: "Science",
        question: "Which gas is released during photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        answer: 1
    },

    {
        category: "Science",
        question: "What is the SI unit of electric current?",
        options: ["Volt", "Ohm", "Watt", "Ampere"],
        answer: 3
    },

    {
        category: "Science",
        question: "Which part of the human brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Spinal cord"],
        answer: 1
    },

    {
        category: "Science",
        question: "Which lens is used to correct myopia?",
        options: ["Convex lens", "Concave lens", "Cylindrical lens", "Bifocal lens"],
        answer: 1
    },

    {
        category: "Science",
        question: "What is the pH value of a neutral solution?",
        options: ["0", "5", "7", "14"],
        answer: 2
    },

    {
        category: "Science",
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Copper", "Mercury", "Aluminium"],
        answer: 2
    },

    {
        category: "Science",
        question: "Which organ filters waste from the blood?",
        options: ["Heart", "Lungs", "Kidneys", "Stomach"],
        answer: 2
    },

    {
        category: "Science",
        question: "What is the process by which green plants make their food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        answer: 1
    },

    {
        category: "Science",
        question: "Which force keeps planets in orbit around the Sun?",
        options: ["Magnetic force", "Frictional force", "Gravitational force", "Electrostatic force"],
        answer: 2
    },

    {
        category: "Technology",
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing Utility"
        ],
        answer: 0
    },

    {
        category: "Technology",
        question: "Which language is mainly used to style web pages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        answer: 1
    },

    {
        category: "Technology",
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        category: "Technology",
        question: "Which of these is an operating system?",
        options: ["Google", "Windows", "YouTube", "Chrome"],
        answer: 1
    },

    {
        category: "Technology",
        question: "Which device is used to store data permanently?",
        options: ["RAM", "CPU", "SSD", "Monitor"],
        answer: 2
    },

    {
        category: "Technology",
        question: "What does AI stand for?",
        options: [
            "Automated Internet",
            "Artificial Intelligence",
            "Advanced Information",
            "Automatic Input"
        ],
        answer: 1
    },

    {
        category: "Technology",
        question: "Which technology is used to connect devices wirelessly over short distances?",
        options: ["Bluetooth", "Ethernet", "HDMI", "USB"],
        answer: 0
    },

    {
        category: "Technology",
        question: "Which one is a programming language?",
        options: ["Python", "Chrome", "Windows", "Google"],
        answer: 0
    },

    {
        category: "Technology",
        question: "What is the full form of URL?",
        options: [
            "Uniform Resource Locator",
            "Universal Reference Link",
            "United Resource Location",
            "Uniform Research Link"
        ],
        answer: 0
    },

    {
        category: "Technology",
        question: "Which device is commonly used to input text into a computer?",
        options: ["Monitor", "Keyboard", "Speaker", "Printer"],
        answer: 1
    },


    {
        category: "Mathematics",
        question: "What is the value of 12 × 8?",
        options: ["86", "96", "108", "112"],
        answer: 1
    },

    {
        category: "Mathematics",
        question: "What is the square of 15?",
        options: ["125", "200", "225", "250"],
        answer: 2
    },

    {
        category: "Mathematics",
        question: "What is the value of √144?",
        options: ["10", "11", "12", "14"],
        answer: 2
    },

    {
        category: "Mathematics",
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: 2
    },

    {
        category: "Mathematics",
        question: "What is the value of 2³?",
        options: ["6", "8", "9", "12"],
        answer: 1
    },

    {
        category: "Mathematics",
        question: "If x + 5 = 12, what is the value of x?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },

    {
        category: "Mathematics",
        question: "What is the perimeter of a square with side 5 cm?",
        options: ["10 cm", "15 cm", "20 cm", "25 cm"],
        answer: 2
    },

    {
        category: "Mathematics",
        question: "What is the area of a rectangle with length 10 cm and width 5 cm?",
        options: ["15 cm²", "30 cm²", "50 cm²", "100 cm²"],
        answer: 2
    },

    {
        category: "Mathematics",
        question: "What is the value of 100 ÷ 4?",
        options: ["20", "25", "30", "40"],
        answer: 1
    },

    {
        category: "Mathematics",
        question: "What is the average of 10, 20 and 30?",
        options: ["15", "20", "25", "30"],
        answer: 1
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
