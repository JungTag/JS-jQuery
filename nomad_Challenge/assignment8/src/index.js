// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const gameForm = document.querySelector(".js-gameForm"),
  rangeBar = gameForm.querySelector(".js-rangeBar"),
  inputDiv = document.querySelector(".js-input"),
  input = inputDiv.querySelector("input"),
  result = document.querySelector(".js-result");

let condition = document.querySelector(".js-condition");
let randomNumber = 0;

function getRandomNumber(max) {
  max = parseInt(max);
  return Math.floor(Math.random() * (max + 1));
}

function paintCondition(value) {
  condition.innerText = `Generate a number between 0 and ${value}`;
}

function handleChangeNumber(event) {
  const currentValue = rangeBar.value;
  randomNumber = getRandomNumber(currentValue);
  paintCondition(currentValue);
}

function guessNumber(answer) {
  const instruction = document.createElement("p"),
    notification = document.createElement("p");
  instruction.innerText = `You chose: ${answer}, the machine chose: ${randomNumber}.`;
  if (randomNumber === parseInt(answer)) {
    notification.innerText = "You win!";
  } else {
    notification.innerText = "You lost!";
  }
  notification.classList.add("bold");
  result.appendChild(instruction);
  result.appendChild(notification);
}

function clearResult() {
  result.innerHTML = "";
}

function handleSubmit(event) {
  event.preventDefault();
  clearResult();
  const answer = input.value;
  guessNumber(answer);
}

function init() {
  const defaultValue = rangeBar.value;
  paintCondition(defaultValue);
  randomNumber = getRandomNumber(defaultValue);
  gameForm.addEventListener("submit", handleSubmit);
  rangeBar.addEventListener("input", handleChangeNumber);
}

init();
