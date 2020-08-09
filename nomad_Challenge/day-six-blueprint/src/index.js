// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");
const COUNTRY_NAME = "country";

function handleSelect(){
  const option = select.value;
  setCountry(option);
}

function showCountry(name) {
  const selectedOption = document.getElementById(name);
  selectedOption.setAttribute("selected", "selected");
}

function setCountry(name) {
  localStorage.setItem(COUNTRY_NAME, name);
}

function loadCountry() {
  const savedCountry = localStorage.getItem(COUNTRY_NAME);
  console.log(savedCountry);
  select.addEventListener("change", handleSelect);
  if (savedCountry) {
    showCountry(savedCountry);
  }
}

function init() {
  loadCountry();
}

init();
