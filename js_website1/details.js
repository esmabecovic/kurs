const params = new URLSearchParams(window.location.search);
const productId = params.get('id')
console.log(productId);

let container = document.querySelector('.container1')
async function getProduct(){
    let data  = await fetch(`https://fakestoreapi.com/products/${productId}`)
    let response = await data.json();
    return response;
}
getProduct().then((res) =>{
    console.log(res);
})

getProduct().then((el) =>{

        let card = document.createElement('div')
        card.className = 'card'

        let img = document.createElement('img')
        img.src = el.image
        img.className = 'img-detail'

        let title = document.createElement('h2')
        title.innerHTML = el.title
        title.className = 'title-detail'

        let description = document.createElement('p')
        description.innerHTML = el.description
        description.className = 'description'

        let price = document.createElement('p')
        price.innerHTML = `Price: ${el.price}$`
        price.className = 'price-detail'

        let rating = document.createElement('p')
        rating.innerHTML = `Rating: ${el.rating.rate}`;
        rating.className = 'rating'

        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(description)
        card.appendChild(price)
        card.appendChild(rating)
        container.appendChild(card)
    });