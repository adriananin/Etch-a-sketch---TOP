const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
  const newDiv = document.createElement("div");
  newDiv.className = "grid";
  newDiv.textContent = " d  ";
  container.appendChild(newDiv);
}

function changeColorOnHover() {
  const button = document.getElementById("changeColor");
  button.addEventListener("click", function () {
    const grid = document.getElementsByClassName("grid");
    for (let i = 0; i < grid.length; i++) {
      grid[i].addEventListener("mouseover", function (e) {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor =
          "rgb(" + red + ", " + green + ", " + blue + ")";
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  changeColorOnHover();
});

function resetColor() {
  const grid = document.getElementsByClassName("grid");
  for (let i = 0; i < grid.length; i++) {
    grid[i].style.backgroundColor = "white";
  }
}

const resetButton = document.getElementById("resetColor");
resetButton.addEventListener("click", resetColor);

const blackButton = document.getElementById("blackColor");
blackButton.addEventListener("click", function () {
  const grid = document.getElementsByClassName("grid");
  for (let i = 0; i < grid.length; i++) {
    grid[i].addEventListener("mouseover", function () {
      grid[i].style.backgroundColor = "black";
    });
  }
});
