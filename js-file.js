const container = document.querySelector('#container')

let gridNumber = 16; //default
function createGrid() {
    container.innerHTML = ''; //reset container
    const gridSize = gridNumber * gridNumber;

    let i = 0;
    while (i < gridSize) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.width = `${100/gridNumber}%`;
        block.style.height = `${100/gridNumber}%`
        container.appendChild(block);
        i++
    }

    const blocks = document.querySelectorAll('.block');
    blocks.forEach((block) => {
        block.addEventListener('mouseover', () => {
            block.style.backgroundColor = 'blue';
    })
    })
}
createGrid();

const btnChangeGrid = document.querySelector('#change-grid');
btnChangeGrid.addEventListener('click', () => {
    const newGrid = window.prompt("Enter New Grid Number" , "")
    if (newGrid >=1 && newGrid <=100) {
        gridNumber = newGrid;
        createGrid();
    } else {
        alert('ERROR');
    }
})