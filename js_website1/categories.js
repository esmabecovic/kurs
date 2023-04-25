function getCategoryId() {
    const params = new URLSearchParams(window.location.search);
    const categoryId = params.get('id')
    console.log(categoryId);
}

    window.addEventListener('load', () => {
        getCategoryId();
    });

let container = document.querySelector('.container')
async function showCategory(){
    let data  = await fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
    let response = await data.json();
    return response;
}
showCategory().then((res) =>{
    console.log(res);
    UI(res)
})

function UI(response){
    try{
        response.forEach(el => {
            
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








