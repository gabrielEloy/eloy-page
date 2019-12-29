const developers = [];
let cards = ''

//push Victor Eloy
developers.push({
    name: 'Victor Eloy',
    src: 'assets/images/veloy.jpeg',
    linkedin: 'https://www.linkedin.com/in/victorrseloy/',
    dev: '',
    github: 'https://github.com/victorrseloy'
})
//push Gabriel Eloy
developers.push({
    name: 'Gabriel Eloy',
    src: 'assets/images/geloy.png',
    linkedin: '',
    dev: 'https://dev.to/gabrieleloy',
    github: 'http://github.com/gabrielEloy'
})


for(let i = 0; i < developers.length; i++){
    const card = `
    <div class="card-wrapper">
        <img src=${developers[i].src}>
        <div class="social-media">
            <h3>${developers[i].name}</h3>
            <div class="icons">
                <a href=${developers[i].linkedin}>
                    <i class="fab fa-linkedin fa-2x" alt="${developers[i].name} linkedin link"></i>
                </a>
                ${developers[i].dev ? `<a href=${developers[i].dev}>
                <i class="fab fa-dev fa-2x" alt="${developers[i].name} dev link"></i>
                </a>` : ''}
                <a href=${developers[i].github}>
                    <i class="fab fa-github fa-2x" alt="${developers[i].name} github link"></i>
                </a>
            </div>
        </div>
    </div>`
    cards += ` ${card}`
}

const container = document.getElementById('swipe');
container.innerHTML = cards;
