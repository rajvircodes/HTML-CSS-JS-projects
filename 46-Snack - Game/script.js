const board = document.querySelector(".board");
const blockHight = 80
const blockWidth = 80

const cols = Math.floor(board.clientHeight / blockHight);
const rows = Math.floor(board.clientWidth / blockWidth);


for(let row = 0; row<rows; row++){
    for(let col=0;col<cols;col++){
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerHTML = `${row}-${col}`
    }
}