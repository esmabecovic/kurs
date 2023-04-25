// const introDiv = document.querySelector("#pocetak")
// const id = document.getElementById("pocetak")
// const h1 = document.getElementsByTagName("h1")
// const klasa = document.getElementsByClassName("neka-klasa")
// const klasa1 = document.querySelector(".neka-klasa")
// const klasa2 = document.querySelectorAll(".neka-klasa")

// console.log(introDiv);
// console.log(h1);
// console.log(klasa);
// console.log(klasa1);
// console.log(klasa2);

// introDiv.style.background = "red"
// introDiv.style.height = "20vh"
// introDiv.textContent = "Ovo je promena iz .js fajla"
// introDiv.innerHTML = `<p>Nesto drugo</p>`

// // traversy media dom crash course


// const main = document.querySelector('.main');
// const btn = document.querySelector('.clickable');
// const body = document.querySelector('body')
// const text = document.querySelector('.tekst')
// const  nameInput = document.querySelector('.input').value
// const ispis = document.querySelector('.ispis')

// console.log(object);

// const handleClick = () =>{
//     // alert("Dugme sa klasom clickable je kliknitu ")
//     // main.style.backgroundColor = "blue"
//     btn.textContent = "Kliknuto"
//     btn.style.backgroundColor = "yellow"
//     console.log('input', nameInput);
//     ispis.textContent = nameInput
// }

// btn.addEventListener("click", handleClick)

// //addEventListener prvi argument je string drugi je funckija

// main.addEventListener("mouseover", () =>{
//     main.style.backgroundColor  = "orange"
// })

// main.addEventListener("mouseout", () =>{
//     main.style.backgroundColor  = "transparent"
// })

// body.addEventListener("keydown", (e) =>{
//     // console.log(e);
//     // p.textContent += `kod: ${e.code}`
//     if(e.code === "KeyR") location.reload();
// })


const usersContainer = document.querySelector('.users');
const submitBtn = document.querySelector('#submit');
const body = document.querySelector('body')

let users = [];

const createUserFactory = (name, lastName, occupation) => {
    return {id: Math.random()
        .toString(36)
        .substring(2, 10 + 2),
        name, lastName, occupation}
}
const deleteUser = (userId) =>{
    const newUsers = users.filter((user) => user.id !== userId)
    users = [...newUsers];
    console.log(users);
}
const renederUsers = () =>{
    users.forEach(user =>{
        const userContainer = document.createElement("div");

        const userNameEl = document.createElement("span")
        const lastNameEl = document.createElement("span")
        const occupationEl = document.createElement("span")
        
        userNameEl.classList.add("el")
        lastNameEl.classList.add("el")
        occupationEl.classList.add("el")

        userContainer.appendChild(userNameEl)
        userContainer.appendChild(lastNameEl)
        userContainer.appendChild(occupationEl)

        userNameEl.textContent = user.name
        lastNameEl.textContent = user.lastName
        occupationEl.textContent = user.occupation

        usersContainer.appendChild(userContainer)

        actionCell.addEventListener('click', ()  => deleteUser(currentUser.id))
    })
}
const clearInput = () =>{
    let getName = document.querySelector("#name");
    let getLastName = document.querySelector("#lastName");
    let getOccupation = document.querySelector("#occupation");
      if (getName.value !="" && getLastName.value !="" && getOccupation !="") {
          getName.value = "";
          getLastName.value = "";
          getOccupation.value = "";
      }
}
submitBtn.onclick = () =>{
    let userName = document.querySelector("#name").value
    let lastName = document.querySelector("#lastName").value
    let occupation = document.querySelector("#occupation").value


   const user =  createUserFactory(userName, lastName, occupation);
   users.push(user)
   console.log(users);
   renederUsers()
   clearInput()
}


//ocisiti input posle entera
//da se ne duplira prikaz posle entera
//stilizovati listu users za sve klase css i zakaciti na klasu u js
//dev.to
//how to add class to js add class from css