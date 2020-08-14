// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const screen = document.querySelector("body");
const originWidth = window.self.innerWidth;
const colors = ["blue", "purple", "yellow"];

function handleWidth() {
  const width = window.self.innerWidth;
  if (width <= originWidth) {
    console.log(width);
    screen.classList.remove(colors[1]);
    screen.classList.remove(colors[2]);
    screen.classList.add(colors[0]);
  } else if (width > originWidth && width < 1350) {
    console.log(width);
    screen.classList.remove(colors[0]);
    screen.classList.remove(colors[2]);
    screen.classList.add(colors[1]);
  } else {
    console.log(width);
    screen.classList.remove(colors[0]);
    screen.classList.remove(colors[1]);
    screen.classList.add(colors[2]);
  }
}
function init() {
  screen.classList.add(colors[0]);
  window.addEventListener("resize", handleWidth);
}

init();