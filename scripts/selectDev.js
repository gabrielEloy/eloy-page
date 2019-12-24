const devs = document.querySelectorAll('.card-wrapper');

let selectedDev;


function updateData() {
    const devName = document.getElementById('dev-name');
    const devTitle = document.getElementById('dev-title');
    const picture = document.getElementById('dev-pic');
    const desc = document.getElementById('description');

    devName.innerText = selectedDev;
    devTitle.innerText = 'Desenvolvedor';
    picture.src = selectedDev === 'Victor Eloy' ? 'assets/images/veloy.jpeg' : 'assets/images/geloy.png';
    desc.innerText = selectedDev === 'Victor Eloy' ? 'Lorem ipsum Veloy;' : 'Lorem ipsum Geloy;'
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
            selectedDev = dev.outerText.trim();
            updateData();
            retriggerAnimation('dev-pic', 'slide-animation');
            retriggerAnimation('description', 'show-animation');
            retriggerAnimation('dev-name', 'drop-animation');
            retriggerAnimation('dev-title', 'slide-left-animation');
        }
    })
}
