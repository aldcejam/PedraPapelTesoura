const player = document.querySelectorAll('.player_options div img')
const opposingPlayer = document.querySelectorAll('.adversary_options div img')

/* ==== reset players ==== */
function ResetPlayerOpacity() {
    player.forEach(a => {
        a.style.opacity = 0.3
    })
    opposingPlayer.forEach(b => {
        b.style.opacity = 0.3
    })
}
/* ==== Enemy player ==== */
function Enemy(random) {
    opposingPlayer[random].style.opacity = 1
}

/* ==== select brand ==== */
player.forEach((item, index) => {
    item.addEventListener('click', (a) => {
        ResetPlayerOpacity();

        /* ==== player selected-item ==== */
        item.style.opacity = 1;

        /* ==== Enemy ==== */
        let random = Math.floor(Math.random() * 3);
        Enemy(random);

        /* ==== wins ==== */
        let result = ""
        if (index == random) {
            result = "empate"
        } /* == 0=paper, 1=rock, 2=scissor == */
        else if ((index == 0 && random == 1) || (index == 1 && random == 2) || (index == 2 && random == 0)) {
            result = "vitoria"
        } else {
            result = "derrota"
        }

        /* ==== show result */
        document.querySelector('.result h3').innerHTML = result

    })
})