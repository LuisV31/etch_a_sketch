const container = document.querySelector('.container');
const resetButton = document.getElementById('resetButton');
const eraseModeButton = document.getElementById('eraseMode');
const clearGridButton = document.getElementById('clearGrid');
let isErasing = false; 

const createGrid = (numOfGrids) => {
    container.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < numOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < numOfGrids; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            const widthAndHeight = 960 / numOfGrids; // Adjust size based on # of grids
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            // adding mouseenter listener to change background color
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = isErasing ? 'rgb(211, 217, 223)' : getRandomColor();
            });
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('Enter new grid size (up to 100):'));
    userSize = userSize > 100 ? 100 : userSize;
    createGrid(userSize);
});

eraseModeButton.addEventListener('click', () => {
    isErasing = !isErasing;
    eraseModeButton.textContent = isErasing ? 'Drawing Mode' : 'Erase Mode';
});

clearGridButton.addEventListener('click', () => {
    document.querySelectorAll('.grid-box').forEach(box => {
        box.style.backgroundColor = 'rgb(211, 217, 223)';
    });
});

createGrid(16); // Default grid size