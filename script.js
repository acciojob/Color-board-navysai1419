document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('color-board');

    // Create 800 square elements
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        // Add an event listener for reverting to the original color after 1 second
        square.addEventListener('mouseenter', function () {
            const el = this;
            el.style.backgroundColor = '#3498db';
            setTimeout(function () {
                el.style.backgroundColor = 'lightgray';
            }, 1000);
        });
    }
});
