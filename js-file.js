const container = document.querySelector('#container')

let gridNumber = 16; //default
const gridSize = gridNumber * gridNumber;
function createGrid() {
    let i = 0;
    while (i < gridSize) {
        const block = document.createElement('div.block');
        container.appendChild(block);
    i++
    }
}
createGrid();