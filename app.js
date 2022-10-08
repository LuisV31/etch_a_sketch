const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const sizeOfGrid = 16

const createGrid = (numOfGrids) => {
    for (let i = 0; i < numOfGrids; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < numOfGrids; j++) {
            const widthAndHeight = 960 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            // adding mouseenter listener to change background color
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }

        container.appendChild(row)
    }
}

createGrid(sizeOfGrid)