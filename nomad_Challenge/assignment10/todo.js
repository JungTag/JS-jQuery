const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  pendingList = document.querySelector(".js-pending"),
  finishedList = document.querySelector(".js-finished"),
  toDoList = document.querySelector(".js-toDoList"),
  list = document.querySelector(".list"),
  numOfToDos= toDoForm.querySelector("h2");

const PENDING_LS = "PENDING",
  FINISHED_LS = "FINSIHED";

let pending = [],
  finished = [];

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function handlePendingDelete(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanPending = pending.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  pending = cleanPending;
  numOfToDos.innerText = `${pending.length} TO DO`;
  savePending();
}

function handleFinshedDelete(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanFinshed = finished.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  finished = cleanFinshed;
  saveFinished();
}

function handleMoveToPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span");
  finishedList.removeChild(li);
  const cleanFinshed = finished.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  finished = cleanFinshed;
  saveFinished();
  paintToDo(span.innerText, 1);
}

function handleMoveToFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span");
  pendingList.removeChild(li);
  const cleanPending = pending.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  pending = cleanPending;
  savePending();
  paintToDo(span.innerText, 2);
}

function paintToDo(text, num) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = text + " ";
  delBtn.innerText = "❌";
  if (num === 1) {
    const newId = pending.length + 1;
    li.id = newId;
    pendingList.appendChild(li);
    delBtn.addEventListener("click", handlePendingDelete);
    checkBtn.innerText = "✅";
    checkBtn.addEventListener("click", handleMoveToFinished);
  } else {
    const newId = finished.length + 1;
    li.id = newId;
    finishedList.appendChild(li);
    delBtn.addEventListener("click", handleFinshedDelete);
    checkBtn.innerText = "⏪";
    checkBtn.addEventListener("click", handleMoveToPending);
  }
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  const toDoObj = {
    content: text,
    id: li.id
  };
  if (num === 1) {
    pending.push(toDoObj);
    savePending(); // toDos를 매개변수로 주면 안된다! -> 배열이 아닌 객체를 저장함
  } else {
    finished.push(toDoObj);
    saveFinished();
  }
  numOfToDos.innerText = `${pending.length} TO DO`;
}

function loadToDos() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  const loadedFinshed = localStorage.getItem(FINISHED_LS);
  if (loadedPending) {
    const parsedPending = JSON.parse(loadedPending);
    parsedPending.forEach(function (toDo) {
      paintToDo(toDo.content, 1);
    });
  }
  if (loadedFinshed) {
    const parsedFinished = JSON.parse(loadedFinshed);
    parsedFinished.forEach(function (toDo) {
      paintToDo(toDo.content, 2);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue, 1);
  toDoInput.value = "";
}

function askForUser() {
  const user = localStorage.getItem(USER_NAME);
  if (user) {
    toDoList.classList.add(SHOWING_CN);
    list.classList.add(SHOWING_CN);
  }
}

function init() {
  askForUser();
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
