//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector(".container");

  // Create 800 boxes
  for (let i = 0; i < 800; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    // Add an event listener to reset the color after 1 second
    square.addEventListener("mouseover", function() {
      setTimeout(function() {
        square.style.backgroundColor = "rgb(29, 29, 29)";
      }, 1000);
    });
  }
});
