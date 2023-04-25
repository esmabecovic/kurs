const hour = +prompt("Unesite broj casova od 1-24");
if(hour >= 1 && hour < 12 || hour === 24){
    alert("Dobro jutro!");
}
else if(hour >= 12 && hour < 19){
    alert("Dobar dan!");
}
else if(hour >= 19 && hour < 24){
    alert("Dobro vece!");
}
else{
    alert("Invalid hour")
}

// const x = +prompt("Unesite broj")
// if(x % 2 === 0){
//     alert("Broj je paran");
// }
// else{
//     alert("Broj je neparan")
// }

