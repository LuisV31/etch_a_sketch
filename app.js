const container = document.querySelector('.container');
const drawingArea = document.querySelector('.drawing-area');
// const resetButton = document.getElementById('resetButton');
// const eraseModeButton = document.getElementById('eraseMode');
const clearGridButton = document.getElementById('clearGrid');
const rainbowModeButton = document.getElementById('rainbowMode');
// let isErasing = false; 
let isRainbowMode = false;

const createGrid = (numOfGrids) => {
    drawingArea.innerHTML = ''; // Clear the existing grid

    const gridSize = drawingArea.offsetWidth; // Use the width of the drawing area for grid size
    const boxSize = gridSize / numOfGrids; // Calculate the size of each grid box

    for (let i = 0; i < numOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        row.style.height = `${boxSize}px`; // Set the height of the row based on box size

        for (let j = 0; j < numOfGrids; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${boxSize}px`;
            gridBox.style.height = `${boxSize}px`;

            // Adding event listeners for drawing/erasing/rainbow functionality
            gridBox.addEventListener('mouseover', () => {
                if (isRainbowMode) {
                    gridBox.style.backgroundColor = getRandomColor(); // Set to a random color
                } else {
                    gridBox.style.backgroundColor = '#000000'; // Default drawing color (black)
                }
            });

            row.appendChild(gridBox); // Add the grid box to the current row
        }

        drawingArea.appendChild(row); // Add the current row to the drawing area
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

// resetButton.addEventListener('click', () => {
//     let userSize = Number(prompt('Enter new grid size (up to 100):'));
//     userSize = userSize > 100 ? 100 : userSize;
//     createGrid(userSize);
// });
// const toggleActiveState = (button) => {
//     if (button.classList.contains('active-mode')) {
//         button.classList.remove('active-mode');
//     } else {
//         // Remove active state from all buttons first
//         const buttons = document.querySelectorAll('.controls button');
//         buttons.forEach(btn => btn.classList.remove('active-mode'));

//         // Then add the active state to the clicked button
//         button.classList.add('active-mode');
//     }
// };

// eraseModeButton.addEventListener('click', () => {
//     isErasing = !isErasing;
//     eraseModeButton.textContent = isErasing ? 'Drawing Mode' : 'Erase Mode';
//     toggleActiveState(eraseModeButton); // Toggle active state visual feedback
// });

clearGridButton.addEventListener('click', () => {
    // Apply the shake effect to the container
    container.classList.add('shake-animation');

    // Clear the grid boxes
    document.querySelectorAll('.grid-box').forEach(box => {
        box.style.backgroundColor = 'rgb(211, 217, 223)';
    });

    // Remove the shake effect after the animation completes
    setTimeout(() => {
        container.classList.remove('shake-animation');
    }, 500);
});

rainbowModeButton.addEventListener('click', () => {
    isRainbowMode = !isRainbowMode;
    rainbowModeButton.textContent = isRainbowMode ? 'Classic Mode' : 'Rainbow Mode';
    rainbowModeButton.classList.toggle('active-mode');
});


createGrid(100); // Default grid size