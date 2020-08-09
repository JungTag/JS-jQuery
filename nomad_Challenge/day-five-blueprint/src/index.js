import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay =
    new Date("2020-12-24:00:00:00+0900").getTime() + NINE_HOURS_MILLISECONDS;
  const nowDay = new Date().getTime() + NINE_HOURS_MILLISECONDS;
  const distance = xmasDay - nowDay;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  clockTitle.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
