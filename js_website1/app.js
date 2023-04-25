const BASE_URL = `\https://fakestoreapi.com/`

async function showProducts(){
    const data = await fetch(`${BASE_URL}products`)
    const response = await data.json();
    return response
}

async function getCategories(){
    const data = await fetch(`${BASE_URL}products/categories`)
    const response = await data.json()
    return response;
}

getCategories().then((res) =>{
    console.log(res);
    navBar(res)
})
function navBar(response){
    try{
        response.forEach(el =>{
            let category = document.querySelector('.category')
            category.addEventListener('click', () =>{
                window.location.href = `categories.html?id=${el.id}`
            })
        })
    } catch(e){
        console.log(e);
    }
    
}

showProducts().then((res) =>{
    console.log(res);
    UI(res);
})
function UI(response){
    try{
        response.forEach(el => {
            let container = document.querySelector('.container')
            
            let smallCard = document.createElement('div')
            smallCard.className = 'small-card'
            
            let img = document.createElement('img')
            img.src = el.image
            img.className = 'img-product'
            
            let title = document.createElement('h2')
            title.innerHTML = el.title
            title.className = 'title-product'

            let price = document.createElement('p')
            price.innerHTML = `${el.price}$`
            price.className = 'price-product'

            let btn = document.createElement('button')
            btn.innerHTML = `See more`
            btn.className = 'btn'

            btn.addEventListener('click', () =>{
                window.location.href = `detail.html?id=${el.id}`
            })

            smallCard.appendChild(img)
            smallCard.appendChild(title)
            smallCard.appendChild(price)
            smallCard.appendChild(btn)
            container.appendChild(smallCard)
        });

    } catch(e){
        console.log(e);
    }
}



