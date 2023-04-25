// const person = {
//     name: "Esma",
//     lastName: "Becovic",
//     age: 21,
//     hobbies: ["volleyball", "fitness", "js-programming"],
//     height: 177
// };

// person.weight = 60; //dodavanje novog objekta

// const person2  = person; //pokazivac na vrednost "person"

// person2.name = "Amir";

// const modifiedEsma = {
//     ...person,
//     balance: "0"
// }

// const niz = [1, 1, 2, 4, 5, 2]

// const niz1 = [...niz, 2, 3]

// console.log(niz1);

//treba da se  napravi niz koji ce da sadrzi 10 studenata, svaki student jeobjekat koji sadrszi ime prezime niz predmeta i niz ocena i sta studira;
//obratite paznju da broj predmeta mora da bude jednak broju ocena (preko niza: niz ocena niz predmeta);
//treba da prodjete kroz sve studente da im pronadjete prosecnu ocenu i da sacuvamo u neki objekat; pravi se novi property
//novi niz da sacuvamo sve studente koji imaju vecu prosecnu ocenu od 8(filter metoda);

// -----------THIS-----------

const person = {
    name: "Esma",
    lastName: "Becovic",
    getFullName: function(){
      return  `${this.name} ${this.lastName}`
    },
    age: 21,
    address:  {
        city: "London",
        street: "Notting Hill",
        number: 90,
        getFullAddress: function(){
            return ` ${this.city} ${this.street} ${this.number}`
        }
    }
};

console.log(person.getFullName());


//objekat napravite i napravite funkciju koja vraca nadimak koji ima prva dva slova tvog imena i prva dva slova prezimena






// ---------------CALL--------------------


let obj = { food: "Pizza" };

function favFood(text, rating){
    return `${this.food} ${text} ${rating}`
};

console.log(favFood.call(obj, "je odlicna,", 10));








// ------------------APPLY------------------


let obj1 = {
    add: function(a, b, c){
        return a + b + c;
    },
}

function sumItUp(a, b, c){
    console.log(this);
    return this.add(a, b, c);
}

console.log(sumItUp.apply(obj1, [5, 5, 5]));









let person1 = {
    name: "Esma",
    age: 21
}

function sayHello(){
    return `Hello, ${this.name}, how was your day?`
}

console.log(sayHello.call(person1));



// ------------------BIND-------------------


let rectangle = {
    getArea: function(a, b){
        return a * b;
    }
}

function calcArea(a, b){
    return this.getArea(a, b);
}

const bindedFunction = calcArea.bind(rectangle);

console.log(bindedFunction(40,20));


//3*3 call apply bind










// ----------METODE------------

// ----------ENTRIES------------



const obj2 = {
    name: "Esma",
    age: 21,
    occupation: "Engineer"
}

console.log(Object.entries(obj2)[0][1]);




// ------------SET----------


const numbers = [1,2,1,3,4,2,1,13,4,4,2,2,5];

const removeDups = [...new Set(numbers)];

console.log(removeDups);

//seal, freeze, assign, hasownproperty, values, keys, 











