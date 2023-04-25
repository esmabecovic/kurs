
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
let card = document.querySelector('.card')
let i = 0;


let pitanje = document.getElementById("question");
let answer = document.querySelector(".answer")
let answer1 = document.getElementById('answer1')
let answer2 = document.getElementById('answer2')
let answer3 = document.getElementById('answer3')
let answer4 = document.getElementById('answer4')
let next = document.querySelector('.next');

let allAnswers = document.querySelectorAll('.answer');
showAnswers();

function showAnswers(){

        pitanje.textContent = quizData[i].question;
        card.classList.add('question')
        answer1.innerHTML = quizData[i].a
        answer2.innerHTML = quizData[i].b
        answer3.innerHTML = quizData[i].c
        answer4.innerHTML = quizData[i].d
    

}

function NextBtn(){
    let odg; 

    allAnswers.forEach((el)=>{
        if(el.checked){
            odg = el.id;
        }
    })

    console.log(odg);
    i++;
    if (i === quizData.length) {
        calculateScore(); 
    }
    else{
        showAnswers()
    }
    allAnswers.forEach((el)=>{
        el.checked = false;
    })
}

function calculateScore() {
    let correctAnswers = 0;
    allAnswers.forEach((el) => {
      if (el.checked && el.id === quizData[i - 1].correct) {
        correctAnswers++;
      }
    });
    let score = correctAnswers;
    if (index === quizData.length) {
      card.innerHTML = "";
      let resultCard = document.createElement("div");
      let result =
        score === quizData.length
          ? `Congratulations! You've got all the answers right.`
          : `Your score is ${score}/${quizData.length}`;
      resultCard.innerHTML = result;
      resultCard.classList.add("kartica");
      card.appendChild(resultCard);
    } else {
      showAnswers();
    }
  }
