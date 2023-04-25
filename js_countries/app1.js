// https://restcountries.com/v3.1/all

const params = new URLSearchParams(window.location.search);
const nameC = params.get("name");
console.log(nameC);
let container = document.querySelector('.container1')
async function getCountrie(){
    let data  = await fetch(`https://restcountries.com/v3.1/name/${nameC}`)
    let response = await data.json();
    return response;
}

getCountrie().then((el) =>{
    console.log(el);

    el.forEach(el => {
        let card = document.createElement('div')
        card.className = 'card1';
        let flag = document.createElement('img')
        flag.src = el.flags.png
        flag.className = 'flag' 
        let name = document.createElement('p')
        name.innerHTML = `Countrie: ${el.name.common}`
        let capital = document.createElement('p')
        capital.innerHTML = `Capital city: ${el.capital}`
        let region = document.createElement('p')
        region.innerHTML = `Region: ${el.region}`
        let language = document.createElement('p')
        language.innerHTML = `Language: ${el.language}`
        let population = document.createElement('p')
        population.innerHTML = `Population: ${el.population}`

        card.appendChild(flag)
        card.appendChild(name)
        card.appendChild(capital)
        card.appendChild(region)
        card.appendChild(language)
        card.appendChild(population)

        container.appendChild(card)
    });
})

