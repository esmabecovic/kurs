// https://jsonplaceholder.typicode.com/users/1/posts

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);
let container = document.querySelector(".container");
async function getPosts() {
  let data = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`);
  let response = await data.json();
  return response;
}

getPosts().then((el) => {
  console.log(el);
  
  el.forEach((el) => {
    let card = document.createElement("div");
    card.className = "card1";
    let title  = document.createElement("p");
    title.innerText="Post: "+el.title;
    card.appendChild(title);

    container.appendChild(card);
  });

});