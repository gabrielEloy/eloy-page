const developers = [];
let cards = ''

//push Gabriel Eloy
developers.push({
    name: 'Gabriel Eloy',
    src: 'assets/images/geloy.png',
    twitter: '',
    dev: 'https://dev.to/gabrieleloy',
    github: 'http://github.com/gabrielEloy'
})
//push Victor Eloy
developers.push({
    name: 'Victor Eloy',
    src: 'assets/images/veloy.jpeg',
    twitter: '',
    dev: '',
    github: 'https://github.com/victorrseloy'
})


for(let i = 0; i < developers.length; i++){
    const card = `
    <div class="card-wrapper">
        <img src=${developers[i].src}>
        <div class="social-media">
            <h3>${developers[i].name}</h3>
            <div class="icons">
                <a href=${developers[i].twitter}>
                    <i class="fab fa-twitter fa-2x" alt="Gabriel Eloy twitter link"></i>
                </a>
                <a href=${developers[i].dev}>
                    <i class="fab fa-dev fa-2x" alt="Gabriel Eloy dev link"></i>
                </a>
                <a href=${developers[i].github}>
                    <i class="fab fa-github fa-2x" alt="Gabriel Eloy github link"></i>
                </a>
            </div>
        </div>
    </div>`
    cards += ` ${card}`
}

const container = document.getElementById('swipe');
container.innerHTML = cards;
