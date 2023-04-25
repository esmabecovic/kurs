let container = document.querySelector('.container')
let countries = [];
let searchContainer = document.createElement('div');
searchContainer.className = 'search-container';

let search = document.createElement('input') 
search.className  = 'search'
search.placeholder = 'Search'
searchContainer.appendChild(search);
container.appendChild(searchContainer);

// search.addEventListener('input', () => {
//         const searchTerm = search.value.toLowerCase();
    
//         const filteredCountries = countries.filter(country => {      
//             const name = country.name.common.toLowerCase();
//             return name.includes(searchTerm);
//         });
    
//         cardContainer.innerHTML = '';
    
//         filteredCountries.forEach(country => {
//             const card = createCard(country);
//             cardContainer.appendChild(card);
//         });
//     });
//     function createCard(country) {
//         const card = document.createElement('div');
//         card.className = 'card';
//         const flag = document.createElement('img');
//         flag.src = country.flags.png;
//         flag.className = 'flag';
//         const name = document.createElement('p');
//         name.innerHTML = `Country: ${country.name.common}`;
//         const capital = document.createElement('p');
//         capital.innerHTML = `Capital city: ${country.capital}`;
//         const region = document.createElement('p');
//         region.innerHTML = `Region: ${country.region}`;
    
//         card.addEventListener('click', () => {
//             window.location.href = `index1.html?name=${country.name.common}`;
//         });
        
//         card.push(country)
//         card.appendChild(flag);
//         card.appendChild(name);
//         card.appendChild(capital);
//         card.appendChild(region);
    
//         return card;
//     }

let cardContainer = document.createElement('div')
    cardContainer.className = 'card-container'
    container.appendChild(cardContainer);        

async function getCountries(){
    let data = await fetch('https://restcountries.com/v3.1/all')
    let response = await data.json();
    return response
}

getCountries().then((response) =>{
    console.log(response,"response");


    response.forEach(el => {
        let card = document.createElement('div')
        card.className = 'card';
        let flag = document.createElement('img')
        flag.src = el.flags.png
        flag.className = 'flag' 
        let name = document.createElement('p')
        name.innerHTML = `Countrie: ${el.name.common}`
        let capital = document.createElement('p')
        capital.innerHTML = `Capital city: ${el.capital}`
        let region = document.createElement('p')
        region.innerHTML = `Region: ${el.region}`

        card.addEventListener("click", () => {
            window.location.href = `index1.html?name=${el.name.common}`;
        });


        card.appendChild(flag);
        card.appendChild(name);
        card.appendChild(capital);
        card.appendChild(region)
        cardContainer.appendChild(card)

        // container.appendChild(card);

    });
})
