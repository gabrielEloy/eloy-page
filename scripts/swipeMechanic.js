const swipeContainer = document.getElementById('swipe');

let isDown = false;
let startY;
let scrollTop;


swipeContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    swipeContainer.classList.add('active');
    startY = e.pageY; - swipeContainer.offsetTop;
    scrollTop = swipeContainer.scrollTop;
})
swipeContainer.addEventListener('mouseleave', () => {
    isDown = false;
    swipeContainer.classList.remove('active');
})
swipeContainer.addEventListener('mouseup', () => {
    isDown = false;
    swipeContainer.classList.remove('active');
})
swipeContainer.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const y = e.pageY - swipeContainer.offsetTop;
    const displacement = y - startY * (0.5);
    swipeContainer.scrollTop = -(displacement - scrollTop);
});
