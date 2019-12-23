const devs = document.querySelectorAll('.card-wrapper');

let selectedDev;


function updateData() {
    const devName = document.getElementById('dev-name');
    const devTitle = document.getElementById('dev-title');
    const picture = document.getElementById('dev-pic');
    const desc = document.getElementById('desccription');

    devName.innerText = selectedDev;
    devTitle.innerText = 'Desenvolvedor';
    picture.src = selectedDev === 'Victor Eloy' ? 'assets/images/veloy.jpeg' : 'assets/images/geloy.png';
    desc.innerText = 'É O BRAIA';
}

for(let dev of devs){
    dev.addEventListener('click', (e) => {
        if(!isDown){
            if(e.toElement.includes('<i')) e.preventDefault();
            selectedDev = dev.outerText.trim();
            updateData();
        }
    })
}
