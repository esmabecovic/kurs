//gardenbradwoods.io
//jsv9000.app


//PROMISE

// let promise = new Promise(function(resolve, reject){
//     // resolve("Pesma izdata")
//     // reject("Greska se desila")
//     setTimeout(() => {
//         resolve("done")
//     }, 1000);
// })

// // promise.then((response) => console.log(response))

// // promise.then(alert)

// promise.then((res) => alert(res))
// .catch((e) =>{
//     console.error(e);
// }).finally("Zavrseno")

// {
//     state:"pending"
//     result: undefined
// }

// {
//     state:"fullfiled"
//     result: value
// }

// {
//     state:"rejected"
//     result: error;
// }

// function delay(ms){
//     return new Promise((resolve, reject) => setTimeout(() => resolve("done"), ms))
// }


// delay(3000).then((res) => alert(res))


//ASYNC AWAIT

// async function foo() {}

let users = []

const getUsers = async () => {
    try{ 
        const response = await fetch("https://reqres.in/api/users?page=2")
        const data = await response.json()

        users = data.data
        console.log(users);
    } catch (e){
        console.log(e);
    } finally {
        console.log("gotovo");
    }

    // return data.data
}

// const users = getUsers().then((res) => console.log(res))

// console.log(users);
getUsers();
// foo2();//.


//FETCH POST
const data  = {
    title: "Nova obaveza",
    completed: false,
};

fetch("http://", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    },
})
    .then((response) => response.json())
    .then((data) => console.log(data))



//FETCH PUT 
const dataPut = {
    id:1,
    title:"Izmenjena obaveza"
};

fetch("http://.../1", {
    method:"PUT",
    body:JSON.stringify(dataPut),
    headers:{
        "Content-Type": "application/json"
    }
    .then((response) => response.json())
    .then((response) => {
        console.log(response.staus);
    })
    .then((data) => console.log(data))


})


//FETCH DELETE
fetch("http://.../1", { 
    method:"DELETE"
}).then((res) => console.log("Odg sa statusom:" , res.status))





