let mario = document.querySelector(".mario");
let pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add("mario-jump");

    setTimeout(() => {
        mario.classList.remove("mario-jump");
    }, 500)
}


const loop = setInterval( () => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px` 

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px` 


        mario.src = "/img/game-over.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10)

document.addEventListener("keydown", jump);