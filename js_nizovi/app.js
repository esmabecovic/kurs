// let ime= "esma";
// let ime1= "rifat";
// let ime2= "coka";
// let ime3= "merima";
// let ime4= "ahmed";

// let osobe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(osobe[1]) // index osobe, to jest, index elementa u nizu
// svaki element niza ima svoj index, i njemu pristupamo pomocu []

// let suma = 0;

// for (i = 0; i < osobe.length; i++) {
//     suma += osobe[i];
// }
// console.log(suma)

// const fruits = ["apple", "mango", "banana", "kiwi", "peach", "cherry", "strawberry"]

// function getArrayMedian(arr){
//     if(arr.length % 2 !== 0){
//         const median = arr[(arr.length - 1) / 2];
//         console.log(median);
//     }
//     else{
//         console.log("Broj clanova niza je paran");
//     }

// }
// // console.log(fruits)
// getArrayMedian(fruits);


// const fruits = ["apple", "mango", "banana", "kiwi", "peach", "cherry", "strawberry"]

// fruits.reverse();

// console.log(fruits);

// const colors = ["red", "blue", "pink", "green"];

// const spojeniNiz = fruits.concat(colors);
// console.log(spojeniNiz);
// console.log("fruits", fruits);
// console.log("colors", colors)

// for(let i = 0; i < fruits.length; i++){
//     fruits[i] = `${fruits[i]}A`
// }
// console.log(fruits);

// const newArray = [];
// fruits.forEach(function(item, index){ //item === fruits[i]
//     if(item.length <= 5){
//         newArray.push(item)
//     }
// })

// console.log(newArray);

// const people = ["ena", "dina", "esma", "amir", "omer", "ahmed", "rifat"]

// const newArray = [];
// people.forEach(function(el, index){
//     // console.log(el);
//     // console.log(index);
//     if(index % 2 === 0){
//         newArray.push(el)
//     }
// })
// console.log(newArray)







// --------MAP--------------

// let arr= [2, 3, 4, 5, 6, 7, 8]
// let modifiedArray = arr.map(function(el, index){
//     return el * 2;
// })

// console.log(modifiedArray);

// let newArray = arr.map(function(el, index){
//     return el.toString();
// })
// console.log(newArray);

// let newArray = arr.map(function(el, index){
//     return Math.sqrt(el);
// })
// console.log(newArray);

// let newArray = arr.map(function(el, index){
//     if(index % 2 !== 0){
//         return (el * el) + 2;
//     }
//     else 
//     return el;
// })

// console.log(newArray);


// let arr = [esma, rifat, amir, ahmed, ena, dina]

// let newArray = arr.map(function(el, index){
//     let capitalizedFirst = el.charAt(0).toUpperCase();
//     let rest = el.slice(1).toLowerCase();
//     return capitalizedFirst + rest;
// })

// console.log(newArray);







// -----------FILTER-----------

// const numbers = [1, 2, 10, 39, 68, 23, 60, 35];

// const evenNumbers = numbers.filter(function(el, index){
//     if(el % 2 === 0){
//         return el
//     }
// })
// console.log(evenNumbers);


// const names = ["esma", "faris", "Aisa", "zein", "osman", "alen", "sara", "asmir"];

// const shortNames = names.filter(function(el, index){
//     if(el.length < 5){
//         return el
//     }
// })

// console.log(shortNames);


// const firstLetterA = names.filter(function(el, index){
//     if(el.charAt(0).toLowerCase() === 'a'){
//         return el
//     }
// })







// ------------SLICE-------------


// const capitalFirst = firstLetterA.map(function(el, index){
//     return el.charAt(0).toUpperCase() + el.slice(1)
// })

// console.log(capitalFirst);
// console.log(firstLetterA);

// let name = ["esma becovic", "zein delic", "emir dautovic"]

// const initials = name.map(function(el, i){
//     const splittedNames = el.split(" ");
//     const initialName = splittedNames[0].charAt(0);
//     const initialSurname = splittedNames[1].charAt(0);
//     return initialName + initialSurname;
// })

// console.log(initials);








// -------------REDUCE-----------------

//sluzi za sabiranje
//moze da odradi i map i filter zajedno
//ne mora da vraca iskljucivo niz, moze bilo koju vrednost


// const arr = [1,2,3,4,5,6,7,8,9,10]

// const avarageArr = arr.reduce(function(previous, current){
//     return (previous + current)
// })/arr.length

// console.log(avarageArr);


// const articles = [100, 300, 500, 1000]

// const total = articles.reduce(function(prev, curr){
//     return prev + curr
// }, 350) //350 je postarina

// console.log(total);


// const numbers = [2, 3, 5, 8, 10]

// const mappedAndFilter = numbers.reduce(function(prev, curr){
//     const squared = curr*curr;
//     if(squared % 2 === 0){
//         prev.push(squared)
//     }
//     return prev
// }, []) //pocetna vrednost u prvoj iteraciji

// console.log(mappedAndFilter);













// -----------------ARROW FUNCTION NOTATION---------------


function saberi(a, b){
    return a+b;
}
const zbir = saberi(2, 2);
// console.log(zbir);


// ------arrow------

const sum = (a, b) => a+b;

// console.log(sum(5, 10));


//

const upperCase = ime => ime.toUpperCase()

// console.log(upperCase("esma"));


//

const numbers = [2, 3, 5, 5, 1, 3]

const squared = numbers.map((num, i) => num*num+i)

// console.log(squared);


//

// const reverseText = text =>{
//     const textToArray = text.split("");
//     return  reversed = textToArray.reverse().join("");
// }

const reverseText = text => text.split("").reverse().join("");

// console.log(reverseText("esma"));


//


// const brojevi = [2, 4, 5, 7, 2, 4, 8, 9]

// const even = brojevi.filter(num => num % 2 === 0)

// console.log(even);


// uslov ? ispunjen : neispunjen
const price = +prompt("Unesite cenu artikla");
const discount = price > 1000 ? 0.2 : 0.1; 

console.log(discount);