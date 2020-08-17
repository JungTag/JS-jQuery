const NINE_HOURS_MILLISECONDS = 32400000;
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const nowDay = new Date();
  const hours = nowDay.getHours();
  const minutes = nowDay.getMinutes();
  const seconds = nowDay.getSeconds();
  clockTitle.innerText = `
  ${hours < 10 ? `0${hours}` : hours
} : ${minutes < 10 ? `0${minutes}` : minutes} : ${
  seconds < 10 ? `0${seconds}` : seconds
}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();