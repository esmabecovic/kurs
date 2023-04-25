const BASE_API = `https://api.github.com/users/`
const search = document.querySelector('#search')
const btn = document.querySelector('.btn')
const main = document.querySelector('.main')


async function getData(username){
        const data = await fetch(BASE_API + username)
        const response = await data.json()
        return response;
    }

 async function getRepos(username){
    const data = await fetch(BASE_API + username + '/repos')
    const response = await data.json()
    return response
}

function showRepos(repos){
    let namesRepos = repos.map((item) =>item.name);
    console.log(namesRepos);

    namesRepos.forEach(el=> {
        let card = document.createElement('div')

        let repo = document.createElement('div')
        repo.innerHTML = el

        card.appendChild(repo)
        main.appendChild(card)

    });
    
}

const showCard = (data) =>{
    let card = document.createElement('div')
    card.className = 'card'

    let img = document.createElement('img')
    img.src = data.avatar_url;
    img.className = 'avatar'

    let name = document.createElement('h2')
    name.innerHTML = data.name
    card.className = 'name'

    let bio = document.createElement('p')
    bio.innerHTML = data.bio
    bio.className = 'bio'

    let followers = document.createElement('p')
    followers.innerHTML = `Followers: ${data.followers}`
    followers.className = 'followers'

    let following = document.createElement('p')
    following.innerHTML = `Following: ${data.following}`
    following.className = 'following'

    let reposNum = document.createElement('p')
    reposNum.innerHTML = data.public_repos

    

    card.appendChild(img)
    card.appendChild(name)
    card.appendChild(bio)
    card.appendChild(followers)
    card.appendChild(following)
    card.appendChild(reposNum)
    // card.appendChild(repos)

    main.appendChild(card)

    // console.log(data);
}

btn.addEventListener('click', () =>{
    const user = search.value

    getData(user).then((data) =>{
        console.log(data);
        showCard(data)
    })
    getRepos(user).then((repos) =>{
        showRepos(repos);
    })
})