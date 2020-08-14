// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const clear = document.querySelector(".button-clear"),
  plus = document.querySelector(".button-plus"),
  minus = document.querySelector(".button-minus"),
  mul = document.querySelector(".button-mul"),
  div = document.querySelector(".button-div"),
  equals = document.querySelector(".button-equals"),
  nums = document.querySelectorAll(".num"),
  resultDiv = document.querySelector(".result"),
  display = resultDiv.querySelector("span");

let result = null,
  value = 0,
  isAfterNum = false,
  operator = "",
  temp = "";

function paintResult(num) {
  if (num) {
    display.innerText = num;
  } else {
    display.innerText = 0;
  }
}

function calculate(operator) {
  switch (operator) {
    case "+":
      result += value;
      break;
    case "-":
      result -= value;
      break;
    case "*":
      result *= value;
      break;
    case "/":
      result /= value;
      break;
    default:
      return;
  }
}

function initCalculator() {
  temp = "";
  result = null;
  value = 0;
  operator = "";
}

function handleClickClear(event) {
  initCalculator();
  paintResult();
}

function handleClickPlus(event) {
  temp = "";
  if (isAfterNum) {
    if (!result) {
      // 맨 처음 계산기를 사용할 때
      result = value;
    } else {
      calculate(operator); // 이전 연산을 수행
      paintResult(result);
    }
    operator = "+";
    isAfterNum = false;
  } else {
    alert("Please press the operator in the correct order!");
    window.location.reload();
  }
}

function handleClickMinus(event) {
  temp = "";
  if (isAfterNum) {
    if (!result) {
      // 맨 처음 계산기를 사용할 때
      result = value;
    } else {
      calculate(operator); // 이전 연산을 수행
      paintResult(result);
    }
    operator = "-";
  } else {
    alert("Please press the operator in the correct order!");
    window.location.reload();
  }
}

function handleClickMulti(event) {
  temp = "";
  if (isAfterNum) {
    if (!result) {
      // 맨 처음 계산기를 사용할 때
      result = value;
    } else {
      calculate(operator); // 이전 연산을 수행
      paintResult(result);
    }
    operator = "*";
  } else {
    alert("Please press the operator in the correct order!");
    window.location.reload();
  }
}

function handleClickDiv(event) {
  temp = "";
  if (isAfterNum) {
    if (!result) {
      // 맨 처음 계산기를 사용할 때
      result = value;
    } else {
      calculate(operator); // 이전 연산을 수행
      paintResult(result);
    }
    operator = "/";
  } else {
    alert("Please press the operator in the correct order!");
    window.location.reload();
  }
}

function handleEquals(event) {
  temp = "";
  calculate(operator);
  paintResult(result);
  initCalculator();
}

function handleClickNum(event) {
  const numButton = event.target;
  temp += numButton.innerHTML;
  value = parseInt(temp);
  paintResult(value);
  isAfterNum = true;
}

function init() {
  clear.addEventListener("click", handleClickClear);
  plus.addEventListener("click", handleClickPlus);
  minus.addEventListener("click", handleClickMinus);
  mul.addEventListener("click", handleClickMulti);
  div.addEventListener("click", handleClickDiv);
  equals.addEventListener("click", handleEquals);
  for (const num of nums) {
    num.addEventListener("click", handleClickNum);
  }
}

init();
