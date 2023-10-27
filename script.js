const container = document.getElementById('color-board');

// Create 800 square elements
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    // Add a transitionend event listener to each square to smoothly revert the color
    square.addEventListener('transitionend', () => {
        square.style.backgroundColor = 'lightgray';
    });
}
