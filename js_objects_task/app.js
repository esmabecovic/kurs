// const students = [
//     {
//         name: "Esma",
//         lastName: "Becovic",
//         subjects: ["OET", "LA1", "MA", "RT", "C++"],
//         grades: [7, 7, 7, 9, 6],
//         department: "Softversko inzenjerstvo"
//     },
//     {
//         name: "Halida",
//         lastName: "Karisik",
//         subjects: ["OET", "LA1", "MA", "RT", "C++"],
//         grades: [9, 10, 10, 10, 7],
//         department: "Softversko inzenjerstvo"
//     },
//     {
//         name: "Mina",
//         lastName: "Corovic",
//         subjects: ["Krivicno pravo", "Porodicno pravo", "Uvod", "Engelski jezik"],
//         grades: [7, 7, 6, 10],
//         department: "Pravo"
//     },
//     {
//         name: "Anesa",
//         lastName: "Halilovic",
//         subjects: ["Krivicno pravo", "Porodicno pravo", "Uvod", "Ekonomija"],
//         grades: [10, 10, 10, 6, 10],
//         department: "Pravo"
//     },
//     {
//         name: "Merima",
//         lastName: "Lekovic",
//         subjects: ["Farm1", "Matematika", "Fizika", "Anatomija", "Botanika"],
//         grades: [8, 7, 9, 6, 7],
//         department: "Farmacija"
//     },
//     {
//         name: "Edina",
//         lastName: "Ibrovic",
//         subjects: ["Savremeni nemacki", "NK1", "Uvod u germanistiku", "NK2", "Istorija nemackog"],
//         grades: [10, 9, 7, 8, 9],
//         department: "Nemacki jezik"
//     },
//     {
//         name: "Dina",
//         lastName: "Medovic",
//         subjects: ["E1", "E2", "Str1", "Informatika", "Psihologija ucenja"],
//         grades: [10, 10, 8, 9, 10],
//         department: "Engleski jezik"
//     },
//     {
//         name: "Fahrudin",
//         lastName: "Muminovic",
//         subjects: ["Geodezija", "Matematika 1", "Mehanika", "Hidrologija", "Statika"],
//         grades: [7, 8, 6, 9, 6],
//         department: "Gradjevina"
//     },
//     {
//         name: "Samed",
//         lastName: "Rebronja",
//         subjects: ["OE", "Str1", "C", "IS", "Programski jezici"],
//         grades: [6, 8, 6, 7, 6],
//         department: "Poslovna informatika"
//     },
//     {
//         name: "Nikola",
//         lastName: "Glisovic",
//         subjects: ["Algoritmi", "LA1", "TI", "Fizika", "SI"],
//         grades: [8, 8, 6, 8, 6],
//         department: "Racunarska tehnika"
//     }
// ];

// console.log(students);

// // const averageGrade = students.reduce((prev, curr) => prev.grades +  curr.grades)/students.subjects

// const studentsWithAverage = students.map((student) => {
//     return{
//         ...student,
//         average: student.grades.reduce((prev, curr) => prev + curr)/ student.grades.length
//     };
// })

// console.log(studentsWithAverage);

// const studentiZaStipendiju = studentsWithAverage.filter((student) => student.average > 8)

// console.log(studentiZaStipendiju);

// const getFullName = students.map((student) => `${student.name} ${student.lastName}`)

// console.log(getFullName);


// ------------------------------------------------------------------------------------------



// const person = {
//     name: "Esma",
//     lastName: "Becovic",
//     getNickname: function(){
//         return `${this.name.slice(0,2)}${this.lastName.slice(0,2)}`
//     }
// } 

// console.log(person.getNickname());



// ------------------------------------------------------------------------------------------


// --------CALL----------

// -----------I primer-----------

let person = {
    name: "Esma",
    lastName: "Becovic"
}

function getFullName(text, grade){
    return `${this.name} ${this.lastName} ${text} ${grade}`
}

console.log(getFullName.call(person, "je polozila ispit sa ocenom", 10));

// ----------II primer-------------

let place = {
    city: "Barcelona"
}

function visitCity(text){
    return `${text} ${this.city}`
}

console.log(visitCity.call(place, "I wanna visit"));


// ------------III primer------------

let restourant = {
    name: "La vie est belle",
    city: "Paris",
}

function ratePlace(text, txt, rating){
    return `${this.name} ${text} ${this.city} ${txt}, ${rating}`
}

console.log(ratePlace.call(restourant, "in", "is fantastic", 10));



// ---------APPLY----------

// -----------I primer-----------

let person1 = {
    name: "Enes",
    lastName: "Becovic"
}

function getFullName(text, grade){
    return `${this.name} ${this.lastName} ${text} ${grade}`
}

console.log(getFullName.apply(person, ["je polozio ispit sa ocenom", 10]));


// ----------II primer---------


let hotel = {
    name: "Plaza",
    place: "New York"
}

function bookHotel(stars, text){
    return `${this.name}, ${this.place}, ${stars} ${text}`
}

console.log(bookHotel.apply(hotel, [5, "stars"]));


// ----------III primer----------

let obj = {
    mul: function(a, b){
        return a * b;
    },
}

function multiply(a, b){
    return this.mul(a, b);
}

console.log(multiply.apply(obj, [5, 5]));


// ----------BIND----------


// ----------I primer----------

let personn = {
    name: "Esma",
    lastName: "Becovic",
    getFullName: function(){
        return `${this.name} ${this.lastName}`
    }
}

function fullName(){
    return this.getFullName()
}

const bindedFunction = fullName.bind(personn)


console.log(bindedFunction());


// --------II primer----------

let cube = {
    getArea: function(a){
        return a * a;
    }
}

function calcArea(a){
    return this.getArea(a)
}

const bindedFunctionn = calcArea.bind(cube)

console.log(bindedFunctionn(7));


// -----------III primer-----------

let state = {
    city: "London",
    street: "Notting Hill"
}

function getState(text){
    return `${this.street} ${text} ${this.city}`
}

const bindF = getState.bind(state)

console.log(bindF("is a street in"));