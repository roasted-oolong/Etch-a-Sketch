const block = document.createElement('div').classList.add('block');
const container = document.querySelector('#container')

let gridNumber = 50; //default
const gridSize = gridNumber * gridNumber;
function createGrid() {
    let i = 0;
    while (i < gridSize) {
        container.appendChild(block);
    i++
    }
}