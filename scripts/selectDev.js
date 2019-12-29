const devs = document.querySelectorAll('.card-wrapper');

let selectedDev;
const devsInfo = {
    'Gabriel Eloy': { 
        title: 'Software Engineer',
        description: 'Javascript generalistic developer, react and react native specialist. Loves writing software and uses it as its art and way of comunicating to the world.',
        img: 'assets/images/geloy.png',
        social: {
                linkedin: 'https://www.linkedin.com/in/gabriel-eloy-746330143/',
                dev: 'https://dev.to/gabrieleloy',
                github: 'https://github.com/gabrielEloy'
                }
    },
    'Victor Eloy': {
        title: 'Software Engineer',
        description: 'Javascript generalistic developer. Loves writing software and uses it as its art and way of comunicating to the world.',
        img: 'assets/images/veloy.jpeg',
        social : {
            linkedin:  'https://www.linkedin.com/in/victorrseloy/',
            github: 'https://github.com/victorrseloy'
        }
    }
} 

function generateIcons() {
    const { social } = devsInfo[selectedDev]
    const socialMedia = Object.keys(social);
    let iconsHTML = ``
    
    for(let currentSocialMedia of socialMedia){
        const currentIcon = `
        <a href=${social[currentSocialMedia]}>
            <i class="fab fa-${currentSocialMedia} fa-3x" alt="${selectedDev} ${currentSocialMedia} link"></i>
        </a>
        `
        iconsHTML += currentIcon;
    }
    return iconsHTML;
}

function updateData() {
    const devName = document.getElementById('dev-name');
    const devTitle = document.getElementById('dev-title');
    const picture = document.getElementById('dev-pic');
    const desc = document.getElementById('description');
    const icons = document.getElementById('icons');

    devName.innerText = selectedDev;
    devTitle.innerText = devsInfo[selectedDev].title;
    picture.src = devsInfo[selectedDev].img;
    desc.innerText = devsInfo[selectedDev].description;
    icons.innerHTML = generateIcons();
}

function retriggerAnimation(elementID, animationClass) {
    const devPic = document.getElementById(elementID);
    devPic.classList.remove(animationClass);
    void devPic.offsetWidth;

    devPic.classList.add(animationClass);

}

for(let dev of devs){
    dev.addEventListener('click', (e) => {
        if(!isDown){
            selectedDev = dev.innerText.replace("\n", '').trim();
            updateData();
            retriggerAnimation('dev-pic', 'slide-animation');
            retriggerAnimation('description', 'show-animation');
            retriggerAnimation('dev-name', 'drop-animation');
            retriggerAnimation('dev-title', 'slide-left-animation');
        }
    })
}
