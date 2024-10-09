const block = document.createElement('div.block');
const container = document.querySelector('#container')

let gridNumber = 16; //default
const gridSize = gridNumber * gridNumber;
function createGrid() {
    let i = 0;
    while (i < gridSize) {
        container.appendChild(block);
    i++
    }
}