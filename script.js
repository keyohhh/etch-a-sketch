const container = document.querySelector('#container')
const gridSize = document.querySelector('.size')
const slider = document.querySelector('#slider')
const blackBtn = document.querySelector('.black-btn')
const rainbowBtn = document.querySelector('.rainbow-btn')
const chooseColorBtn = document.querySelector('.color-choice-btn')
const resetBtn = document.querySelector('.reset-btn')

makeGrid(50);

//dynamically make grid from slider
slider.addEventListener('input', makeGrid)


function makeGrid() {
    x = slider.value;
    gridSize.textContent = x;
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (let i = 0; i < slider.value;i++) {
        const div = document.createElement('div')
        div.className = "grid-row";
        div.style.height = "100%"
        container.appendChild(div);
    for (let j = 0; j < slider.value; j++) {
        const row = document.createElement('div');
        row.className = "grid-col cell";
        row.style.width = "100%";
        div.appendChild(row);
    }
    }
}



//black button changes mouseover to black color
blackBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'
        })
    })
})

//rainbow button changes mouseover to random colors
rainbowBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomColor();
        })
    })
})

function randomColor() {
    let numbers = "0123456789ABCDEF";
    let symbols = "#";
    for (let i = 0;i < 6;i++) {
        symbols += numbers[Math.floor(Math.random() * 16)]
    }
    return symbols;
}

//button to choose your own color
function chooseYourOwnColor() {
    let color = document.querySelector('.color-choice-btn').value
    return color;
}

chooseColorBtn.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = chooseYourOwnColor();
        })
    })
})


//reset button
function reset() {
    const cells = document.querySelectorAll('.cell')
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white'
    })
}

resetBtn.addEventListener('click', reset)




























/*function makeGrid(numberOfCells) {
    
    for (let i = 0; i < numberOfCells;i++) {
        const div = document.createElement('div')
        div.className = "grid-box";
        div.style.height = "100%"
        container.appendChild(div);
    for (let j = 0; j < numberOfCells; j++) {
        const row = document.createElement('div');
        row.className = "row";
        row.style.width = "100%";
        div.appendChild(row);
    }
    }
    
}*/