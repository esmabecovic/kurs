let container = document.querySelector(".container");

async function getUsers() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let response = await data.json();
  return response;
}

getUsers().then((response) => {
  console.log(response);

  response.forEach((el) => {
    let card = document.createElement("div");
    card.className = "card";
    
    let ime = document.createElement("p");
    ime.innerText = "Name " + el.name;

    let usern = document.createElement("p");
    usern.innerText = "Username " + el.username;

    let emailP = document.createElement("p");
    emailP.innerText = "Email " + el.email;

    card.addEventListener("click", () => {
      window.location.href = `index1.html?id${el.id}`;
    });

    card.appendChild(ime);
    card.appendChild(usern);
    card.appendChild(emailP);

    container.appendChild(card);
  });
});