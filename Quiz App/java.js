const questionArray = [
    {
        question: "How long was the cruise",
        answer: [
            {text: "5 days", correct: "false"},
            {text: "7 days", correct: "true"},
            {text: "9 days", correct: "false"},
            {text: "6 days", correct: "false"},
        ],
        explaination: "Cruise was scheduled for 7 days from Aug 4th to 11th"
    },
    {
        question: "Where did we land on the first day (Monday Aug 5th) ",
        answer: [
            {text: "Vancouver", correct: "false"},
            {text: "Victoria", correct: "false"},
            {text: "No where", correct: "true"},
            {text: "Alaska", correct: "false"},
        ],
        explaination: "We did not land anywhere on the first day of the cruise"
    },    
    {
        question: "Which Restuarant Did We Go To On Tuesday Aug 6?",
        answer: [
            {text: "Ocean Blue Steak", correct: "false"},
            {text: "Savior's", correct: "false"},
            {text: "Cagney's", correct: "true"},
            {text: "Taste", correct: "false"},
        ],
        explaination: "It was omg so DELICIOUCOUS AND WE TIPPED 3 DOLLARS"
    },    
    {
        question: "On which day did we go Go Kart together",
        answer: [
            {text: "Wednesday Aug 8", correct: "true"},
            {text: "Thursday Aug 9", correct: "false"},
            {text: "Tuesday Aug 7", correct: "false"},
            {text: "Monday Aug6", correct: "false"},
        ],
        explaination: "I am the winner and if I lose it's because of the kart - Ian"
    },
    {
        question: "What's the highest floor an elevator can go",
        answer: [
            {text: "16", correct: "false"},
            {text: "17", correct: "false"},
            {text: "18", correct: "true"},
            {text: "19", correct: "false"},
        ],
        explaination: "One of the evlavtors actually has a button that goes up to the 18 floor"
    },
    {
        question: "What floor is the Guest Service on?",
        answer: [
            {text: "6", correct: "true"},
            {text: "7", correct: "false"},
            {text: "8", correct: "false"},
            {text: "9", correct: "false"},
        ],
        explaination: "Thanks for finding phone - Andy"
    },
    {
        question: "Is the Garden Cafe on the front of the ship or the back of the ship?",
        answer: [
            {text: "Front", correct: "true"},
            {text: "Back", correct: "false"},
        ],
        explaination: ".. Fish head fish tail"
    },
    {
        question: "When we saw the whales, were we looking at the from the left side of the ship or right side of the ship?",
        answer: [
            {text: "Left", correct: "true"},
            {text: "Right", correct: "false"},
        ],
        explaination: "yes"
    },
    {
        question: "Who was the first winner of Monopoly Card game that had Ian, Vicky, Candice, Andy, Dino as players",
        answer: [
            {text: "Ian", correct: "false"},
            {text: "Vicky", correct: "false"},
            {text: "Andy", correct: "false"},
            {text: "Candice", correct: "true"},
            {text: "Dino", correct: "false"}
        ],
        explaination: "Candice was surprisingly good..."
    },
    {//10
        question: "How many see through section were there in the Drop Down Water Slide?",
        answer: [
            {text: "2", correct: "false"},
            {text: "3", correct: "false"},
            {text: "4", correct: "true"}
        ],
        explaination: "*WE THINK*"
    },
    {//11
        question: "Whats the price of water in our fridge",
        answer: [
            {text: "free", correct: "false"},
            {text: "$2.5", correct: "false"},
            {text: "$3.5", correct: "false"},
            {text: "$4.5", correct: "true"},
        ],
        explaination: "EVERYONE SHOULD KNOW - ANDY"
    },
    {//12
        question: "Which floor has the game room?",
        answer: [
            {text: "5", correct: "false"},
            {text: "6", correct: "true"},
            {text: "7", correct: "false"},
            {text: "8", correct: "false"},
        ],
        explaination: ""
    },
    {//13
        question: "Which day did a man get evacuated from the ship?",
        answer: [
            {text: "Sunday", correct: "false"},
            {text: "Monday", correct: "false"},
            {text: "Tuesday", correct: "true"},
            {text: "Wednesday", correct: "false"},
        ],
        explaination: "SOS"
    },
    {//14
        question: "In Garden Cafe, What was the cusine that stays static throughout the day?",
        answer: [
            {text: "Taste of Asia", correct: "false"},
            {text: "Taste of Japan", correct: "false"},
            {text: "Taste of India", correct: "true"},
            {text: "Taste of Thai", correct: "false"},
        ],
        explaination: "INDIA IS THE BEST - Vicky"
    },
    {//15
        question: "How many Hot Tubs were there in total?",
        answer: [
            {text: "2", correct: "false"},
            {text: "3", correct: "false"},
            {text: "4", correct: "true"}
        ],
        explaination: "There were 2 hot tubs on each side. Totalling 4 - Vicky"
    },
    {//16
        question: "What's the name of the Bar that we all get chicken wings from?",
        answer: [
            {text: "The Local Gril & Bar", correct: "true"},
            {text: "The Cellars wine Bar", correct: "false"},
            {text: "The District Brew House", correct: "false"},
            {text: "Mixx Bar", correct: "false"}
        ],
        explaination: "It was the Local Bar located on the 7th floor - Andy"
    }
]

const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("abtns");
const nextBtn = document.getElementById("next");
const result = document.getElementById("endresult");
const explain = document.getElementById("explaination");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz()
{
    // questionElement.innerHTML = "Hi";
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML= "Next";
    resetState();
    ShowQuestion();
}
function ShowQuestion()
{
    
    // questionElement.innerHTML = "123";
    let currentQuestion = questionArray[currentQuestionIndex];
    let questionNo =  1 + currentQuestionIndex;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    console.log(currentQuestion.answer);
    console.log(currentQuestion.question);
    console.log(currentQuestionIndex);

        currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.explain = currentQuestion.explaination;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        button.dataset.correct = answer.correct;
        // console.log(button.dataset.correct);
        button.addEventListener("click", selectAnswer);
        // if(answer.correct)
        // {
        //     button.dataset.correct = answer.correct;
        // }
    });
    // questionElement.innerHTML = 2;
}
function resetState()
{
    explain.innerHTML = "";
    nextBtn.style.display = "none";
    let num = 0;
    while(answerBtns.firstChild)
    {
        num += 1;
        answerBtns.removeChild(answerBtns.firstChild);
        // console.log(num + " Removed button");
    }
    // console.log("Hmm");
}
function selectAnswer(e)
{

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    explain.innerHTML = selectedBtn.dataset.explain;

    // console.log(isCorrect);
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
        // result.innerHTML = "Your score is " + score;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        else{
            button.classList.add("incorrect");
        }
        button.disabled = "true";
        nextBtn.style.display = "block";
    })
};
function nextQuestion()
{
 
    resetState();
    console.log(currentQuestionIndex, questionArray.length)
    ShowQuestion();
}
function displayResult()
{
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${currentQuestionIndex}`
    nextBtn.innerHTML = "Play Again";
    // nextBtn.addEventListener("click", startQuiz);
    nextBtn.style.display = "block";
}
nextBtn.addEventListener("click", ()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex == questionArray.length)
    {
        displayResult();
    }
    else if(currentQuestionIndex > questionArray.length)
    {
        startQuiz();
    }
    else
    {
        nextQuestion();
    }

})

    
startQuiz();