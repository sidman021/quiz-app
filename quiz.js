const data = [
    {
        id: 1,
        question: "Who is the First President of India?",
        opts: [
            { ans: "Narendra Modi", isCorrect: false },
            { ans: "Rajiv Gandhi", isCorrect: false },
            { ans: "P.V. Narsimha Rao", isCorrect: false },
            { ans: "Jawaharlal Nehru", isCorrect: true }
        ]
    },
    {
        id: 2,
        question: "Which Planet is known as Watery Planet?",
        opts: [
            { ans: "Mercury", isCorrect: false },
            { ans: "Venus", isCorrect: false },
            { ans: "Jupiter", isCorrect: false },
            { ans: "Earth", isCorrect: true }
        ]
    },
    {
        id: 3,
        question: "In which ocean is the Island country Fiji situated ?",
        opts: [
            { ans: "Indian Ocean", isCorrect: false },
            { ans: "Pacific Ocean", isCorrect: true },
            { ans: "Atlantic Ocean", isCorrect: false },
            { ans: "Arctic Ocean ", isCorrect: false }
        ]
    },
    {
        id: 4,
        question: "Which zone separates the crust and mantle ?",
        opts: [
            { ans: "Moho", isCorrect: true },
            { ans: "Stratosphere ", isCorrect: false },
            { ans: "Lithosphere ", isCorrect: false },
            { ans: "Asthenosphere ", isCorrect: false }
        ]
    },
    {
        id: 5,
        question: "To which continent of the world do India, China and Japan belong ?",
        opts: [
            { ans: "Asia ", isCorrect: true },
            { ans: "Antarctica ", isCorrect: false },
            { ans: "Africa ", isCorrect: false },
            { ans: "Europe ", isCorrect: false }
        ]
    },
]

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const ques = document.querySelector(".ques")    //h1 question tag
const optsContainer = document.querySelector(".opts")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer = 0;

const playAgain=()=>{
    window.reloa
} 

const showResult = () => {
    gameScreen.style.display = "none"
    resultScreen.style.display = "block"

    resultScreen.querySelector(".correct").textContent = 
    `Correct Answers : ${correctCount}`
    resultScreen.querySelector(".wrong").textContent = 
    `Wrong Answers : ${wrongCount}`
    resultScreen.querySelector(".score").textContent = 
    `Score : ${correctCount * 10}`
}

const showQues = (qNum) => {
    if (qIndex === data.length) {
        return showResult()
    }
    selectedAnswer = null;
    ques.textContent = data[qNum].question
    optsContainer.innerHTML = data[qNum].opts.map((item, ind) =>
        `<div class="ans">
            <input name="anss" type="radio" id="${ind}" value="${item.isCorrect}">
            <label for="${ind}">${item.ans}</label>
        </div>`
    ).join("")

    selectAnswer()
}

const selectAnswer = () => {
    optsContainer.querySelectorAll("input").forEach(ele => {
        ele.addEventListener("click", (e) => {
            selectedAnswer = e.target.value
        })
    })
}

const SubmitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++
            qIndex++
            showQues(qIndex)
        }
        else {
            alert("please Select an answer")
        }
    })
}

showQues(qIndex)
SubmitAnswer()

console.log(correctCount, wrongCount)   