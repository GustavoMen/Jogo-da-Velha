document.addEventListener('DOMContentLoaded', () => {

    let resetGame = document.querySelector("#resetGame")
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O Jogo acabou - vencedor: jogador " + (playerTurn + 1))
        }, 10);


    };
    updateSquare(position);
}


function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];

    if (symbol != '') {
        square.innerHTML = `<div class='${symbol}'></div>`
    } else {
        square.innerHTML = ''
    }
}
    
