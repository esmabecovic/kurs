const usersTable = document.querySelector(".usersTable");
const submitBtn = document.querySelector("#submit");

let users = [];

const createUserFactory = (name, lastName, occupation) => {
  return {
    id: Math.random()
      .toString(36)
      .substring(2, 10 + 2),
    name,
    lastName,
    occupation,
  };
};

const deleteUser = (userId) => {
  const newUsers = users.filter((user) => user.id !== userId);
  users = [...newUsers];

  console.log("New Users", users);
const QUESTIONS = [
  {
    id: 1,
    question: "Koja je najveca planina na svetu?",
    answers: ["Kilimandzaro", "Kopaonik", "Fudzi", "Mont Everest", "K2"],
    correct_answer: "Mont Everest",
    points: 5,
  },
  {
    id: 2,
    question: "Koliko minuta traje fudbalska utakmica?",
    answers: [45, 60, 90, 75, 120],
    correct_answer: 90,
    points: 5,
  },
];

let CURRENT_POINTS = 0;

const maxPoints = QUESTIONS.reduce((prev, curr) => {
  return prev + curr.points;
}, 0);

const initializeQuiz = () => {
  console.log("Kviz se pokrece..");

  const questionContainer = document.querySelector("#pitanje");
  const answersContainer = document.querySelector("#odgovori");

  const question = QUESTIONS[1];

  questionContainer.textContent = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer;

    button.onclick = () => {
      submitAnswer(question.id, button.textContent);
    };

    answersContainer.appendChild(button);
  });
};

function dugmeFunction() {
  let userName = document.querySelector("#name").value;
  let lastName = document.querySelector("#lastName").value;
  let occupation = document.querySelector("#occupation").value;

  if (userName !== "" && lastName !== "" && occupation !== "") {
    const user = createUserFactory(userName, lastName, occupation);
    users.push(user);
    renderUsers();
    console.log("users", users);

    document.querySelector("#name").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#occupation").value = "";
//Kada se funkcija okine, treba da prebaci na sledece pitanje
//Ukoliko je dati odgovor tacan, dodati korisniku onoliko poena koliko to pitanje nosi,
//Prebaciti na sledece pitanje, bilo da je odgovor tacan ili netacan
const submitAnswer = (id, answer) => {
  const question = QUESTIONS[0];

  if (question.id === id) {
    //Prebaci na sledece pitanje
    if (question.correct_answer === answer) {
      CURRENT_POINTS += question.points;
      console.log(CURRENT_POINTS);
    }
  }
}

const renderUsers = () => {
  const currentUser = users[users.length - 1];
  //Creating new Row and Cells

  const currentRow = document.createElement("tr");
  const userNameCell = document.createElement("td");
  const lastNameCell = document.createElement("td");
  const occupationCell = document.createElement("td");
  const actionCell = document.createElement("td");

  actionCell.addEventListener("click", () => {
    usersTable.removeChild(currentRow), deleteUser(currentUser.id);
  });

  // Appending Cells to created row
  currentRow.appendChild(userNameCell);
  currentRow.appendChild(lastNameCell);
  currentRow.appendChild(occupationCell);
  currentRow.appendChild(actionCell);

  // Assinging text to created cells.
  userNameCell.textContent = currentUser.name;
  lastNameCell.textContent = currentUser.lastName;
  occupationCell.textContent = currentUser.occupation;
  actionCell.textContent = "X";
  // Appending new row to table element in HTML
  usersTable.appendChild(currentRow);
};
//Ocisti input
//da se ne duplira ovo
//Stilizovanje

submitBtn.addEventListener("click", dugmeFunction);
initializeQuiz();