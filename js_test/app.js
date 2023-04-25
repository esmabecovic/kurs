const data1 = [2, 26, 38, 75, 11, 29]
const data2 = ["a", "b", "c", "d", "e"]

const data3 = data1.concat(data2);

console.log(data3);

const data4 = data1.filter((el) =>{
    if(el % 2 === 0){
        return el;
    }
})
console.log(data4);

data2.unshift(10, 20)
console.log(data4);

const doubleIndex  = data1.map((el, i) =>{
    if(i === 0 || i === 3 || i === 5){
        return el * el;
    }
    return el
})

console.log("data 4", doubleIndex);

const numbers = [2, 5, 10, 3, 4, 8]

const values = numbers.map((el) =>{
    if(el > 2 && el < 8){
        return (el * 4)/2
    }
    else if(el > 2){
        return el * 7
    }
    else 
    return el
})

console.log(values);

const filtered = values.filter((el) =>{
    if(el < 10){
        return el
    }
})

console.log(filtered);


const words = ["televizor", "daljinski", "telefon", "voda", "ranac", "stolica"]

const secondE = words.filter((el, i) =>{
    if(el[1] === "e")
    return el;
})

console.log(secondE);


// ---------------------------------

const sixLetters = words.filter((el) =>{
    if(el.length <= 6)
    return el
})
console.log(sixLetters);

const evenNumbers  = data1.filter((el) =>{
    if(el % 2 === 0 && el <= 50)
    return el
})
console.log(evenNumbers);

const age = data1.reduce((prev, curr) =>{
    return (prev + curr);
})/data1.length

console.log(age);

const totalDistanceInKilometres = data1.map((el) =>{
    return el * 1000
})

console.log(totalDistanceInKilometres);

const doubleAndCompute = data1.reduce((prev, curr) =>{
    if(curr % 2 === 0){
        prev.push(curr * 2)
    }
    return prev
})

console.log(doubleAndCompute);
