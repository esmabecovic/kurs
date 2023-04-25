// let bold = document.querySelector('.bold')
// let italic = document.querySelector('.italic')
// let right = document.querySelector('.right')
// let center = document.querySelector('.center')
// let left = document.querySelector('.left')
// let upper = document.querySelector('.upper')
// let lower = document.querySelector('.lower')
// let capital = document.querySelector('.capital')
// let clear = document.querySelector('.delete')

// bold.addEventListener('click', () =>{
//     let textArea = document.querySelector('textarea')
//     textArea.style.fontWeight = "bold" 
// })
const textArea = document.getElementById('texta');
   console.log(textArea)
// console.log(bold);
function boldText(){
    textArea.style.fontWeight = "bold" 
}

function italicText(){
    textArea.style.fontStyle = "italic"
}

function alignRight(){
    textArea.style.textAlign = "right"
}

function alignCenter(){
    textArea.style.textAlign = "center"
}

function alignCenter(){
    textArea.style.textAlign = "left"
}

function upperCase(){
    textArea.style.textTransform = "upperCase" 
}

function lowerCase(){
    textArea.style.textTransform = "lowerCase" 
}

function capitalLetter(){
    textArea.style.textTransform = "capitalize"
}

function clearText(){
    textArea.value = ''
}