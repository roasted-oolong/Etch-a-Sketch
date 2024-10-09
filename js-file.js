const container = document.querySelector('#container')

let gridNumber = 16; //default
const gridSize = gridNumber * gridNumber;
function createGrid() {
    let i = 0;
    while (i < gridSize) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.width = `${100/gridNumber}%`;
        block.style.height = `${100/gridNumber}%`
        container.appendChild(block);
        i++
    }
}
createGrid();