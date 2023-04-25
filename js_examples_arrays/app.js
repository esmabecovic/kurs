// --------------MAP----------------


let arr = ["Esma", "Amir", "Rifat", "Ahmed", "Ena", "Tarik", "Dina", "Edina", "Faris"]

const duplicateLastLetter  = arr.map((el,i) => el + el.slice(-1))

console.log(duplicateLastLetter);


// --------------FILTER--------------


let numbers  = [1, 3, 4, 1, 2, 3, 5, 7, 5, 4]


const removeDuplicates = numbers.filter((el, i) => numbers.indexOf(el) === i)

console.log(removeDuplicates);




// --------------REDUCE---------------
//dodati poslednje slovo i izdvojiti imena koja se zavrsavju na A

let names = ["Esma", "Amir", "Rifat", "Ahmed", "Ena", "Tarik", "Dina", "Edina", "Faris"]


const duplicateAndFindLastA = names.reduce((prev, curr) =>{
    const duplicateLastLetter  = curr + curr.slice(-1)
    if(curr.charAt(curr.length-1) === 'a'){
    prev.push(duplicateLastLetter)
    }
    return prev
}, [])

console.log(duplicateAndFindLastA);
